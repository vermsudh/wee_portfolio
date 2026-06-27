import heroBg from "../../assets/hero_image.jpg";
import { FaHandshake } from 'react-icons/fa';
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      {/* 1. Background image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* 2. Overlay gradients */}
      <div className="hero-overlay" />

      {/* 3. Grain / noise texture */}
      <div className="hero-grain" />

      {/* 4. Location tag */}
      <div className="hero-location">
        <span className="loc-dot" />
        <span className="loc-text">NEW DELHI, INDIA</span>
      </div>

      {/* 5. Main content */}
      <div className="hero-content">
        {/* a. Eyebrow */}
        <div className="eyebrow">
          <span className="ey-line" />
          <span className="ey-text">CONTENT CREATOR &amp; MODEL</span>
        </div>

        {/* b. Hi */}
        <span className="hero-hi">hi, i&apos;m</span>

        {/* c. Name */}
        <h1>
          <span className="hero-name-v">Vanshika</span>
        </h1>

        {/* d. Separator */}
        <div className="hero-sep">
          <span className="sep-dot" />
          <span className="sep-line" />
          <span className="sep-dot" />
        </div>

        {/* e. Tagline */}
        <p className="hero-tagline">
          content creator, social media manager &amp;{' '}
          <em>all things fun</em>
        </p>

        {/* e2. Subtext */}
        <p className="hero-subtext">
          Creating content that builds communities, drives engagement, and
          helps brands stand out.
        </p>

        {/* f. Role pills */}
        <div className="hero-pills">
          <span className="rpill">✦ Brand Collaborations</span>
          <span className="rpill">✦ Social Media Strategy &amp; Content Creation</span>
        </div>

        {/* f2. Skills row */}
        <div className="hero-skills">
          <span className="rpill">Acting</span>
          <span className="rpill">Social Media Management</span>
          <span className="rpill">UGC Creator</span>
          <span className="rpill">Model</span>
        </div>

        {/* g. CTAs */}
        <div className="hero-ctas">
          <a href="#contact" className="cta-hire"><FaHandshake size={32} color="#F7F4D5 " /> Let's collaborate</a>
          
          <a href="#work" className="cta-work">View My Work →</a>
        </div>
      </div>

      {/* 6. Scroll hint */}
      <div className="scroll-hint">
        <span className="sh-text">SCROLL</span>
        <div className="sh-line" />
      </div>

      {/* 7. Social links */}
      <div className="hero-socials">
        <a href="https://www.instagram.com/bas.kar.vanshikaa/" className="hsoc">Instagram</a>
        <a href="https://www.youtube.com/@baskarvanshikaa" className="hsoc">YouTube</a>
        <a href="mailto:vanshikaverma0201@gmail.com" className="hsoc">Email</a>
      </div>
    </section>
  );
}
