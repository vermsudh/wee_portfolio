import './Work.css'
import useWork from './useWork'
import { reels } from './workData'

export default function Work() {
  const {
    activeReel, isMuted,
    sectionRef, stripRef,
    handleMuteToggle,
    registerVideoRef,
    scrollLeft, scrollRight,
    handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave
  } = useWork()

  return (
    <section id="work" className="work-section" ref={sectionRef}>

      {/* 1. Header */}
      <div className="work-header">
        <div className="work-header-left">
          <p className="work-eyebrow">My Work</p>
          <h2 className="work-title">
            My <span className="work-title-script">Creations</span>
          </h2>
        </div>
      </div>

      {/* 2. Strip */}
      <div className="work-strip-outer">
        <div
          className="work-strip"
          ref={stripRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {reels.map(reel => (
            <div className="phone-card" key={reel.id} data-reel-id={reel.id}>

              {/* A. Phone shell */}
              <div className="phone-shell">
                <div className="phone-screen">

                  <div className="phone-island" />

                  <div className="phone-content">

                    <video
                      ref={(el) => registerVideoRef(reel.id, el)}
                      src={reel.videoSrc}
                      poster={reel.thumbnailSrc}
                      playsInline
                      preload="metadata"
                      loop
                      muted={reel.id === activeReel ? isMuted : true}
                      className="phone-video"
                    />

                    {activeReel === reel.id && (
                      <button className="video-mute-btn" onClick={handleMuteToggle}>
                        {isMuted ? 'Unmute' : 'Mute'}
                      </button>
                    )}

                  </div>
                </div>
              </div>

              {/* B. Phone label */}
              <div className="phone-label">
                <p className="phone-label-brand">{reel.brand}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 3. Strip nav */}
      <div className="strip-nav">
        <button className="strip-arrow" onClick={scrollLeft}>←</button>
        <button className="strip-arrow" onClick={scrollRight}>→</button>
      </div>

      {/* 4. Footer */}
      <div className="work-footer">
        <p className="work-footer-text">
          Want to see more? Let&apos;s make something <em>together.</em>
        </p>
        <a
          className="work-cta"
          href="https://www.instagram.com/bas.kar.vanshikaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✦ See More on Instagram
        </a>
      </div>

    </section>
  )
}
