# Review and plan

## What was wrong

- Bundle was about 4.8 MB of JS: three.js scenes, spline, lottie, MUI, emotion and about 25 more unused dependencies.
- Content did not match the profile: another person's template images and certificates were still in the repo, and the main PDF was stale.
- The Groq API key and EmailJS keys were shipped to the browser.
- Mostly decorative 3D layout; the certifications and the WayaLabs work were hard to find.
- AdSense, dead routes, and no thumbnails for most projects or certificates.

## What changed

- Rebuilt as a lean single-page résumé: Hero, WayaLabs capabilities, selected work, GitHub highlights, experience, stack, credentials, contact. Main JS about 45 KB gzipped.
- `src/data/profile.js` is the single source of truth for the site and the PDF.
- One-page PDF generated from the same data (`npm run resume:pdf`) with live clickable links.
- 13 project thumbnails and 11 certificate or POAP images wired in; unused and foreign assets removed.
- Five POAPs (Chainlink CCIP, Chainlink Functions, Camp #BUIDL, FVM Space Warp, ETHOnline) shown as minted on Gnosis, each linking to its token page on gnosisscan.io. The POAP-hosted pages redirect to the home page, so they were not used.
- Groq calls go through `api/chat.js`; browser keys removed. The contact form was replaced by email and booking links.
- Honest status labels: Live, Research, Template, Earlier.

## Open items

Needs a decision or a data source:

- LinkedIn experience dates are masked in the public view and could not be compared. A LinkedIn data export would settle this.
- Cincinnati State appears on the LinkedIn header but not in the data. It is left out until confirmed.
- Urban Stone Collective is shown as current (Feb 2014 to present), confirmed by the owner, with its backend highlighted. C&E Granite was removed at the owner's request.
- The "Blockchain Specialist" role shows "Present" on LinkedIn but is treated as earlier work here.
- FVM Space Warp POAP is dated 20 Jan 2023 on-chain; LinkedIn says Feb 2023. The POAP date is used.
- The Tarot (Moon Phases) repo README calls it a static prototype; it is labelled that way.
- `github.com/0xwaya/urbanstone` and the Echo repo are private (404), so those cards link to the live site or case study instead.

Operational:

- Set `GROQ_API_KEY` in the Vercel project, or `/api/chat` reports unavailable.
- `api/chat.js` has no rate limiting. Add one (for example Vercel Firewall or an edge counter) before promoting `/play`.
- GitHub numbers (repos, commits, PRs, stars, followers) are a snapshot in `profile.js`. Refresh them when updating the PDF.

## Next ideas

- Per-project detail pages or case-study links as more WayaLabs case studies publish.
- Light theme and print stylesheet that mirrors the PDF.
- Automated PDF build in CI so the file never drifts from `profile.js`.
