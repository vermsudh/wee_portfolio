import './Testimonials.css'
import { useState, useEffect, useRef } from 'react'
import remysLogo from '../../assets/brand_logos/remys.png'  
import silvishLogo from '../../assets/brand_logos/silvish.png'
import gk from '../../assets/brand_logos/gk_logo.jpeg'
import ayuvyaLogo         from '../../assets/brand_logos/auvya.png'

export default function Testimonials() {

  const testimonials = [
    {
      id: 1,
      quote: "Vanshika brought a completely fresh energy to our brand. Her reels consistently outperformed our benchmarks and she genuinely understood what our audience needed to see — without us having to explain it twice. A rare find in the content space.",
      name: "Brand Manager",
      role: "Social Media Lead",
      brand: "Ayuvya Ayurveda",
      industry: "Wellness",
      icon: ayuvyaLogo,
      featured: true
    },
    {
      id: 2,
      quote: "Managing four of our F&B brands at once — and she made it look effortless. Every reel she produced felt like it was made specifically for that outlet's vibe. Our engagement numbers doubled within the first month.",
      name: "Operations Head",
      role: "F&B Director",
      brand: "Remys",
      industry: "F&B",
      icon: remysLogo,
      featured: false
    },
    {
      id: 3,
      quote: "The ethnic wear shoot with Vanshika was one of our best brand collaborations. She understood the garment, the story, and brought both to life on camera naturally.",
      name: "Creative Director",
      role: "Brand Lead",
      brand: "Gharana Karigari",
      industry: "Fashion",
      icon: gk ,
      featured: false
    },
    {
      id: 4,
      quote: "Our jewellery campaigns needed someone who could carry elegance on camera. Vanshika delivered that — and more. Her voiceover work was an unexpected bonus that elevated the entire campaign.",
      name: "Campaign Manager",
      role: "Marketing Head",
      brand: "Silvish",
      industry: "Jewellery",
      icon: silvishLogo,
      featured: false
    }
  ]

  const featured      = testimonials.find(t => t.featured === true)
  const carouselItems = testimonials.filter(t => t.featured === false)

  const [current, setCurrent] = useState(0)
  const outerRef   = useRef(null)
  const cardRefs   = useRef([])
  const sectionRef = useRef(null)

  const total = carouselItems.length

  function goTo(index) {
    const clamped = Math.max(0, Math.min(index, total - 1))
    setCurrent(clamped)
    cardRefs.current[clamped]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  function handlePrev() { goTo(current - 1) }
  function handleNext() { goTo(current + 1) }

  // Sync active dot with scroll position
  useEffect(() => {
    const outer = outerRef.current
    if (!outer) return

    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const cards = cardRefs.current.filter(Boolean)
        if (!cards.length) {
          ticking = false
          return
        }

        const scrollLeft = outer.scrollLeft
        let closest = 0
        let minDist = Infinity

        cards.forEach((card, i) => {
          const dist = Math.abs(card.offsetLeft - scrollLeft)
          if (dist < minDist) {
            minDist = dist
            closest = i
          }
        })

        setCurrent(closest)
        ticking = false
      })
    }

    outer.addEventListener('scroll', onScroll, { passive: true })
    return () => outer.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('t-visible')
          observer.unobserve(section)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="t-section" ref={sectionRef}>

      {/* 1. Header */}
      <div className="t-header">
        <div className="t-header-left">
          <p className="t-eyebrow">Kind Words</p>
          <h2 className="t-title">
          Brand  <span className="t-title-script">Voices</span>
          </h2>
        </div>
        <p className="t-header-note">
          Real words from the brands I've had the privilege of working with.
        </p>
      </div>

      {/* 2. Featured */}
      <div className="t-featured">
        <div className="t-big-quote">"</div>
        <div className="t-featured-inner">

          <div className="t-featured-left">
            <p className="t-featured-quote">
              {`Vanshika brought a completely `}
              <em>fresh</em>
              {` energy to our brand. Her reels consistently outperformed our benchmarks and she genuinely understood what our audience needed to see — without us having to explain it twice. A `}
              <em>rare</em>
              {` find in the content space.`}
            </p>
          </div>

          <div className="t-featured-meta">
            <div className="t-avatar">
              <img src={featured.icon} alt={featured.brand} className="t-avatar-img" />
            </div>
            <div className="t-stars">
              {[...Array(5)].map((_, i) => (
                <span className="t-star" key={i}>★</span>
              ))}
            </div>
            <p className="t-featured-name">{featured.name}</p>
            <p className="t-featured-role">{featured.role}</p>
            <p className="t-featured-brand">{featured.brand}</p>
          </div>

        </div>
      </div>

      {/* 3. Carousel Section */}
      <div className="t-carousel-section">

        {/* A. Carousel Header */}
        <div className="t-carousel-header">
          <p className="t-carousel-label">More Kind Words</p>
          <div className="t-nav">
            <button
              className="t-nav-btn"
              id="prevBtn"
              onClick={handlePrev}
              disabled={current === 0}
            >←</button>
            <span className="t-nav-counter">
              <span>{current + 1}</span> / {total}
            </span>
            <button
              className="t-nav-btn"
              id="nextBtn"
              onClick={handleNext}
              disabled={current === total - 1}
            >→</button>
          </div>
        </div>

        {/* B. Carousel Track */}
        <div className="t-carousel-outer" ref={outerRef}>
          <div className="t-carousel-track">
            {carouselItems.map((item, index) => (
              <div
                className="t-card"
                key={item.id}
                ref={el => { cardRefs.current[index] = el }}
              >
                <p className="t-card-quote">{item.quote}</p>
                <div className="t-card-footer">
                  <div className="t-card-avatar">
                    <img src={item.icon} alt={item.brand} className="t-card-avatar-img" />
                  </div>
                  <div className="t-card-info">
                    <p className="t-card-name">{item.name}</p>
                    <p className="t-card-brand">{item.brand}</p>
                    <div className="t-card-stars">
                      {[...Array(5)].map((_, i) => (
                        <span className="t-card-star" key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* C. Dots */}
        <div className="t-dots">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={"t-dot" + (index === current ? " active" : "")}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}