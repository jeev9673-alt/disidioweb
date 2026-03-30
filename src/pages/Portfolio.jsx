import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Fraapos — SaaS Platform',
    category: 'Web Development',
    description: 'Marketing site and landing for Fraapos SaaS offering.',
    img: '/images/fraapos.svg',
    demo: 'https://fraapos.com',
    results: ['Clear product messaging', 'Fast first paint', 'Conversion-focused CTAs']
  },
  {
    id: 2,
    title: 'Loboprints — Printing Services',
    category: 'Web Development',
    description: 'Service site for Loboprints with catalog and contact flows.',
    img: '/images/loboprints.svg',
    demo: 'https://loboprints.in',
    results: ['Improved lead capture', 'Mobile-optimized catalog', 'CMS for easy updates']
  },
  {
    id: 3,
    title: 'Lobostore — E‑commerce',
    category: 'E‑commerce',
    description: 'Full e-commerce storefront with product pages and checkout.',
    img: '/images/lobostore.svg',
    demo: 'https://lobostore.in',
    results: ['Custom checkout', 'Payment integrations', 'Performance optimizations']
  },
  {
    id: 4,
    title: 'SaaS Dashboard Redesign',
    category: 'UI/UX',
    description: 'Redesigned a complex SaaS dashboard for clarity and efficiency.',
    img: '/images/project1.svg',
    demo: '#',
    results: ['Reduced task time', 'Improved adoption']
  },
  {
    id: 5,
    title: 'E‑commerce Landing',
    category: 'UI/UX',
    description: 'Landing page focused on conversions and product storytelling.',
    img: '/images/project2.svg',
    demo: '#',
    results: ['Higher engagement', 'A/B test winners']
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
