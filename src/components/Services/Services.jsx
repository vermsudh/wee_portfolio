import { useEffect, useRef } from 'react'
import { Film, BarChart3, Palette, Sparkles } from 'lucide-react'
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
            What I bring to
            <span className="services-title-script"> the table</span>
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
              <Film className="card-icon" size={26} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">Content Creation</h3>
            <p className="card-desc">
              End-to-end content creation, from ideation and scripting to
              filming, editing, and publishing. Specialising in short-form
              content that drives engagement and brand visibility.
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
            <BarChart3 className="card-icon" size={26} strokeWidth={1.8} />
          </div>
          <h3 className="card-title">Social Media Management</h3>
          <p className="card-desc">
            Managed multiple brand accounts across different niches,
            handling content planning, publishing, community engagement,
            and performance tracking.
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
            <Palette className="card-icon" size={26} strokeWidth={1.8} />
          </div>
          <h3 className="card-title">Creative Direction</h3>
          <p className="card-desc">
            From concept development to execution, I help shape the
            creative vision behind campaigns, ensuring content aligns with
            brand goals and audience preferences.
          </p>
          <div className="card-tags">
            <span className="card-tag">Concept</span>
            <span className="card-tag">Brand Vision</span>
          </div>
        </div>

        {/* Card 4 — Wide Bottom */}
        <div className="bento-card card-4">
          <div className="card-4-left">
            <p className="card-num">04</p>
            <div className="card-icon-wrap">
              <Sparkles className="card-icon" size={30} strokeWidth={1.8} />
            </div>
            <h3 className="card-title">Modelling</h3>
            <p className="card-desc">
              Experienced in brand campaigns, UGC content, product
              showcases, voiceovers, and on-camera storytelling across
              beauty, lifestyle, jewellery, and fashion categories. Have
              done multiple short films and acting projects.
            </p>
            <div className="card-tags">
              <span className="card-tag">UGC</span>
              <span className="card-tag">Campaigns</span>
              <span className="card-tag">Voiceover</span>
              <span className="card-tag">Acting</span>
            </div>
          </div>
          <div className="card-4-right">
            <div className="card-4-stat">
              <p className="card-4-stat-num">8+</p>
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