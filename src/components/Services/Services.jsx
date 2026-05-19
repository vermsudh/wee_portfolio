import { useEffect, useRef } from 'react'
import './Services.css'

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('services-visible')
          observer.unobserve(section)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services-section" ref={sectionRef}>

      {/* 1. Header */}
      <div className="services-header">
        <div className="services-header-left">
          <p className="services-eyebrow">What I Do</p>
          <h2 className="services-title">
            Where I
            <span className="services-title-script"> Shine</span>
          </h2>
        </div>
        <p className="services-header-note">
          From strategy to execution — I handle the full creative pipeline
          so your brand shows up consistently and beautifully.
        </p>
      </div>

      {/* 2. Bento Grid */}
      <div className="bento-grid">

        {/* Card 1 — Large Tall */}
        <div className="bento-card card-1">
          <div className="card-top">
            <p className="card-num">01</p>
            <div className="card-icon-wrap">
              <span className="card-icon">🎬</span>
            </div>
            <h3 className="card-title">Content Creation</h3>
            <p className="card-desc">
              Shot, edited and delivered with a strong aesthetic POV. From
              concept to final cut — scripting, filming, editing and
              publishing across platforms.
            </p>
            <div className="card-tags">
              <span className="card-tag">Reels</span>
              <span className="card-tag">Carousels</span>
              <span className="card-tag">Stories</span>
              <span className="card-tag">Shoots</span>
              <span className="card-tag">Editing</span>
            </div>
          </div>
          <a className="card-arrow" href="#contact">
            <span className="card-arrow-line" />
            <span>Start a project</span>
            <span className="card-arrow-icon">→</span>
          </a>
          <div className="card-1-watermark">01</div>
        </div>

        {/* Card 2 — Top Center */}
        <div className="bento-card card-2">
          <p className="card-num">02</p>
          <div className="card-icon-wrap">
            <span className="card-icon">📊</span>
          </div>
          <h3 className="card-title">Social Media Management</h3>
          <p className="card-desc">
            End-to-end page management — content calendars, scheduling,
            engagement and analytics. Managed up to 4 brand pages
            simultaneously.
          </p>
          <div className="card-tags">
            <span className="card-tag">Instagram</span>
            <span className="card-tag">YouTube</span>
            <span className="card-tag">Calendars</span>
          </div>
        </div>

        {/* Card 3 — Top Right */}
        <div className="bento-card card-3">
          <p className="card-num">03</p>
          <div className="card-icon-wrap">
            <span className="card-icon">🎯</span>
          </div>
          <h3 className="card-title">Brand Strategy</h3>
          <p className="card-desc">
            Psychology-backed storytelling. I understand why audiences
            engage and build campaigns that don&apos;t just look good —
            they convert.
          </p>
          <div className="card-tags">
            <span className="card-tag">Storytelling</span>
            <span className="card-tag">Campaigns</span>
          </div>
        </div>

        {/* Card 4 — Wide Bottom */}
        <div className="bento-card card-4">
          <div className="card-4-left">
            <p className="card-num">04</p>
            <div className="card-icon-wrap">
              <span className="card-icon">✨</span>
            </div>
            <h3 className="card-title">Modeling &amp; On-Camera</h3>
            <p className="card-desc">
              Experienced in multi-location brand shoots for ethnic wear and
              jewellery campaigns. Comfortable with styling direction,
              voiceovers and on-camera performance.
            </p>
            <div className="card-tags">
              <span className="card-tag">Ethnic Wear</span>
              <span className="card-tag">Jewellery</span>
              <span className="card-tag">Lifestyle</span>
              <span className="card-tag">Voiceover</span>
            </div>
          </div>
          <div className="card-4-right">
            <div className="card-4-stat">
              <p className="card-4-stat-num">6+</p>
              <p className="card-4-stat-label">Brand Shoots</p>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Footer */}
      <div className="services-footer">
        <p className="services-footer-text">
          Have something in mind? Let&apos;s make it <em>beautiful.</em>
        </p>
        <a className="services-cta" href="#contact">✦ Let&apos;s Work Together</a>
      </div>

    </section>
  )
}