import './Contact.css'
import useContact from './useContact'
import contactPhoto from '../../assets/contact_image.png'

export default function Contact() {

  const {
    contactInfo, services, formData,
    isHovered, setIsHovered,
    handleChange, handleWhatsApp
  } = useContact()

  return (
    <section id="contact" className="contact-section">

      {/* ── Left Column ─────────────────────── */}
      <div className="contact-left">

        <p className="c-eyebrow">Get In Touch</p>

        <h2 className="c-title">
          Let's work <span className="c-title-script">together!</span>
        </h2>

        <p className="c-sub">
          Have a brand story to tell? Looking for a{' '}
          <strong>content creator, social media manager</strong>
          {' '}or model? I'd love to hear about your project.
        </p>

        <form className="c-form" onSubmit={handleWhatsApp}>

          <div className="c-form-row">
            <div className="c-input-wrap">
              <label className="c-label" htmlFor="name">Your Name</label>
              <input
                className="c-input"
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Priya Sharma"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="c-input-wrap">
              <label className="c-label" htmlFor="brand">Brand / Company</label>
              <input
                className="c-input"
                type="text"
                id="brand"
                name="brand"
                placeholder="e.g. Ayuvya"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="c-input-wrap">
            <label className="c-label" htmlFor="email">Email Address</label>
            <input
              className="c-input"
              type="email"
              id="email"
              name="email"
              placeholder="you@brand.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="c-input-wrap">
            <label className="c-label" htmlFor="service">I'm looking for</label>
            <select
              className="c-select"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" disabled>Select a service...</option>
              {services.map(service => (
                <option value={service} key={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="c-input-wrap">
            <label className="c-label" htmlFor="message">
              Tell me about your project
            </label>
            <textarea
              className="c-textarea"
              id="message"
              name="message"
              rows={5}
              placeholder="What's your brand, what do you need, and when are you looking to start?"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="c-btn-whatsapp" type="submit">
            <span className="wa-icon">💬</span>
            Send via WhatsApp
          </button>

        </form>

        <div className="c-quick-links">
          <a className="c-quick-link" href={"mailto:" + contactInfo.email}>
            ✉ {contactInfo.email}
          </a>
          <a className="c-quick-link" href={"tel:" + contactInfo.phoneRaw}>
            📞 {contactInfo.phone}
          </a>
        </div>

      </div>

      {/* ── Right Column ────────────────────── */}
      <div
        className="contact-right"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div
          className="c-photo"
          style={{
            backgroundImage: `url(${contactPhoto})`,
            transform: isHovered ? 'scale(1.03)' : 'scale(1)'
          }}
        />

        <div className="c-photo-overlay" />

        <div className="c-available">
          <span className="c-available-dot" />
          <span className="c-available-text">{contactInfo.availability}</span>
        </div>

        <div className="c-response">
          <span className="c-response-text">{contactInfo.responseTime}</span>
        </div>

        <div className="c-photo-card">
          <p className="c-photo-card-label">Based in</p>
          <p className="c-photo-card-name">{contactInfo.location}</p>
          <p className="c-photo-card-role">{contactInfo.remote}</p>
        </div>

      </div>

    </section>
  )
}