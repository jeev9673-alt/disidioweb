import React from 'react'

export default function Contact(){
  return (
    <section className="section">
      <div className="container">
        <h2>Contact</h2>
        <p>Ready to start? Send us a message at <strong>hello@disidio.example</strong> or use the contact form below.</p>
        <form className="contact-form" onSubmit={e=>e.preventDefault()}>
          <input placeholder="Your name" />
          <input placeholder="Email" />
          <textarea placeholder="Project details" rows={5}></textarea>
          <button className="btn primary">Send</button>
        </form>
      </div>
    </section>
  )
}
