import type { Collection } from "tinacms";

export const HomeCollection: Collection = {
  name: "home",
  label: "Home",
  path: "src/content/home",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "heroEyebrow",
      label: "Hero Eyebrow",
      required: false,
    },
    {
      type: "string",
      name: "heroTitle",
      label: "Hero Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "heroImage",
      label: "Hero Image",
      required: true,
    },
  ],
};
