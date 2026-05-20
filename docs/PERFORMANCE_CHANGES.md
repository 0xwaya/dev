# Page Latency Improvements

## Goals

- Reduce initial JavaScript payload for first paint.
- Delay heavy sections and routes until needed.
- Improve browser cache effectiveness for repeat visits.

## What Changed

### Route and section-level lazy loading

File: `src/App.jsx`

- Switched from eager imports to `React.lazy()` for non-critical sections
  and secondary routes.
- Main page sections now load lazily: Tech, About, Works, Feedbacks, Contact.
- The heavy visual component, `StarsCanvas`, now loads lazily.
- Secondary routes now load lazily: Experience, Playground, ProjectPage, StatisticPage.

## AI Chat (Playground)

- Migrated from Ollama to [Groq](https://console.groq.com/) for chat completions.
- API client lives in `src/pages/groqApi.js` (`callGroqApi`).
- Model defaults to `llama-3.3-70b-versatile`; override via `VITE_GROQ_MODEL` env var.
- Required env var: `VITE_GROQ_API_KEY` (add to `.env.local` for local dev or Vercel Settings for production).
- Route rendering is wrapped in a top-level `Suspense` boundary with a
  lightweight fallback.

Impact

- First load executes less code before showing the landing page.
- Non-critical sections are downloaded only when needed.

### Removed duplicate starfield render on home page

File: `src/App.jsx`

- Kept one `StarsCanvas` instance on the landing hero stack.
- Removed the second `StarsCanvas` render near Contact.

Impact

- Fewer expensive WebGL draw cycles.
- Lower GPU and CPU pressure.

### Vendor chunk splitting for better caching

File: `vite.config.js`

- Added `manualChunks` for better long-term caching.
- `react-vendor`: react, react-dom, react-router-dom.
- `three-vendor`: three, `@react-three/fiber`, `@react-three/drei`.
- `motion-vendor`: framer-motion.

Impact

- Better long-term caching and smaller invalidation surface.
- The browser can reuse large vendor chunks across deployments.

## New Runtime Structure

### Initial landing path `/`

- Eager: Navbar, Hero.
- Deferred: StarsCanvas, Tech, About, Works, Feedbacks, Contact.

### Secondary routes `/project`, `/play`, `/experience`, `/statistics`

- Loaded on demand via route-level lazy imports.
- `/statistics` now reuses the same live GitHub card providers as `README.md`
  (`github-profile-summary-cards` and `streak-stats.demolab`) instead of the
  older deprecated widget endpoints.

## Notes

- This optimization favors fast first paint and progressive section hydration.
- If needed, we can further reduce initial latency by replacing large hero
  images with responsive `srcset` variants and preloading only the first
  visible asset.
