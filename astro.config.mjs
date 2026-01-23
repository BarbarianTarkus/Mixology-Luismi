// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

/**
 * Astro configuration
 *
 * This file configures Astro to produce a static site (SSG).
 * - `output: 'static'` ensures a fully static build suitable for SSG hosting.
 * - `site` should be updated to your production URL when available (used for absolute URLs, sitemaps, etc).
 *
 * Keep the config minimal and clean — the design references Tailwind via CDN in the page itself,
 * so no Tailwind integration is required here unless you prefer the local integration.
 */

export default defineConfig({
  // Produce a static, pre-rendered site (SSG)
  // Replace with your actual site URL when you have it (helps RSS, sitemaps, og urls)
  // Optional: tidy build options (defaults are generally fine)
  // preserve the default directory-format build (output as directory of files)
  // You can customize `base` if the site will be served from a subpath.
  // Example: base: '/mixology/'
  // base: '/',
  // The rest of the defaults from Astro are intentionally preserved for simplicity.
  // site: "https://example.com",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});