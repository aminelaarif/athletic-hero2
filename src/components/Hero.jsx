import React from 'react'
import PillTag from './PillTag'

// Athletic vibe hero — replace with public/hero.png for a custom image
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80'
const FALLBACK_HERO =
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80'

export default function Hero() {
  const [imgSrc, setImgSrc] = React.useState(HERO_IMAGE)
  const handleError = () => setImgSrc(FALLBACK_HERO)

  return (
    <header className="hero">
      <div className="hero__bg">
        <img
          src={imgSrc}
          alt=""
          className="hero__img"
          onError={handleError}
        />
        <div className="hero__overlay" aria-hidden />
      </div>

      <div className="hero__content">
        <div className="hero__tags">
          <PillTag>Vol. 1</PillTag>
          <PillTag>Company</PillTag>
        </div>
        <h1 className="hero__headline">The Athlete's Voice</h1>
        <div className="hero__meta">
          <time dateTime="2022-07-12">July 12, 2022</time>
          <a href="#" className="hero__share" aria-label="Share">
            <ShareIcon />
            Share
          </a>
        </div>
      </div>
    </header>
  )
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  )
}
