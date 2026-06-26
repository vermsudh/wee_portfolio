import { useState } from 'react'
import { contactInfo, services, contactFormConfig } from './contactData'

export default function useContact() {

  // ── Photo-column state (preserved) ────────────
  const [isHovered, setIsHovered] = useState(false)

  // ── Multi-step form state ──────────────────────
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedIntent,   setSelectedIntent]   = useState(null)
  const [answers,          setAnswers]           = useState({})
  const [finalFields,      setFinalFields]       = useState({ name: '', contact: '' })

  // ── Derived values ─────────────────────────────
  // Steps: 0=intent, 1..n=branch questions, last=final
  // brand   → 3 steps total  (1 branch question)
  // modeling → 4 steps total (2 branch questions)
  // other   → 2 steps total  (0 branch questions)
  // null    → 1 step  (intent picker only)
  function getTotalSteps() {
    if (!selectedIntent) return 1
    const questionCount = contactFormConfig.pathQuestions[selectedIntent]?.length ?? 0
    return 1 + questionCount + 1
  }

  const totalSteps  = getTotalSteps()
  const isFirstStep = currentStepIndex === 0
  const isLastStep  = currentStepIndex === totalSteps - 1

  // The question object for the current branch step, or null when on intent/final step.
  function getCurrentQuestion() {
    if (!selectedIntent || currentStepIndex === 0) return null
    const questions     = contactFormConfig.pathQuestions[selectedIntent]
    const questionIndex = currentStepIndex - 1
    if (questionIndex >= questions.length) return null  // we are at the final step
    return questions[questionIndex]
  }

  const currentQuestion = getCurrentQuestion()

  // ── Actions ────────────────────────────────────

  function selectIntent(intentId) {
    setSelectedIntent(intentId)
    setAnswers({})
    setCurrentStepIndex(1)
  }

  // For single-select: sets value and auto-advances.
  // For multi-select:  toggles value in the array, does NOT advance.
  // Answers always store the human-readable option label so they can be
  // embedded directly into the WhatsApp message without extra lookups.
  function answerQuestion(key, label, type) {
    if (type === 'single') {
      setAnswers(prev => ({ ...prev, [key]: label }))
      setCurrentStepIndex(prev => prev + 1)
    } else {
      setAnswers(prev => {
        const current = Array.isArray(prev[key]) ? prev[key] : []
        const exists  = current.includes(label)
        return {
          ...prev,
          [key]: exists ? current.filter(v => v !== label) : [...current, label],
        }
      })
    }
  }

  // Advances past a multi-select step after the user clicks "Next".
  function proceedToNext() {
    setCurrentStepIndex(prev => prev + 1)
  }

  // Going back to step 0 resets the whole path so a fresh intent pick starts clean.
  // Going back within branch questions preserves already-given answers.
  function goBack() {
    if (currentStepIndex <= 1) {
      setCurrentStepIndex(0)
      setSelectedIntent(null)
      setAnswers({})
    } else {
      setCurrentStepIndex(prev => prev - 1)
    }
  }

  function updateFinalField(key, value) {
    setFinalFields(prev => ({ ...prev, [key]: value }))
  }

  function canProceedFromCurrentStep() {
    if (isLastStep) {
      return finalFields.name.trim() !== '' && finalFields.contact.trim() !== ''
    }
    if (currentQuestion && currentQuestion.type === 'multi') {
      return (answers[currentQuestion.key] || []).length >= 1
    }
    return true
  }

  // ── WhatsApp URL builder ───────────────────────
  function buildWhatsAppMessage() {
    const { name, contact } = finalFields
    let message = ''

    if (selectedIntent === 'brand') {
      const types = (answers.collabType || []).join(', ')
      message =
        `Hi Vanshika,\n\nI'm reaching out regarding: Brand Collaboration\n` +
        `Type: ${types}\n\nName: ${name}\nContact: ${contact}`
    } else if (selectedIntent === 'modeling') {
      message =
        `Hi Vanshika,\n\nI'm reaching out regarding: Modeling Gig\n` +
        `Shoot Type: ${answers.shootType || ''}\n` +
        `Location: ${answers.location || ''}\n\nName: ${name}\nContact: ${contact}`
    } else {
      message =
        `Hi Vanshika,\n\nJust wanted to say hi!\n\nName: ${name}\nContact: ${contact}`
    }

    const encoded = encodeURIComponent(message)
    return `https://wa.me/${contactInfo.phoneRaw}?text=${encoded}`
  }

  function submit() {
    const url = buildWhatsAppMessage()
    window.open(url, '_blank', 'noreferrer')
  }

  // ── Return ─────────────────────────────────────
  return {
    // Preserved for the right-column photo card
    contactInfo,
    services,
    isHovered,
    setIsHovered,

    // Multi-step state
    currentStepIndex,
    selectedIntent,
    answers,
    finalFields,
    totalSteps,
    isFirstStep,
    isLastStep,
    currentQuestion,

    // Actions
    selectIntent,
    answerQuestion,
    proceedToNext,
    goBack,
    updateFinalField,
    canProceedFromCurrentStep,
    submit,
  }
}
