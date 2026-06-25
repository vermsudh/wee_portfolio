import { useEffect, useRef } from 'react'
import './About.css'
import aboutImg from '../../assets/about_me.png'

export default function About() {
  const sectionRef   = useRef(null)
  const headerRef    = useRef(null)
  const leftRef      = useRef(null)
  const centerRef    = useRef(null)
  const rightRef     = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const targets = [
      headerRef.current,
      leftRef.current,
      centerRef.current,
      rightRef.current,
    ]

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targets.forEach((el) => el && el.classList.add('about-visible'))
          observer.unobserve(section)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section" ref={sectionRef}>

      {/* 1. Header */}
      <div className="about-header" ref={headerRef}>
        <p className="about-eyebrow">About Me</p>
        <h2 className="about-title">
          <span>The mind behind</span>
          <span className="about-title-script">the content</span>
        </h2>
      </div>

      {/* 2. Grid */}
      <div className="about-grid">

        {/* A. Left */}
        <div className="about-left" ref={leftRef}>
          <p className="about-col-heading">Who I Am</p>
          <p className="about-para">
            hi im vanshika, a psychology graduate from university of delhi.
            i love being infront of the camera, getting stories to life,
            dancing, acting and building brands
          </p>
          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-num">20+</div>
              <div className="stat-label">Brands Worked With</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">8.0</div>
              <div className="stat-label">CGPA · DU Psychology</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">3</div>
              <div className="stat-label">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* B. Center */}
        <div className="about-center" ref={centerRef}>
          <div className="about-photo-wrap">
            <img
              className="about-photo"
              src={aboutImg}
              alt="Vanshika Verma"
            />
            <div className="about-photo-ring" />
            <div className="about-badge">✦ Available for Collabs</div>
          </div>
        </div>

        {/* C. Right */}
        <div className="about-right" ref={rightRef}>
          <p className="about-col-heading">What Drives Me</p>
          <p className="about-para">
            Ive worked across various different niches like beauty,
            wellness, health, F&amp;B, lifestyle, fashion &amp; jewellery
            and more to come :)
          </p>
          <div className="about-traits">
            <span className="trait">🎬 Reel Directing</span>
            <span className="trait">📅 Content Calendars</span>
            <span className="trait">🎤 Voiceover</span>
            <span className="trait">💃 On-Camera Talent</span>
            <span className="trait">🧠 Brand Strategy</span>
            <span className="trait">✂️ Video Editing</span>
          </div>
        </div>

      </div>
    </section>
  )
}