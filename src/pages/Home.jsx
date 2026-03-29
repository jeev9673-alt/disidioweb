import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>DiSidio Labs — Creative + Tech Digital Services</h1>
            <p className="tagline">Design. Develop. Brand. Deliver.</p>
            <div className="hero-ctas">
              <Link to="/portfolio" className="btn primary">Check our portfolio</Link>
              <Link to="/contact" className="btn">Contact Us</Link>
            </div>
          </div>
          <div className="hero-art">
            <img src="/images/hero.svg" alt="DiSidio Labs illustration" />
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <h2>What we do</h2>
          <div className="grid">
            <div className="card">
              <h3>UI/UX Design</h3>
              <p>Figma-led product design for SaaS, mobile and website redesigns.</p>
              <Link to="/services">Learn more →</Link>
            </div>
            <div className="card">
              <h3>Web Development</h3>
              <p>Production-ready frontends, WordPress/Wix setups and performant builds.</p>
              <Link to="/services">Learn more →</Link>
            </div>
            <div className="card">
              <h3>Branding</h3>
              <p>Logo systems, marketing assets and social graphics to amplify your brand.</p>
              <Link to="/services">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
