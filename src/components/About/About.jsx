import { useEffect, useRef } from 'react'
import { Film, CalendarDays, Mic, Camera, Target, Scissors } from 'lucide-react'
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
          Psychology graduate turned content creator and on-camera talent. 
          I love bringing stories to life — through reels, brand shoots, dancing, acting, 
          and building brand voices that actually connect.
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
          what excites me most is range — one week im shooting an ayurveda campaign, the next im on set for a jewellery shoot, and the week after that im writing captions for a wedding page. beauty, wellness, F&B, fashion, jewellery, weddings — different worlds, different audiences, same energy from me. i think thats what makes the work interesting: no two briefs ever feel the same,
           and i get to keep learning what makes each industry tick.
          </p>
          <div className="about-traits">
            <span className="trait"><Film size={13} strokeWidth={1.8} /> Reel Directing</span>
            <span className="trait"><CalendarDays size={13} strokeWidth={1.8} /> Content Calendars</span>
            <span className="trait"><Mic size={13} strokeWidth={1.8} /> Voiceover</span>
            <span className="trait"><Camera size={13} strokeWidth={1.8} /> On-Camera Talent</span>
            <span className="trait"><Target size={13} strokeWidth={1.8} /> Brand Strategy</span>
            <span className="trait"><Scissors size={13} strokeWidth={1.8} /> Video Editing</span>
          </div>
        </div>

      </div>
    </section>
  )
}