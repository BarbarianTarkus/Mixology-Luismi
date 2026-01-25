import type { Collection } from "tinacms";

export const CocktailsCollection: Collection = {
  name: "cocktails",
  label: "Cocktails",
  path: "src/content/cocktails",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "desc",
      label: "Description",
      required: false,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      required: false,
    },
    {
      type: "string",
      name: "alt",
      label: "Alt Text",
      required: true,
    },
  ],
};
