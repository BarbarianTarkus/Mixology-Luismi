import { defineCollection, z } from "astro:content";

const cocktails = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      id: z.string(),
      desc: z.string(),
      image: image().optional(),
      alt: z.string().optional(),
    }),
});

const services = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
  }),
});

const home = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      heroEyebrow: z.string(),
      heroTitle: z.string(),
      heroDescription: z.string(),
      heroImage: image().optional(),
    }),
});

const contact = defineCollection({
  type: "data",
  schema: z.object({
    phone: z.string(),
    phoneUrl: z.string(),
    whatsappUrl: z.string(),
    email: z.string(),
    address: z.string(),
    schedule: z.string(),
    instagramUrl: z.string(),
  }),
});

export const collections = {
  cocktails,
  services,
  home,
  contact,
};
