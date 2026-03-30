import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>DiSidio Labs</h4>
          <p>Creative + Tech Digital Services</p>
          <p className="tagline-sm">Design. Develop. Brand. Deliver.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:jeev9673@gmail.com" className="contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11A2.5 2.5 0 0118.5 20h-13A2.5 2.5 0 013 17.5v-11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 6.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>jeev9673@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+919972309439" className="contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.12.93.38 1.84.78 2.68a2 2 0 01-.45 2.11L9.91 9.91a16 16 0 006 6l1.4-1.4a2 2 0 012.11-.45c.84.4 1.75.66 2.68.78A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>+91 9972309439</span>
              </a>
            </li>
            <li className="contact-addr">Bangalore, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="social instagram">
              <span className="icon-circle" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="social facebook">
              <span className="icon-circle" aria-hidden>
                <svg width="14" height="16" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 0H2v28h10v-9H9v-4h3v-3c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.6.1 3 .2v3.5h-2c-1.6 0-2 1-2 2v2.1h4l-.5 4H17v9h5z" fill="currentColor"/>
                </svg>
              </span>
              <span>Facebook</span>
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer" title="X" className="social x">
              <span className="icon-circle" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3c-.8.4-1.6.7-2.5.8.9-.6 1.6-1.5 1.9-2.6-.8.5-1.7.9-2.6 1.2C18.6 1.4 17.3 1 16 1c-2.6 0-4.7 2.1-4.7 4.7 0 .4 0 .8.1 1.1C7.7 6.6 4.1 4.6 1.7 1.7c-.4.8-.6 1.7-.6 2.6 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.6v.1c0 2.4 1.7 4.4 3.9 4.9-.4.1-.8.1-1.3.1-.3 0-.6 0-.9-.1.6 1.8 2.4 3.1 4.5 3.1-1.6 1.2-3.7 1.9-6 1.9-.4 0-.8 0-1.2-.1C4.2 21 6.6 22 9.2 22c7.4 0 11.4-6.1 11.4-11.4v-.5C21.8 4.9 22.5 4 23 3z" fill="currentColor"/>
                </svg>
              </span>
              <span>X</span>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social linkedin">
              <span className="icon-circle" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.08 1 2.48 1 4.98 2 4.98 3.5zM0 8h5v16H0V8zm7 0h5v2.2c.7-1.2 2.3-2.2 4.9-2.2C22.5 8 24 9.6 24 13.1V24h-5v-9.1c0-2-1.4-3-3.1-3-1.4 0-2.2.9-2.6 1.8-.1.3-.1.7-.1 1.1V24H7V8z" fill="currentColor"/>
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} DiSidio Labs — All rights reserved. | Design. Develop. Brand. Deliver.</p>
        </div>
      </div>
    </footer>
  )
}
