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
    <>
      <section className="section" style={{paddingTop: '120px'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h1 style={{marginBottom: '16px'}}>Get In Touch</h1>
            <p style={{color: '#6b7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>
              We'd love to hear from you. Reach out via WhatsApp for instant support or use the contact form to share more details about your project.
            </p>
          </div>

          <div className="contact-options">
            <div className="contact-method">
              <div style={{fontSize: '40px', marginBottom: '16px'}}>💬</div>
              <h3>WhatsApp</h3>
              <p>Get instant response for quick conversations</p>
              <a href="https://wa.me/919972309439" className="btn primary" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
            </div>
            <div className="contact-method">
              <div style={{fontSize: '40px', marginBottom: '16px'}}>📧</div>
              <h3>Email</h3>
              <p>jeev9673@gmail.com</p>
              <a href="mailto:jeev9673@gmail.com" className="btn">Send Email</a>
            </div>
            <div className="contact-method">
              <div style={{fontSize: '40px', marginBottom: '16px'}}>📞</div>
              <h3>Phone</h3>
              <p>+91 9972309439</p>
              <a href="tel:+919972309439" className="btn">Call Us</a>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Quick Inquiry Form</h3>
            <p>Fill out the form and we'll reach out via WhatsApp within 24 hours</p>
            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <input 
                placeholder="Your name" 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input 
                placeholder="Your email" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <textarea 
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button className="btn primary" style={{width: '100%'}}>Send via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
