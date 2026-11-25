# Edward Mercado — digital résumé

Single-page portfolio and résumé for **Edward Mercado** (`0xwaya`), founder of [WayaLabs](https://wayalabs.com). Live at [emresume.vercel.app](https://emresume.vercel.app).

This repository is not the studio site. The studio lives at [wayalabs.com](https://wayalabs.com) ([0xwaya/wayalabs](https://github.com/0xwaya/wayalabs)).

## What the page shows

Hero, WayaLabs capabilities and process, selected work with thumbnails, GitHub highlights, experience, stack, credentials (certificates, POAPs minted on Gnosis, Sololearn, freeCodeCamp), and contact. `/play` is a small chat assistant that answers questions about the portfolio.

Work is labelled honestly: **Live** (running client or studio sites), **Research** (agents and orchestration, not a client offer), **Template** and **Earlier work**. No invented metrics.

## Stack

Vite 6, React 18, Tailwind CSS 3, Framer Motion, React Router, `react-icons` (named imports), self-hosted Inter. Main JS bundle is about 45 KB gzipped; the chat page is lazy-loaded.

## Layout

| Path | Purpose |
|---|---|
| `src/data/profile.js` | Single source of truth for the site and the PDF. Pure data, runs under plain Node. |
| `src/data/assets.js` | Maps content keys to bundled images. |
| `src/sections/`, `src/components/`, `src/pages/` | UI. |
| `src/assets/` | Portrait, logos, project thumbnails (`shots/`), certificate and POAP images (`certificates/`), GitHub stat cards. |
| `api/chat.js` | Vercel function that proxies Groq so the key never reaches the browser. |
| `scripts/build-resume.mjs` | Builds the one-page PDF. |
| `docs/REVIEW_AND_PLAN.md` | Review findings, what changed, open items. |

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build
```

## Update the résumé PDF

Edit `src/data/profile.js`, then:

```bash
npm run resume:pdf   # needs Google Chrome; set CHROME_BIN to override the path
```

This rewrites `public/Edward-Mercado-Resume.pdf` (one Letter page, clickable links). The site's "Résumé" buttons point at that file.

## Environment

| Variable | Where | Purpose |
|---|---|---|
| `GROQ_API_KEY` | Vercel project env | Enables `/api/chat` in production. Without it the chat page shows an unavailable message. |
| `VITE_GROQ_API_KEY` | Local `.env` only | Optional dev shortcut that calls Groq directly from the browser. Never set it in production. |

## License

MIT. See [LICENSE](LICENSE).
