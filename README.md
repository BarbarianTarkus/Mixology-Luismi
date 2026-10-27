# Mixology Pro — Astro (SSG)

## Purpose
I had a friend who wanted to provide Mixology Services, then I saw on that moment about Google Stitch UI generation capabilities.

On early 2026 it was almost crazy, but stitch can't always made the same design pattern, too google-ish.

Today it looks very limited and unsatisfactory, it's what we call **AI-Slop**.

### Low budget Objective
The website is built thinking on the cheapest maintainability for the final client, my friend.
Static page, hosted on Cloudflare workers or GitHub pages.
- **9€** domain * + **0€** hosting providers cost.

## Frontend
- AstroJS, designed with Google Stitch, with free Gemini 2 Flash.
- Using Zed with Zed AI completions and Opencode Free Tier for coding assistance.

### Preview

| **Cloudflare Pages** |
|---|
| https://mixology-luismi.ricardoverduguez.workers.dev  |
|<img width="250" height="400" alt="mixology-luismi ricardoverduguez workers dev_" src="https://github.com/user-attachments/assets/4265fde2-507d-4ee2-80d9-d6e0717a6229" />|


## Headless CMS Integration
Also, I experienced all kinds of Headless-CMS's for Astro.
- **Strapi** - It's good, but it lacks of visual editor and GitHub pages support.
- **DecapCMS** - Good, but built for developers and power users, no visual editor

***TinaCMS*** is the king
- Has visual editing
- Static pages support GitHub Pages, Cloudflare Workers...
- Although it has a Self-Hosting option, feature I like a lot, this time I choose to use TinaCMS Cloud, lets you connect your Static Page with it, and edit and collaborate safely with no rare domain, or nothing complicated that scares non-technical users.

### TinaCMS in action
Log-in Required can't provide a preview or demo.

|   |   |   |
|---|---|---|
|<img width="600" height="400" alt="image" src="https://github.com/user-attachments/assets/174f6fb5-6f11-4391-9b14-c142bf68dfa4" />| <img width="600" height="400" alt="image" src="https://github.com/user-attachments/assets/24f332a0-0223-4c99-8ae0-1febefa16fcc" />| <img width="600" height="400" alt="image" src="https://github.com/user-attachments/assets/c14c9f53-2399-4c5f-813e-d6def2ea0ab5" /> |



---

## Project layout (important files)

- `src/pages/index.astro` — Main page (SSG-rendered, contains the design markup).
- `astro.config.mjs` — Astro configuration. Currently configured for static output (`output: "static"`).
- `package.json` — Scripts and dependencies (includes `astro`).
- `public/` — Static assets (favicons, images you want to serve directly).

---

## Requirements

- Node.js (LTS recommended; v18+ works well)
- npm, pnpm or yarn (examples below use `npm`)

---

## Quick start

1. Install dependencies:
   - npm:
     ```bash
     npm install
     ```
   - pnpm:
     ```bash
     pnpm install
     ```

2. Start the local dev server:

   ```bash
   npm run dev
   ```

3. Build the static site:

   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

---
