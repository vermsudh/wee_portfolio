import { useState, useEffect, useRef } from 'react'
import { reels, filters } from './WorkData'

export default function useWork() {

  // ── State ──────────────────────────────────
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeReel,   setActiveReel]   = useState(null)

  // ── Refs ───────────────────────────────────
  const stripRef   = useRef(null)
  const sectionRef = useRef(null)

  // ── Drag refs ──────────────────────────────
  const isDown     = useRef(false)
  const startX     = useRef(0)
  const scrollStart = useRef(0)

  // ── Derived ────────────────────────────────
  const visibleReels = activeFilter === 'all'
    ? reels
    : reels.filter(r => r.category === activeFilter)

  // ── Filter ─────────────────────────────────
  function handleFilter(value) {
    setActiveFilter(value)
    setActiveReel(null)
    if (stripRef.current) {
      stripRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  // ── Play / Close ───────────────────────────
  function handlePlay(id) {
    setActiveReel(id)
  }

  function handleClose() {
    setActiveReel(null)
  }

  // ── Strip Nav ──────────────────────────────
  function scrollLeft() {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: -260, behavior: 'smooth' })
    }
  }

  function scrollRight() {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: 260, behavior: 'smooth' })
    }
  }

  // ── Drag to scroll ─────────────────────────
  function handleMouseDown(e) {
    isDown.current    = true
    startX.current    = e.pageX - stripRef.current.offsetLeft
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
    filters,
    visibleReels,
    activeFilter,
    activeReel,
    sectionRef,
    stripRef,
    handleFilter,
    handlePlay,
    handleClose,
    scrollLeft,
    scrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave
  }
}