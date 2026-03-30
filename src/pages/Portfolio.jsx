import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  { 
    id: 1, 
    title: 'SaaS Dashboard Redesign', 
    category: 'UI/UX Design',
    description: 'Complete redesign of a SaaS dashboard focusing on user experience and conversion optimization.',
    img: '/images/project1.svg', 
    results: ['40% increase in user engagement', 'Improved user retention', 'Better data visualization']
  },
  { 
    id: 2, 
    title: 'E-commerce Landing', 
    category: 'Web Development',
    description: 'High-converting landing page for an e-commerce brand with optimized checkout flow.',
    img: '/images/project2.svg',
    results: ['25% higher conversion rate', 'Responsive design', 'Mobile-first approach']
  },
  { 
    id: 3, 
    title: 'Mobile App UI', 
    category: 'Mobile Design',
    description: 'Native mobile app interface design with seamless user experience across iOS and Android.',
    img: '/images/project3.svg',
    results: ['Intuitive navigation', '4.8 star rating', 'Smooth animations']
  },
  { 
    id: 4, 
    title: 'Agency Website', 
    category: 'Web Design & Development',
    description: 'Portfolio website for a creative agency showcasing their work and services professionally.',
    img: '/images/project4.svg',
    results: ['SEO optimized', 'Fast loading', 'Beautiful design']
  },
  { 
    id: 5, 
    title: 'Brand Identity Pack', 
    category: 'Branding',
    description: 'Complete brand identity system including logo, color palette, typography, and guidelines.',
    img: '/images/project5.svg',
    results: ['Cohesive brand system', 'Professional guidelines', 'Memorable design']
  }
]

export default function Portfolio(){
  return (
    <>
      <section className="section" style={{paddingTop: '120px', background: 'linear-gradient(135deg, #f8fafc 0%, #f0f7ff 100%)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h1 style={{marginBottom: '16px'}}>Our Portfolio</h1>
            <p style={{color: '#6b7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>
              Showcasing our recent work across UI/UX design, web development, and branding projects.
            </p>
          </div>

          <div className="portfolio-grid">
            {projects.map(p => (
              <article key={p.id} className="project-card">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div style={{padding: '8px'}}>
                  <div style={{fontSize: '12px', fontWeight: '700', color: '#1f6feb', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px'}}>
                    {p.category}
                  </div>
                  <h3 style={{fontSize: '18px', margi: '12px 0', fontWeight: '700'}}>{p.title}</h3>
                  <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px'}}>{p.description}</p>
                  <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '12px'}}>
                    <p style={{fontSize: '12px', fontWeight: '600', color: '#1f6feb', marginBottom: '8px'}}>Key Results:</p>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {p.results.map((result, idx) => (
                        <li key={idx} style={{fontSize: '13px', color: '#6b7280', marginBottom: '4px', paddingLeft: '16px', position: 'relative'}}>
                          <span style={{position: 'absolute', left: 0, color: '#1f6feb', fontWeight: '700'}}>✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-content">
          <h2>Interested in Working With Us?</h2>
          <p>Let's create something amazing together. Get in touch today!</p>
          <Link to="/contact" className="btn primary">Start Your Project</Link>
        </div>
      </section>
    </>
  )
}
