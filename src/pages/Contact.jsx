import React, { useState } from 'react'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const message = `Hello! My name is ${formData.name}. Email: ${formData.email}\n\nProject Details:\n${formData.message}`
    const whatsappUrl = `https://wa.me/919972309439?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="section">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-options">
          <div className="contact-method">
            <h3>WhatsApp</h3>
            <p>Quick chat? Reach us directly on WhatsApp:</p>
            <a href="https://wa.me/919972309439" className="btn primary" target="_blank" rel="noopener noreferrer">💬 Message on WhatsApp</a>
          </div>
          <div className="contact-method">
            <h3>Email</h3>
            <p>For detailed inquiries, email us at:</p>
            <a href="mailto:hello@disidio.example" className="btn">📧 Send Email</a>
          </div>
        </div>

        <div className="contact-form-section">
          <h3>Send us a message</h3>
          <p>Fill out the form below and we'll reach out via WhatsApp:</p>
          <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
            <input 
              placeholder="Your name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input 
              placeholder="Email" 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea 
              placeholder="Project details" 
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button className="btn primary">Send via WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  )
}
