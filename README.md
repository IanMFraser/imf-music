# IMF Music

Portfolio and release archive for **Ian M Fraser**, a composer working in the field of computer music. His work focuses on generative structures, stochastic processes, nonlinear feedback systems, pulsar synthesis, and algorithmic composition.

Live at [ianmfraser.computer](https://ianmfraser.computer)

---

## Tech Stack

| Layer         | Technology                                 |
| ------------- | ------------------------------------------ |
| Framework     | React 19 + TypeScript                      |
| Routing       | React Router 7                             |
| UI            | React Bootstrap 2 + Bootstrap 5            |
| Styling       | Styled-components, CSS, hover.css          |
| Build         | Vite 4                                     |
| Testing       | Vitest + Testing Library                   |
| Linting       | ESLint 9 (flat config) + typescript-eslint |
| Type checking | TypeScript (strict mode)                   |
| Deployment    | GitHub Pages (`gh-pages`)                  |

---

## Project Structure

```
imf-music/
├── public/                  # Static assets (favicon, PWA manifest)
├── src/
│   ├── components/
│   │   ├── NavBar.tsx        # Brand + navigation links
│   │   ├── Home.tsx          # Home page (News + OldNews)
│   │   ├── News.tsx          # Current featured release
│   │   ├── OldNews.tsx       # Historical timeline of releases/performances
│   │   ├── Music.tsx         # Album gallery + nested routing
│   │   ├── Album.tsx         # Individual album detail (tracklist, embed, credits)
│   │   ├── Contact.tsx       # Artist bio + contact
│   │   ├── Footer.tsx        # Copyright footer
│   │   └── BackButton.tsx    # Back navigation
│   ├── __tests__/            # Vitest test suite
│   ├── types.ts              # Shared TypeScript interfaces
│   ├── data.json             # All content (albums, news) — single source of truth
│   ├── App.tsx               # Root router + layout
│   └── index.tsx             # Entry point
├── eslint.config.mjs         # ESLint 9 flat config
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite build config
└── setup.ts                  # Vitest setup
```

---

## Routes

| Path                     | Component | Description                   |
| ------------------------ | --------- | ----------------------------- |
| `/`                      | —         | Redirects to `/music`         |
| `/music`                 | `Home`    | Current news + event archive  |
| `/music/albums`          | `Music`   | Album gallery grid            |
| `/music/albums/:albumId` | `Album`   | Album detail with media embed |
| `/music/contact`         | `Contact` | Bio + contact                 |

---

## Content

All site content lives in `src/data.json`. To add or update albums, news items, or past events, edit that file — no component changes required.

The `albums` array supports both **Bandcamp** and **SoundCloud** embeds via the `iframeSrc` field. Albums without an embed fall back to displaying their artwork image.

---

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm start`         | Start Vite dev server                        |
| `npm run build`     | Production build (outputs to `build/`)       |
| `npm run serve`     | Preview production build locally             |
| `npm test`          | Run test suite with coverage                 |
| `npm run lint`      | Run ESLint across `src/`                     |
| `npm run typecheck` | Run TypeScript type checker (`tsc --noEmit`) |
