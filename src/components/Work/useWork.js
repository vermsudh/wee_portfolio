import { useState, useEffect, useRef } from 'react'

export default function useWork() {

  // ── State ──────────────────────────────────
  const [activeReel,  setActiveReel]  = useState(null)
  const [triggerType, setTriggerType] = useState(null)  // 'hover' | 'click' | null
  const [isMuted,     setIsMuted]     = useState(false)

  // ── Refs ───────────────────────────────────
  const stripRef   = useRef(null)
  const sectionRef = useRef(null)
  const videoRefs  = useRef({})  // map: reel id -> <video> element

  // Mirror of activeReel/triggerType as refs for use in event handlers
  // (avoids stale closures when multiple events fire rapidly)
  const currentActiveIdRef      = useRef(null)
  const currentActiveTriggerRef = useRef(null)
  // Tracks the card that was just click-closed; prevents DOM-mutation-triggered
  // mouseenter from immediately re-activating hover on the same card
  const justClosedIdRef         = useRef(null)

  // ── Drag refs ──────────────────────────────
  const isDown      = useRef(false)
  const startX      = useRef(0)
  const scrollStart = useRef(0)

  // ── Video ref registration ─────────────────
  function registerVideoRef(id, el) {
    videoRefs.current[id] = el
  }

  // ── Internal helpers ───────────────────────
  function stopCurrentVideo() {
    const id = currentActiveIdRef.current
    if (id !== null) {
      const vid = videoRefs.current[id]
      if (vid) {
        vid.pause()
        vid.currentTime = 0
      }
    }
  }

  function activateVideo(id, type, muted) {
    stopCurrentVideo()
    currentActiveIdRef.current      = id
    currentActiveTriggerRef.current = type
    const vid = videoRefs.current[id]
    if (vid) {
      vid.muted = muted
      vid.play().catch(() => {})
    }
    setActiveReel(id)
    setTriggerType(type)
    setIsMuted(muted)
  }

  function deactivateVideo() {
    stopCurrentVideo()
    currentActiveIdRef.current      = null
    currentActiveTriggerRef.current = null
    setActiveReel(null)
    setTriggerType(null)
    setIsMuted(false)
  }

  // ── Hover (desktop pointer devices only) ───
  function handleCardMouseEnter(id) {
    if (isDown.current) return
    // Don't interrupt a click session on the same card
    if (currentActiveIdRef.current === id && currentActiveTriggerRef.current === 'click') return
    // Block re-hover on the card that was just click-closed (DOM mutations can fire
    // a spurious mouseenter on the same card when the controls are removed)
    if (justClosedIdRef.current === id) return
    activateVideo(id, 'hover', true)
  }

  function handleCardMouseLeave(id) {
    // Mouse genuinely left this card — clear the just-closed guard
    if (justClosedIdRef.current === id) justClosedIdRef.current = null
    if (currentActiveTriggerRef.current !== 'hover') return
    if (currentActiveIdRef.current !== id) return
    deactivateVideo()
  }

  // ── Click Play / Close ─────────────────────
  function handlePlay(id) {
    // Clicking a card already in click mode does nothing
    if (currentActiveIdRef.current === id && currentActiveTriggerRef.current === 'click') return
    activateVideo(id, 'click', false)
  }

  function handleClose() {
    // Record which card is closing so mouseenter doesn't immediately re-hover it
    justClosedIdRef.current = currentActiveIdRef.current
    deactivateVideo()
  }

  // ── Mute toggle (click sessions only) ──────
  function handleMuteToggle() {
    const newMuted = !isMuted
    setIsMuted(newMuted)
    const id = currentActiveIdRef.current
    if (id !== null) {
      const vid = videoRefs.current[id]
      if (vid) vid.muted = newMuted
    }
  }

  // ── Strip Nav (dynamic card width) ─────────
  function getCardScrollDistance() {
    const strip = stripRef.current
    if (!strip) return 260
    const cards = strip.querySelectorAll('.phone-card')
    if (cards.length >= 2) {
      // Actual pixel gap between card starts includes card width + CSS gap
      return cards[1].offsetLeft - cards[0].offsetLeft
    }
    if (cards.length === 1) {
      return cards[0].offsetWidth + 20
    }
    return 260
  }

  function scrollLeft() {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: -getCardScrollDistance(), behavior: 'smooth' })
    }
  }

  function scrollRight() {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: getCardScrollDistance(), behavior: 'smooth' })
    }
  }

  // ── Drag to scroll ─────────────────────────
  function handleMouseDown(e) {
    isDown.current      = true
    startX.current      = e.pageX - stripRef.current.offsetLeft
    scrollStart.current = stripRef.current.scrollLeft
  }

  function handleMouseMove(e) {
    if (!isDown.current) return
    e.preventDefault()
    const x    = e.pageX - stripRef.current.offsetLeft
    const walk = x - startX.current
    stripRef.current.scrollLeft = scrollStart.current - walk
  }

  function handleMouseUp() {
    isDown.current = false
  }

  function handleMouseLeave() {
    isDown.current = false
  }

  // ── Scroll reveal ──────────────────────────
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('work-visible')
          observer.unobserve(section)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // ── Return ─────────────────────────────────
  return {
    activeReel,
    triggerType,
    isMuted,
    sectionRef,
    stripRef,
    handlePlay,
    handleClose,
    handleMuteToggle,
    registerVideoRef,
    handleCardMouseEnter,
    handleCardMouseLeave,
    scrollLeft,
    scrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave
  }
}
