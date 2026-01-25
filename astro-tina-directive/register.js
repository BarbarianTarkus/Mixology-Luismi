import { fileURLToPath } from "url";

/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "client:tina",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "tina",
        entrypoint: fileURLToPath(new URL("./tina.js", import.meta.url)),
      });
    },
  },
});
