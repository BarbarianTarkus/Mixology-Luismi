import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

/**
 * Astro configuration
 *
 * This file configures Astro to produce a hybrid site.
 * - `output: 'hybrid'` allows for static pages and server-side routes (like Keystatic).
 */

export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  integrations: [react(), markdoc(), keystatic()],
});
