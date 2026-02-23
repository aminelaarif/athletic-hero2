import React from 'react'
import Nav from '../components/Nav'
import './Page.css'

export default function Impact() {
  return (
    <div className="app">
      <Nav />
      <main className="page">
        <div className="page__content">
          <h1 className="page__title">Impact</h1>
          <p className="page__subtitle">Measuring our commitment to positive change</p>
          <div className="page__body">
            <p>
              We believe in the power of sport and storytelling to create meaningful change. 
              Through partnerships, initiatives, and community engagement, we're building a 
              platform that amplifies voices and drives action.
            </p>
            <p>
              Our impact extends beyond the field—into communities, schools, and lives. 
              Every project, every partnership, every story contributes to a larger mission 
              of empowerment and transformation.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

