import { defineConfig } from "tinacms";
import { HomeCollection } from "./collections/home";
import { ContactCollection } from "./collections/contact";
import { CocktailsCollection } from "./collections/cocktails";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get these from tina.io (Tina Cloud dashboard)
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/src/assets/images/",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [CocktailsCollection, HomeCollection, ContactCollection],
  },
});
