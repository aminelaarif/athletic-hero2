import React from 'react'

const navLinks = [
  { label: 'Stories', href: '#' },
  { label: 'Impact', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'Newsroom', href: '#' },
]

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export default function Nav() {
  return (
    <nav
      className="nav"
      role="navigation"
      aria-label="Main"
    >
      <a href="/" className="nav__logo" aria-label="Home">
        <LogoMark />
      </a>
      <div className="nav__links">
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} className="nav__link">
            {label}
          </a>
        ))}
        <button type="button" className="nav__icon" aria-label="Search">
          <SearchIcon />
        </button>
      </div>
    </nav>
  )
}

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M8 20 L16 8 L24 20 L16 18 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
