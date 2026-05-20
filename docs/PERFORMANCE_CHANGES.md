# Page Latency Improvements

## Goals
- Reduce initial JavaScript payload for first paint.
- Delay heavy sections and routes until needed.
- Improve browser cache effectiveness for repeat visits.

## What Changed

### 1) Route and section-level lazy loading
File: `src/App.jsx`

- Switched from eager imports to `React.lazy()` for non-critical sections and secondary routes:
  - Main page sections: Tech, About, Works, Feedbacks, Contact
  - Heavy visual component: StarsCanvas
  - Secondary routes: Experience, Playground, ProjectPage, StatisticPage
- Wrapped route rendering in a top-level `Suspense` boundary with a lightweight fallback.

Impact:
- First load executes less code before showing the landing page.
- Non-critical sections are downloaded only when needed.

### 2) Removed duplicate starfield render on home page
File: `src/App.jsx`

- Kept one `StarsCanvas` instance on the landing hero stack.
- Removed the second `StarsCanvas` render near Contact.

Impact:
- Fewer expensive WebGL draw cycles and lower GPU/CPU pressure.

### 3) Vendor chunk splitting for better caching
File: `vite.config.js`

Added `manualChunks`:
- `react-vendor`: react, react-dom, react-router-dom
- `three-vendor`: three, @react-three/fiber, @react-three/drei
- `motion-vendor`: framer-motion

Impact:
- Better long-term caching and smaller invalidation surface.
- Browser can reuse large vendor chunks across deployments.

## New Runtime Structure

### Initial landing path (`/`)
- Eager:
  - Navbar
  - Hero
- Deferred:
  - StarsCanvas
  - Tech, About, Works, Feedbacks, Contact

### Secondary routes (`/project`, `/play`, `/experience`, `/statistics`)
- Loaded on demand via route-level lazy imports.

## Notes
- This optimization favors fast first paint and progressive section hydration.
- If needed, we can further reduce initial latency by replacing large hero images with responsive `srcset` variants and preloading only the first visible asset.
