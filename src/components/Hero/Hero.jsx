import heroBg from "../../assets/hero_image.jpg";
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
          <span className="hero-name-r">Verma</span>
        </h1>

        {/* d. Separator */}
        <div className="hero-sep">
          <span className="sep-dot" />
          <span className="sep-line" />
          <span className="sep-dot" />
        </div>

        {/* e. Tagline */}
        <p className="hero-tagline">
          Turning brands into <em>stories</em> —<br />
          and feeds into experiences.
        </p>

        {/* f. Role pills */}
        <div className="hero-pills">
          <span className="rpill">✦ Content Creator</span>
          <span className="rpill">✦ Social Media Manager</span>
          <span className="rpill">✦ Model</span>
        </div>

        {/* g. CTAs */}
        <div className="hero-ctas">
          <a href="#contact" className="cta-hire">✦ Hire Me</a>
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
        <a href="#" className="hsoc">Instagram</a>
        <a href="#" className="hsoc">YouTube</a>
        <a href="mailto:vanshikaverma0201@gmail.com" className="hsoc">Email</a>
      </div>
    </section>
  );
}
