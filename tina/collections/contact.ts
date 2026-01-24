import type { Collection } from "tinacms";

/*
phone
phoneUrl
whatsappUrl
email
address
schedule
instagramUrl
*/

export const contactCollection: Collection = {
  name: "contact",
  label: "Contact",
  path: "src/content/contact",
  fields: [
    {
      type: "string",
      name: "phone",
      label: "Phone",
      required: false,
    },
    {
      type: "string",
      name: "phoneUrl",
      label: "Phone URL",
      required: false,
    },
    {
      type: "string",
      name: "whatsappUrl",
      label: "WhatsApp URL",
      required: false,
    },
    {
      type: "string",
      name: "email",
      label: "Email",
      required: false,
    },
    {
      type: "string",
      name: "address",
      label: "Address",
      required: false,
    },
    {
      type: "string",
      name: "schedule",
      label: "Schedule",
      required: false,
    },
    {
      type: "string",
      name: "instagramUrl",
      label: "Instagram URL",
      required: false,
    },
  ],
};
