# Editorial Hero — Immersive Full-Screen Layout

A React project implementing an **editorial storytelling** hero: full-screen image, minimal UI, and magazine-style typography. Suited for athlete-focused or brand narrative landing pages.

## Design

- **Layout:** Full-bleed hero, text left, subject right; asymmetrical editorial grid
- **Colors:** White overlay text, soft charcoal gradient overlay, warm image base
- **Typography:** Inter (display headline + light meta/nav), title case, pill tags
- **UI:** Transparent nav, pill labels, text-style share; no heavy buttons

## Run

```bash
npm install
npm run dev
```

Open the URL shown (e.g. `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Hero image

The hero uses a placeholder image by default. To use your own:

1. Add your image as `public/hero.png` (or `hero.jpg`).
2. In `src/components/Hero.jsx`, set `HERO_IMAGE` to `'/hero.jpg'` if using a JPG.

If `public/hero.png` is missing, the app falls back to a stock image.

## Project structure

- `src/App.jsx` — Root layout (Nav + Hero)
- `src/components/Nav.jsx` — Top nav (logo left, links + search right)
- `src/components/Hero.jsx` — Full-screen hero, headline, tags, meta
- `src/components/PillTag.jsx` — Rounded pill label
- `src/App.css` — Component styles
- `src/index.css` — Design tokens and base styles
"# athletic-hero" 
