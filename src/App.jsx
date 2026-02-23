import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stories from './pages/Stories'
import Impact from './pages/Impact'
import Company from './pages/Company'
import Newsroom from './pages/Newsroom'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <Nav />
            <Hero />
          </div>
        } />
        <Route path="/stories" element={<Stories />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/newsroom" element={<Newsroom />} />
      </Routes>
    </BrowserRouter>
  )
}
