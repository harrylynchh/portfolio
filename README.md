# Personal Portfolio Site

Live: https://www.harrylynch.dev

A single-page personal portfolio with a quiet-Swiss aesthetic — editorial
typography, a warm paper-textured background, and a palette sampled from my
profile photo (olive-green and chestnut-brown). Supports light and dark themes.

## Tech

- **React** — UI, built with functional components and CSS Modules
- **Vite** — dev server and production build
- **Node.js** — tooling / npm for package management
- **Heroku** — hosting (serves the static `dist/` build)

## Sections

- **Hero** — intro, profile photo, quick links, and light/dark theme toggle
- **Experience** — roles and impact, with a typographic "three voices" layout
- **Projects** — selected work with tech tags and links
- **Contact** — email, social links, and résumé download

## Development

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # lint
npm start        # serve the built dist/ (used in production)
```
