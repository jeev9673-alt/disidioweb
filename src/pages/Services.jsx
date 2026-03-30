import React from 'react'
import { Link } from 'react-router-dom'

export default function Services(){
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Logo Design',
      description: 'Custom logo design that represents your brand identity. From concept to final delivery, we create memorable marks that stand out.'
    },
    {
      id: 2,
      icon: '📄',
      title: 'Brochures & Flyers',
      description: 'Professional marketing collateral that communicates your message. Print-ready designs for maximum impact and engagement.'
    },
    {
      id: 3,
      icon: '🎭',
      title: 'Brand Identity',
      description: 'Complete visual identity systems including color palettes, typography, and guidelines. Build a cohesive brand presence.'
    },
    {
      id: 4,
      icon: '🖼️',
      title: 'UI/UX Design',
      description: 'User-centered design for web and mobile apps. Wireframes, prototypes, and high-fidelity mockups in Figma.'
    },
    {
      id: 5,
      icon: '💻',
      title: 'Website Design & Development',
      description: 'Fully responsive websites for all industries. From corporate sites to e-commerce, we build fast and scalable solutions.'
    },
    {
      id: 6,
      icon: '🛒',
      title: 'Ecommerce Solutions',
      description: 'Complete online store setup with product management, payment integration, and inventory tracking systems.'
    },
    {
      id: 7,
      icon: '📱',
      title: 'Mobile App Design',
      description: 'Native and cross-platform mobile app design. Intuitive interfaces that deliver exceptional user experiences.'
    },
    {
      id: 8,
      icon: '📸',
      title: 'Social Media Graphics',
      description: 'Eye-catching graphics for Instagram, Facebook, Twitter, and LinkedIn. Consistent branding across all platforms.'
    },
    {
      id: 9,
      icon: '📋',
      title: 'Brand Guidelines',
      description: 'Comprehensive brand guidelines ensuring consistency. Document your logo usage, colors, fonts, and tone of voice.'
    },
    {
      id: 10,
      icon: '📊',
      title: 'Marketing Materials',
      description: 'Complete marketing suite including business cards, letterheads, email templates, and promotional materials.'
    },
    {
      id: 11,
      icon: '🚀',
      title: 'Digital Strategy',
      description: 'Strategic planning for your digital presence. We help define your goals, audience, and marketing approach.'
    },
    {
      id: 12,
      icon: '💼',
      title: 'Consulting & Custom Solutions',
      description: 'Tailored services for your unique needs. We work closely with you to develop solutions that fit your vision.'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>Comprehensive creative and digital solutions tailored to your business needs</p>
        </div>

        <div className="services-grid-full">
          {services.map((service) => (
            <div key={service.id} className="service-full-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/contact" className="service-link">Get Started →</Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and create something amazing together</p>
          <Link to="/contact" className="btn primary">Contact Us Now</Link>
        </div>
      </div>
    </section>
  )
}
