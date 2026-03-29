import React from 'react'

export default function About(){
  return (
    <section className="section">
      <div className="container team">
        <h2>About Us</h2>
        <p>We are Dilip and Siddesh — a small creative + tech studio focused on product design and web development.</p>
        <div className="team-grid">
          <div className="member">
            <h4>Dilip</h4>
            <p>Designer & Frontend developer — Figma expert, UI systems, and polished interactions.</p>
          </div>
          <div className="member">
            <h4>Siddesh</h4>
            <p>Developer & Integrations — full-stack implementations, CMS, and performance-focused builds.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
