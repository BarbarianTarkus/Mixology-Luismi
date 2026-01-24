import type { Collection } from "tinacms";

export const cocktailsCollection: Collection = {
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
      name: "slug",
      label: "Slug",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      required: true,
    },
    {
      type: "string",
      name: "ingredients",
      label: "Ingredients",
      required: true,
    },
    {
      type: "string",
      name: "instructions",
      label: "Instructions",
      required: true,
    },
  ],
};
