import { useState } from 'react'
import { contactInfo, services } from './contactData'

export default function useContact() {

  // ── State ──────────────────────────────────
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    service: '',
    message: ''
  })

  const [isHovered, setIsHovered] = useState(false)

  // ── Handle Change ──────────────────────────
  function handleChange(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // ── Build WhatsApp URL ─────────────────────
  function buildWhatsAppUrl() {
    const message =
      `Hi Vanshika! I'm ${formData.name} from ${formData.brand}. ` +
      `I'm interested in ${formData.service}. ` +
      `${formData.message}`
    const encoded = encodeURIComponent(message)
    return `https://wa.me/${contactInfo.phoneRaw}?text=${encoded}`
  }

  // ── Handle WhatsApp Submit ─────────────────
  function handleWhatsApp(e) {
    e.preventDefault()
    const url = buildWhatsAppUrl()
    window.open(url, '_blank', 'noreferrer')
  }

  // ── Return ─────────────────────────────────
  return {
    contactInfo,
    services,
    formData,
    isHovered,
    setIsHovered,
    handleChange,
    handleWhatsApp
  }
}