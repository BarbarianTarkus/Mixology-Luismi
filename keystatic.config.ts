import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: import.meta.env.NODE_ENV === 'production' 
    ? {
        kind: 'github',
        repo: { owner: 'REPLACEME_GITHUB_OWNER', name: 'REPLACEME_REPO_NAME' },
      }
    : {
        kind: 'local',
      },
  ui: {
    brand: {
      name: 'Mixology Luismi Panel',
    },
    navigation: {
      'Contenido Principal': ['cocktails', 'services'],
      'Configuración Global': ['home', 'contact'],
    },
  },
  collections: {
    cocktails: collection({
      label: 'Cócteles',
      slugField: 'title',
      path: 'src/content/cocktails/*',
      format: { contentField: 'recipe' },
      schema: {
        title: fields.slug({ name: { label: 'Nombre del Cóctel' } }),
        id: fields.text({ 
          label: 'ID / Orden', 
          description: 'Ej: 01, 02. Determina la posición en la lista.',
          validation: { length: { min: 2 } } 
        }),
        desc: fields.text({ label: 'Descripción corta', multiline: true }),
        image: fields.image({
          label: 'Imagen Principal',
          directory: 'src/assets/images/cocktails',
          publicPath: '../../assets/images/cocktails/',
          validation: { isRequired: true },
        }),
        alt: fields.text({ label: 'Texto alternativo (SEO)' }),
        recipe: fields.markdoc({
          label: 'Receta y Preparación',
          options: {
            image: {
              directory: 'src/assets/images/cocktails',
              publicPath: '../../assets/images/cocktails/',
            },
          },
        }),
      },
    }),
    services: collection({
      label: 'Servicios',
      slugField: 'title',
      path: 'src/content/services/*',
      schema: {
        title: fields.slug({ name: { label: 'Nombre del Servicio' } }),
        icon: fields.select({
          label: 'Icono Visual',
          options: [
            { label: 'Fiesta (celebration)', value: 'celebration' },
            { label: 'Corazón (favorite)', value: 'favorite' },
            { label: 'Escuela (school)', value: 'school' },
            { label: 'Maletín (work)', value: 'work' },
            { label: 'Copa (local_bar)', value: 'local_bar' },
            { label: 'Soporte (support)', value: 'support' },
            { label: 'Evento (event)', value: 'event' },
            { label: 'Grupo (groups)', value: 'groups' },
            { label: 'Restaurante (restaurant)', value: 'restaurant' },
          ],
          defaultValue: 'celebration',
        }),
        description: fields.text({ label: 'Descripción del Servicio', multiline: true }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: 'Página de Inicio',
      path: 'src/content/home/index',
      schema: {
        heroEyebrow: fields.text({ label: 'Cejilla superior' }),
        heroTitle: fields.text({ label: 'Título Principal' }),
        heroDescription: fields.text({ label: 'Descripción', multiline: true }),
        heroImage: fields.image({
          label: 'Imagen de Fondo (Hero)',
          directory: 'src/assets/images/home',
          publicPath: '../../assets/images/home/',
        }),
      },
    }),
    contact: singleton({
      label: 'Datos de Contacto',
      path: 'src/content/contact/index',
      schema: {
        phone: fields.text({ label: 'Teléfono visible' }),
        phoneUrl: fields.text({ label: 'Enlace tel: (Ej: tel:+34...)' }),
        whatsappUrl: fields.text({ label: 'URL WhatsApp' }),
        email: fields.text({ label: 'Email' }),
        address: fields.text({ label: 'Dirección', multiline: true }),
        schedule: fields.text({ label: 'Horario', multiline: true }),
        instagramUrl: fields.text({ label: 'URL Instagram' }),
      },
    }),
  },
});
