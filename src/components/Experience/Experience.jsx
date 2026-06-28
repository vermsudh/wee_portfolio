import { useEffect, useRef } from 'react'
import './Experience.css'

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('exp-visible')
          observer.unobserve(section)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>

      {/* 1. Header */}
      <div className="exp-header">
        <div className="exp-header-left">
          <p className="exp-eyebrow">My Journey</p>
          <h2 className="exp-title">
            Where I&apos;ve
            <span className="exp-title-script">worked</span>
          </h2>
        </div>
        <p className="exp-header-note">
          Hover over each role to see the full story behind the work.
        </p>
      </div>

      {/* current job */}
      <div className="timeline-wrap">
        <div className="timeline-line" />
        {/* Item 1 */}
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-dot" />
            <span className="tl-year">May 2026<br />Present</span>
          </div>
          <div className="tl-right">
            <span className="tl-industry">
              <span className="tl-industry-dot" />
              Wellness &amp; Ayurveda
            </span>
            <h3 className="tl-company">Consious Chemist</h3>
            <p className="tl-role">Content Creation &amp; Social Media Manager</p>
            <div className="tl-detail">
              <ul className="tl-bullets">
                <li>Managed all social media operations including content planning, posting and engagement</li>
                <li>Shot, edited and acted in brand content for social media platforms</li>
                <li>Directed and executed brand shoots from concept to final content delivery</li>
              </ul>
              <div className="tl-tags">
                <span className="tl-tag">Strategy</span>
                <span className="tl-tag">Reels</span>
                <span className="tl-tag">Shoot Direction</span>
                <span className="tl-tag">On-Camera</span>
              </div>
            </div>
          </div>
          <span className="tl-arrow">→</span>
        </div>

        {/* Item 1 */}
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-dot" />
            <span className="tl-year">May 2025<br />Mar 2026</span>
          </div>
          <div className="tl-right">
            <span className="tl-industry">
              <span className="tl-industry-dot" />
              Wellness &amp; Ayurveda
            </span>
            <h3 className="tl-company">Ayuvya Ayurveda</h3>
            <p className="tl-role">Content Creation &amp; Social Media Manager</p>
            <div className="tl-detail">
              <ul className="tl-bullets">
                <li>Managed all social media operations including content planning, posting and engagement</li>
                <li>Shot, edited and acted in brand content for social media platforms</li>
                <li>Directed and executed brand shoots from concept to final content delivery</li>
              </ul>
              <div className="tl-tags">
                <span className="tl-tag">Strategy</span>
                <span className="tl-tag">Reels</span>
                <span className="tl-tag">Shoot Direction</span>
                <span className="tl-tag">On-Camera</span>
              </div>
            </div>
          </div>
          <span className="tl-arrow">→</span>
        </div>

        {/* Item 2 */}
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-dot" />
            <span className="tl-year">Jun 2025<br />Jan 2026</span>
          </div>
          <div className="tl-right">
            <span className="tl-industry">
              <span className="tl-industry-dot" />
              Food &amp; Beverage
            </span>
            <h3 className="tl-company">Remys · Paparizza · Savorworks · Jujube</h3>
            <p className="tl-role">Freelance Social Media Manager</p>
            <div className="tl-detail">
              <ul className="tl-bullets">
                <li>Managed end-to-end content creation across multiple F&amp;B outlets simultaneously</li>
                <li>Shot, edited and published reels, stories and carousel posts</li>
              </ul>
              <div className="tl-tags">
                <span className="tl-tag">Multi-Brand</span>
                <span className="tl-tag">Reels</span>
                <span className="tl-tag">Content Calendar</span>
                <span className="tl-tag">F&amp;B</span>
              </div>
            </div>
          </div>
          <span className="tl-arrow">→</span>
        </div>

        {/* Item 3 */}
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-dot" />
            <span className="tl-year">Oct 2025<br />Apr 2026</span>
          </div>
          <div className="tl-right">
            <span className="tl-industry">
              <span className="tl-industry-dot" />
              Fashion &amp; Ethnic Wear
            </span>
            <h3 className="tl-company">Gharana Karigari Company</h3>
            <p className="tl-role">Freelance Model</p>
            <div className="tl-detail">
              <ul className="tl-bullets">
                <li>Modeled women&apos;s ethnic wear across multi-location brand shoots</li>
                <li>Collaborated closely with stylists and photographers for brand storytelling</li>
              </ul>
              <div className="tl-tags">
                <span className="tl-tag">Modeling</span>
                <span className="tl-tag">Ethnic Wear</span>
                <span className="tl-tag">Brand Shoots</span>
                <span className="tl-tag">Styling</span>
              </div>
            </div>
          </div>
          <span className="tl-arrow">→</span>
        </div>

        {/* Item 4 */}
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-dot" />
            <span className="tl-year">Jan 2025<br />Apr 2025</span>
          </div>
          <div className="tl-right">
            <span className="tl-industry">
              <span className="tl-industry-dot" />
              Jewellery &amp; Luxury
            </span>
            <h3 className="tl-company">Silvish</h3>
            <p className="tl-role">Fashion Model Intern</p>
            <div className="tl-detail">
              <ul className="tl-bullets">
                <li>Modeled high-end jewellery collections for digital campaigns</li>
                <li>Assisted in styling and delivered promotional voiceovers</li>
              </ul>
              <div className="tl-tags">
                <span className="tl-tag">Jewellery</span>
                <span className="tl-tag">Digital Campaigns</span>
                <span className="tl-tag">Voiceover</span>
              </div>
            </div>
          </div>
          <span className="tl-arrow">→</span>
        </div>

        {/* Item 5 */}
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-dot" />
            <span className="tl-year">Oct 2024<br />Jan 2025</span>
          </div>
          <div className="tl-right">
            <span className="tl-industry">
              <span className="tl-industry-dot" />
              Weddings &amp; Lifestyle
            </span>
            <h3 className="tl-company">The Social Journey</h3>
            <p className="tl-role">Social Media Manager</p>
            <div className="tl-detail">
              <ul className="tl-bullets">
                <li>Managed and curated content for four wedding-focused social media pages</li>
                <li>Maintained consistent brand aesthetics while scheduling across all channels</li>
              </ul>
              <div className="tl-tags">
                <span className="tl-tag">4 Pages</span>
                <span className="tl-tag">Weddings</span>
                <span className="tl-tag">Scheduling</span>
                <span className="tl-tag">Aesthetics</span>
              </div>
            </div>
          </div>
          <span className="tl-arrow">→</span>
        </div>

        {/* Item 6 */}
        <div className="tl-item">
          <div className="tl-left">
            <div className="tl-dot" />
            <span className="tl-year">Jun 2024<br />Sep 2024</span>
          </div>
          <div className="tl-right">
            <span className="tl-industry">
              <span className="tl-industry-dot" />
              Marketing &amp; Content
            </span>
            <h3 className="tl-company">The Boss Hub</h3>
            <p className="tl-role">Content &amp; Social Media Marketing Intern</p>
            <div className="tl-detail">
              <ul className="tl-bullets">
                <li>Created YouTube and Instagram content including podcast snippets</li>
                <li>Managed multiple client accounts and maintained content calendars</li>
              </ul>
              <div className="tl-tags">
                <span className="tl-tag">YouTube</span>
                <span className="tl-tag">Instagram</span>
                <span className="tl-tag">Podcast</span>
                <span className="tl-tag">Calendars</span>
              </div>
            </div>
          </div>
          <span className="tl-arrow">→</span>
        </div>

      </div>
    </section>
  )
}