import React from 'react'
import Nav from '../components/Nav'
import './Page.css'

export default function Company() {
  return (
    <div className="app">
      <Nav />
      <main className="page">
        <div className="page__content">
          <h1 className="page__title">Company</h1>
          <p className="page__subtitle">Building the future of athletic storytelling</p>
          <div className="page__body">
            <p>
              We're a team of storytellers, creators, and innovators dedicated to elevating 
              the voices of athletes and celebrating their journeys. Our mission is to create 
              content that inspires, connects, and drives positive change.
            </p>
            <p>
              Founded on the belief that every story matters, we work with athletes, brands, 
              and communities to craft narratives that resonate and inspire action. Together, 
              we're shaping the future of how stories are told and heard.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

