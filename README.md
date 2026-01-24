# Mixology Pro — Astro (SSG)

A small static (SSG) Astro site created to match a provided HTML design. The project is intentionally minimal and focuses on reproducing the reference layout and styles while keeping the code clean and easy to extend.

This README contains project-specific instructions, notes, and suggestions for common workflows.

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
