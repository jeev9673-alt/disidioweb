import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">DiSidio Labs</Link>
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="cta">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
