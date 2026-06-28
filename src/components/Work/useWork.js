import { useState, useEffect, useRef } from 'react'
import { reels } from './workData'

export default function useWork() {

  // ── State ──────────────────────────────────
  const [activeReel, setActiveReel] = useState(null)
  const [isMuted,    setIsMuted]    = useState(true)

  // ── Refs ───────────────────────────────────
  const stripRef   = useRef(null)
  const sectionRef = useRef(null)
  const videoRefs  = useRef({})

  const currentActiveIdRef = useRef(null)

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

  function activateVideo(id, muted) {
    stopCurrentVideo()
    currentActiveIdRef.current = id
    const vid = videoRefs.current[id]
    if (vid) {
      vid.muted = muted
      vid.play().catch(() => {})
    }
    setActiveReel(id)
    setIsMuted(muted)
  }

  // ── Mute toggle ────────────────────────────
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

  // ── Scroll reveal + first card autoplay ────
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('work-visible')
          observer.unobserve(section)
          if (currentActiveIdRef.current === null) {
            activateVideo(reels[0].id, true)
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Per-card visibility observer ───────────
  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    // Persists latest intersection ratio per card across observer callbacks
    const ratios = new Map()

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = Number(entry.target.dataset.reelId)
          ratios.set(id, entry.intersectionRatio)
        })

        let bestId = null
        let bestRatio = 0.5
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestId === null) return
        if (bestId === currentActiveIdRef.current) return
        activateVideo(bestId, true)
      },
      { threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] }
    )

    const cards = strip.querySelectorAll('.phone-card')
    cards.forEach(card => cardObserver.observe(card))

    return () => cardObserver.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Return ─────────────────────────────────
  return {
    activeReel,
    isMuted,
    sectionRef,
    stripRef,
    handleMuteToggle,
    registerVideoRef,
    scrollLeft,
    scrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave
  }
}
