import type { Collection } from 'tinacms';

export const ContactCollection: Collection = {
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
