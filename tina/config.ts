import { defineConfig } from "tinacms";
import { HomeCollection } from "./collections/home";
import { ContactCollection } from "./collections/contact";
import { CocktailsCollection } from "./collections/cocktails";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,
  // Get these from tina.io (Tina Cloud dashboard)
  token: process.env.TINA_TOKEN,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/assets/images",
      publicFolder: "",
    },
  },
  schema: {
    collections: [CocktailsCollection, HomeCollection, ContactCollection],
  },
});
