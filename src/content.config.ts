import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cocktails = defineCollection({
  loader: glob({ base: 'src/content/cocktails', pattern: '*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      desc: z.string(),
      image: image(),
      alt: z.string().optional(),
    }),
});

const services = defineCollection({
  loader: glob({ base: 'src/content/services', pattern: '*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
  }),
});

const home = defineCollection({
  loader: glob({ base: 'src/content/home', pattern: '*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      heroEyebrow: z.string(),
      heroTitle: z.string(),
      heroDescription: z.string(),
      heroImage: image().optional(),
    }),
});

const contact = defineCollection({
  loader: glob({ base: 'src/content/contact', pattern: '*.{md,mdx}' }),
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
