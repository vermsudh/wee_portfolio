import './Work.css'
import useWork from './useWork'

export default function Work() {
  const {
    filters, visibleReels, activeFilter, activeReel, triggerType, isMuted,
    sectionRef, stripRef,
    handleFilter, handlePlay, handleClose, handleMuteToggle,
    registerVideoRef, handleCardMouseEnter, handleCardMouseLeave,
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

      {/* 2. Filters */}
      <div className="work-filters">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={"filter-btn" + (activeFilter === filter.value ? " active" : "")}
            onClick={() => handleFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* 3. Strip */}
      <div className="work-strip-outer">
        <div
          className="work-strip"
          ref={stripRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {visibleReels.map(reel => (
            <div className="phone-card" key={reel.id}>

              {/* A. Phone shell */}
              <div
                className="phone-shell"
                onMouseEnter={() => handleCardMouseEnter(reel.id)}
                onMouseLeave={() => handleCardMouseLeave(reel.id)}
              >
                <div className="phone-screen">

                  <div className="phone-island" />

                  <div className="phone-content">

                    {/* Thumbnail — resting state */}
                    <div
                      className={"phone-thumbnail" + (activeReel === reel.id ? " hidden" : "")}
                    >
                      <div
                        className="thumb-bg"
                        style={{ background: reel.bgGradient }}
                      />
                      <div className="thumb-overlay" />
                      <button
                        className="play-btn"
                        onClick={() => handlePlay(reel.id)}
                      >
                        <div className="play-icon" />
                      </button>
                      <span className="tap-label">Tap to play</span>
                      <div className="phone-info-inner">
                        <span className="phone-brand-tag">{reel.tag}</span>
                        <p className="phone-reel-title">{reel.title}</p>
                      </div>
                    </div>

                    {/* Video — active state */}
                    <div
                      className={"phone-embed" + (activeReel === reel.id ? " active" : "")}
                    >
                      {/* Clicking the video itself switches hover→click */}
                      <video
                        ref={(el) => registerVideoRef(reel.id, el)}
                        src={reel.videoSrc}
                        playsInline
                        preload="metadata"
                        loop
                        muted={triggerType === 'hover' || (triggerType === 'click' && isMuted)}
                        className="phone-video"
                        onClick={() => handlePlay(reel.id)}
                      />
                      {activeReel === reel.id && triggerType === 'click' && (
                        <div className="video-controls">
                          <button
                            className="video-mute-btn"
                            onClick={handleMuteToggle}
                          >
                            {isMuted ? 'Unmute' : 'Mute'}
                          </button>
                          <button
                            className="embed-close-btn"
                            onClick={handleClose}
                          >
                            ✕ Close
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>

              {/* B. Phone label */}
              <div className="phone-label">
                <p className="phone-label-brand">{reel.brand}</p>
                <p className="phone-label-cat">{reel.labelCat}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. Strip nav */}
      <div className="strip-nav">
        <button className="strip-arrow" onClick={scrollLeft}>←</button>
        <button className="strip-arrow" onClick={scrollRight}>→</button>
      </div>

      {/* 5. Footer */}
      <div className="work-footer">
        <p className="work-footer-text">
          Want to see more? Let&apos;s make something <em>together.</em>
        </p>
        <a className="work-cta" href="#contact">✦ Work With Me</a>
      </div>

    </section>
  )
}
