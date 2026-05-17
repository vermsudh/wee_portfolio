import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* Column 1 — Left */}
        <div className="footer-left">
          <a className="footer-logo" href="#hero">Vanshika.</a>
          <p className="footer-copy">© 2026 Vanshika Verma</p>
          <p className="footer-location">
            <span className="footer-location-dot" />
            New Delhi, India
          </p>
        </div>

        {/* Column 2 — Nav */}
        <nav className="footer-nav">
          <p className="footer-nav-label">Navigation</p>
          <ul className="footer-nav-list">
            <li><a className="footer-nav-link" href="#about">About</a></li>
            <li><a className="footer-nav-link" href="#services">Services</a></li>
            <li><a className="footer-nav-link" href="#experience">Experience</a></li>
            <li><a className="footer-nav-link" href="#work">Work</a></li>
            <li><a className="footer-nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Column 3 — Connect */}
        <div className="footer-right">
          <p className="footer-nav-label">Connect</p>
          <ul className="footer-social-list">
            <li>
              <a className="footer-social-link" href="https://instagram.com"
                target="_blank" rel="noreferrer">
                <span className="footer-social-icon">📷</span>
                <span className="footer-social-text">Instagram</span>
                <span className="footer-social-arrow">↗</span>
              </a>
            </li>
            <li>
              <a className="footer-social-link" href="https://youtube.com"
                target="_blank" rel="noreferrer">
                <span className="footer-social-icon">▶</span>
                <span className="footer-social-text">YouTube</span>
                <span className="footer-social-arrow">↗</span>
              </a>
            </li>
            <li>
              <a className="footer-social-link"
                href="mailto:vanshikaverma0201@gmail.com">
                <span className="footer-social-icon">✉</span>
                <span className="footer-social-text">Email</span>
                <span className="footer-social-arrow">↗</span>
              </a>
            </li>
            <li>
              <a className="footer-social-link" href="tel:+919205435221">
                <span className="footer-social-icon">📞</span>
                <span className="footer-social-text">+91 92054 35221</span>
                <span className="footer-social-arrow">↗</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}