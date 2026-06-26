import './Contact.css'
import useContact from './useContact'
import contactPhoto from '../../assets/contact_image.png'
import { contactFormConfig } from './contactData'
import {
  Handshake, Camera, MessageCircle,
  ChevronLeft, Check, ArrowRight, Send,
  Mail, Phone,
} from 'lucide-react'

// Maps icon name strings from contactFormConfig to lucide-react components.
const INTENT_ICONS = { Handshake, Camera, MessageCircle }

export default function Contact() {

  const {
    contactInfo,
    isHovered, setIsHovered,
    currentStepIndex, selectedIntent, answers, finalFields,
    totalSteps, isFirstStep, isLastStep, currentQuestion,
    selectIntent, answerQuestion, proceedToNext,
    goBack, updateFinalField,
    canProceedFromCurrentStep, submit,
  } = useContact()

  // Step classification
  const isBranchStep = currentStepIndex > 0 && currentQuestion !== null
  const isFinalStep  = currentStepIndex > 0 && currentQuestion === null

  return (
    <section id="contact" className="contact-section">

      {/* ── Left Column ─────────────────────── */}
      <div className="contact-left">

        <p className="c-eyebrow">Get In Touch</p>

        <h2 className="c-title">
          Let's collab instead of work <span className="c-title-script">together</span>
        </h2>

        <p className="c-sub">
          I think i'd be a great fit for your brand, hit me up with work,
          lets do something great yayay
        </p>

        {/* ── Multi-step form panel ──────────── */}
        <div className="c-form-panel">

          {/* Progress dots — shown once a path is chosen */}
          {selectedIntent && (
            <div className="c-progress-dots" aria-label="Step progress">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <span
                  key={i}
                  className={
                    'c-progress-dot' +
                    (i === currentStepIndex ? ' active' : i < currentStepIndex ? ' done' : '')
                  }
                />
              ))}
            </div>
          )}

          {/* Back button — hidden on the intent picker (step 0) */}
          {!isFirstStep && (
            <button className="c-step-back" onClick={goBack} type="button">
              <ChevronLeft size={15} strokeWidth={2.5} />
              Back
            </button>
          )}

          {/* ── Step 0: Intent picker ─────────── */}
          {currentStepIndex === 0 && (
            <div className="c-intent-grid">
              {contactFormConfig.intents.map(intent => {
                const IconComp = INTENT_ICONS[intent.icon]
                return (
                  <button
                    key={intent.id}
                    className="c-intent-card"
                    onClick={() => selectIntent(intent.id)}
                    type="button"
                  >
                    {IconComp && <IconComp size={26} strokeWidth={1.6} className="c-intent-icon" />}
                    <span className="c-intent-label">{intent.label}</span>
                  </button>
                )
              })}
            </div>
          )}

          {/* ── Branch question steps ─────────── */}
          {isBranchStep && (
            <div className="c-step-question-wrap">
              <p className="c-step-question">{currentQuestion.question}</p>

              <div className="c-chips">
                {currentQuestion.options.map(option => {
                  const isSelected =
                    currentQuestion.type === 'multi'
                      ? (answers[currentQuestion.key] || []).includes(option.label)
                      : answers[currentQuestion.key] === option.label

                  return (
                    <button
                      key={option.id}
                      className={'c-chip' + (isSelected ? ' selected' : '')}
                      onClick={() =>
                        answerQuestion(currentQuestion.key, option.label, currentQuestion.type)
                      }
                      type="button"
                    >
                      {isSelected && currentQuestion.type === 'multi' && (
                        <Check size={12} strokeWidth={3} className="c-chip-check" />
                      )}
                      {option.label}
                    </button>
                  )
                })}
              </div>

              {currentQuestion.type === 'multi' && (
                <button
                  className={'c-btn-next' + (!canProceedFromCurrentStep() ? ' disabled' : '')}
                  onClick={proceedToNext}
                  disabled={!canProceedFromCurrentStep()}
                  type="button"
                >
                  Next
                  <ArrowRight size={15} strokeWidth={2.2} />
                </button>
              )}
            </div>
          )}

          {/* ── Final step: name + contact + submit ── */}
          {isFinalStep && (
            <div className="c-final-fields">
              <div className="c-input-wrap">
                <label className="c-label" htmlFor="cf-name">
                  {contactFormConfig.finalStepFields.name.label}
                </label>
                <input
                  className="c-input"
                  type="text"
                  id="cf-name"
                  placeholder={contactFormConfig.finalStepFields.name.placeholder}
                  value={finalFields.name}
                  onChange={e => updateFinalField('name', e.target.value)}
                />
              </div>

              <div className="c-input-wrap">
                <label className="c-label" htmlFor="cf-contact">
                  {contactFormConfig.finalStepFields.contact.label}
                </label>
                <input
                  className="c-input"
                  type="text"
                  id="cf-contact"
                  placeholder={contactFormConfig.finalStepFields.contact.placeholder}
                  value={finalFields.contact}
                  onChange={e => updateFinalField('contact', e.target.value)}
                />
              </div>

              <button
                className="c-btn-whatsapp"
                onClick={submit}
                disabled={!canProceedFromCurrentStep()}
                type="button"
              >
                <span className="wa-icon">
                  <Send size={11} strokeWidth={2.2} />
                </span>
                Send via WhatsApp
              </button>
            </div>
          )}

        </div>
        {/* end .c-form-panel */}

        {/* ── Quick links — icon-only pills ────── */}
        <div className="c-quick-links">
          <a
            className="c-quick-link"
            href={"mailto:" + contactInfo.email}
            aria-label="Send an email"
            title={contactInfo.email}
          >
            <Mail size={15} strokeWidth={1.8} />
          </a>
          <a
            className="c-quick-link"
            href={"tel:+" + contactInfo.phoneRaw}
            aria-label="Call on phone"
            title={contactInfo.phone}
          >
            <Phone size={15} strokeWidth={1.8} />
            <span className="c-quick-link-label">{contactInfo.responseTime}</span>
          </a>
        </div>

      </div>
      {/* end .contact-left */}

      {/* ── Right Column — untouched ─────────── */}
      <div
        className="contact-right"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <img
          className="c-photo"
          src={contactPhoto}
          alt="Vanshika Verma"
          style={{ transform: isHovered ? 'scale(1.03)' : 'scale(1)' }}
        />

        <div className="c-photo-overlay" />

        <div className="c-available">
          <span className="c-available-dot" />
          <span className="c-available-text">{contactInfo.availability}</span>
        </div>

      </div>

    </section>
  )
}
