// tina/config.ts
import { defineConfig } from 'tinacms';

// tina/collections/home.ts
var HomeCollection = {
  name: 'home',
  label: 'Home',
  path: 'src/content/home',
  format: 'mdx',
  ui: {
    router: () => '/',
  },
  fields: [
    {
      type: 'string',
      name: 'heroEyebrow',
      label: 'Hero Eyebrow',
      required: false,
    },
    {
      type: 'string',
      name: 'heroTitle',
      label: 'Hero Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'heroDescription',
      label: 'Hero Description',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'image',
      name: 'heroImage',
      label: 'Hero Image',
      required: true,
    },
  ],
};

// tina/collections/contact.ts
var ContactCollection = {
  name: 'contact',
  label: 'Contact',
  path: 'src/content/contact',
  format: 'mdx',
  ui: {
    router: () => '/contacto',
  },
  fields: [
    {
      type: 'string',
      name: 'introTitle',
      label: 'Intro Title',
      required: true,
    },
    {
      type: 'string',
      name: 'introDesc',
      label: 'Intro Description',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'phone',
      label: 'Phone',
      required: false,
    },
    {
      type: 'string',
      name: 'phoneUrl',
      label: 'Phone URL',
      required: false,
    },
    {
      type: 'string',
      name: 'whatsappUrl',
      label: 'WhatsApp URL',
      required: false,
    },
    {
      type: 'string',
      name: 'email',
      label: 'Email',
      required: false,
    },
    {
      type: 'string',
      name: 'address',
      label: 'Address',
      required: false,
    },
    {
      type: 'string',
      name: 'schedule',
      label: 'Schedule',
      required: false,
    },
    {
      type: 'string',
      name: 'instagramUrl',
      label: 'Instagram URL',
      required: false,
    },
  ],
};

// tina/collections/cocktails.ts
var CocktailsCollection = {
  name: 'cocktails',
  label: 'Cocktails',
  path: 'src/content/cocktails',
  format: 'md',
  ui: {
    router: ({ document }) => {
      return `/cocteles/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'desc',
      label: 'Description',
      required: false,
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image',
      required: false,
      // @ts-ignore
      ui: {
        uploadDir: 'cocktails',
      },
    },
    {
      type: 'string',
      name: 'alt',
      label: 'Alt Text',
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};

// tina/config.ts
var branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master';
var config_default = defineConfig({
  branch,
  // Get these from tina.io (Tina Cloud dashboard)
  token: process.env.TINA_TOKEN,
  clientId:
    process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.PUBLIC_TINA_CLIENT_ID,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'src/assets/images',
      publicFolder: '',
    },
  },
  schema: {
    collections: [CocktailsCollection, HomeCollection, ContactCollection],
  },
});
export { config_default as default };
