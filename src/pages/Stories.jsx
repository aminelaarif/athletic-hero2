import React from 'react'
import Nav from '../components/Nav'
import './Page.css'

export default function Stories() {
  return (
    <div className="app">
      <Nav />
      <main className="page">
        <div className="page__content">
          <h1 className="page__title">Stories</h1>
          <p className="page__subtitle">Discover inspiring narratives from athletes and changemakers</p>
          <div className="page__body">
            <p>
              Our stories celebrate the journeys, triumphs, and challenges of those who push boundaries 
              and redefine what's possible. Each narrative is a testament to resilience, dedication, 
              and the power of human spirit.
            </p>
            <p>
              From breakthrough performances to personal transformations, we bring you the stories 
              that matter—stories that inspire, motivate, and connect us all.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

