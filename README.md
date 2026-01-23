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

## What to know about the implementation

- The main page uses the Tailwind CDN (via `https://cdn.tailwindcss.com`) to preserve the reference design exactly. This makes it quick to prototype but is not ideal for production performance.
- The page imports Google Fonts and Material Symbols directly via `<link>` tags.
- `src/pages/index.astro` exports `prerender = true`, meaning Astro will pre-render the page at build time (SSG).
- `astro.config.mjs` is set to `output: "static"`, producing a plain static output suitable for static hosts (Netlify, Vercel, GitHub Pages, etc.).

---

## Recommendations for production

1. Integrate Tailwind locally (recommended)
   - Move away from the CDN in favor of PostCSS + Tailwind integration to:
     - Purge unused CSS
     - Ship smaller CSS bundles
     - Customize utilities in a single `tailwind.config.cjs` / `tailwind.config.js`
   - Example (summary):
     - Install: `npm install -D tailwindcss postcss autoprefixer`
     - Initialize: `npx tailwindcss init -p`
     - Configure `src/styles` and import a compiled CSS file in `src/pages/_template.astro` or `src/layouts`.

2. Add real `site` in `astro.config.mjs`
   - Replace `"https://example.com"` with your production URL. This helps absolute URL generation for sitemaps, RSS, and social cards.

3. Move critical images into `public/`
   - If you plan to self-host images or ensure reliable loading, place them under `public/` and reference them using absolute paths (e.g. `/images/hero.jpg`).

4. Accessibility & SEO
   - Add meta tags for description, Open Graph and Twitter card metadata.
   - Ensure all non-decorative images have descriptive `alt` text or `role="img"` with `aria-label` (the template already uses `aria-label` in some places).
   - Verify color contrast for legibility in both light and dark modes.

---

## Deploying

Any static host works. A few quick notes:

- Netlify
  - Connect the repo, set build command: `npm run build` and publish directory: `dist` (default Astro output).
- Vercel
  - Vercel will detect Astro projects. Use the `npm run build` command.
- GitHub Pages
  - Build locally and push the `dist` folder to `gh-pages` branch (or use a GitHub Action).

---

## Editing the design

- The main page markup lives in `src/pages/index.astro`. Keep the structure and Tailwind classes if you want to preserve the visual design.
- Break repeated UI into components:
  - Create `src/components/Header.astro`, `Hero.astro`, `ServiceCard.astro`, `Footer.astro` for improved maintainability.
  - Use props for text/images to keep markup reusable.

---

## Troubleshooting

- If Tailwind styles do not apply:
  - Ensure the CDN script is present in the `<head>` or integrate Tailwind locally as described above.
- If fonts don't load:
  - Verify your network or consider self-hosting fonts for production.
- If build output is unexpected:
  - Confirm `export const prerender = true;` only exists in pages you intend to statically generate.
  - Check `astro.config.mjs` for `output: "static"` and `base` if deploying to a subpath.

---

## Development notes & tips

- Keep styles scoped to layout and utility classes. For more complex interactions, add small client-side JS with Astro islands.
- If you add client-side interactivity (Vue/React/Svelte), prefer partial hydration (Astro islands) to keep the site performant.
- Consider enabling an image optimization pipeline for large images (e.g., using `@astrojs/image` or a CI step that generates optimized assets).

---

## Helpful commands reference

- `npm run dev` — start local dev server
- `npm run build` — produce static output
- `npm run preview` — preview build locally

---

If you want, I can:
- Add a simple component structure (header, hero, footer) and move the page markup into components.
- Convert the Tailwind CDN usage into a local Tailwind + PostCSS setup and adjust `index.astro` accordingly.
- Add meta tags and a base layout file.

Tell me which of the above you'd like next and I will produce the changes.