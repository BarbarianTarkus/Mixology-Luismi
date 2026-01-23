/**
 * tailwind.config.cjs
 *
 * Tailwind CSS v4 configuration for the Mixology-Luismi project.
 *
 * Notes:
 * - This file uses CommonJS (cjs) so it works with typical PostCSS setups.
 * - The `content` globs target Astro pages/components and any static HTML in `public/`.
 * - `darkMode` is configured to 'class' to match the design which toggles dark via a class on <html>.
 * - The config extends colors, fonts and border radii to mirror the provided design.
 *
 * If you plan to use official Tailwind plugins (like @tailwindcss/forms), install them
 * and add them to the `plugins` array below.
 */

module.exports = {
  content: [
    // Astro pages/components and scripts
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    // Static HTML (public)
    "./public/**/*.html"
  ],
  darkMode: "class", // use the `class` strategy to toggle dark mode with a class on <html>
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#f2b90d",
        "background-light": "#f8f8f5",
        "background-dark": "#221e10",
        // accent neutrals used in the design
        "muted-beige": "#cbbc90",
        "card-bg": "#342d18",
        "card-border": "#685a31",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      // Optional: keep a few sensible aspect ratios used in the design
      aspectRatio: {
        // requires the aspect-ratio plugin in older setups; tailwind v4 may include it
        "4/3": "4 / 3",
        "16/9": "16 / 9"
      },
      boxShadow: {
        "primary-soft": "0 10px 20px rgba(242,185,13,0.12)",
      },
    },
  },

  // Add any Tailwind plugins you plan to use. Example:
  // plugins: [require('@tailwindcss/forms')],
  plugins: [],
};
