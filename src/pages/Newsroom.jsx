import React from 'react'
import Nav from '../components/Nav'
import './Page.css'

export default function Newsroom() {
  return (
    <div className="app">
      <Nav />
      <main className="page">
        <div className="page__content">
          <h1 className="page__title">Newsroom</h1>
          <p className="page__subtitle">Latest updates, press releases, and announcements</p>
          <div className="page__body">
            <p>
              Stay informed with the latest news, press releases, and updates from our team. 
              From major announcements to behind-the-scenes insights, the newsroom is your 
              source for everything happening in our world.
            </p>
            <p>
              For media inquiries, press materials, or interview requests, please reach out 
              to our communications team. We're here to help tell your story.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

