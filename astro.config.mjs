import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import tinaDirective from './astro-tina-directive/register.js';

/**
 * Astro configuration
 *
 * This file configures Astro to produce a hybrid site.
 * - `output: 'hybrid'` allows for static pages and server-side routes
 */

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile',
  }),

  integrations: [react(), markdoc(), tinaDirective(), mdx()],

  vite: {
    ssr: {
      external: ['node:fs', 'node:path', 'node:os', 'node:crypto'],
    },
  },
});
