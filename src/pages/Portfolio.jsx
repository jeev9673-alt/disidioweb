import React from 'react'

const projects = [
  { id: 1, title: 'SaaS Dashboard Redesign', img: '/images/project1.svg', figma: '#', demo: '#' },
  { id: 2, title: 'E‑commerce Landing', img: '/images/project2.svg', figma: '#', demo: '#' },
  { id: 3, title: 'Mobile App UI', img: '/images/project3.svg', figma: '#', demo: '#' },
  { id: 4, title: 'Agency Website', img: '/images/project4.svg', figma: '#', demo: '#' },
  { id: 5, title: 'Brand Identity Pack', img: '/images/project5.svg', figma: '#', demo: '#' }
]

export default function Portfolio(){
  return (
    <section className="section">
      <div className="container">
        <h2>Portfolio</h2>
        <p>Selected mock projects with screenshots, Figma mockups, and demo links.</p>
        <div className="portfolio-grid">
          {projects.map(p => (
            <article key={p.id} className="project-card">
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <div className="project-links">
                <a href={p.figma} target="_blank" rel="noopener noreferrer">Figma</a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
