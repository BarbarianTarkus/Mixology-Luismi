import React from 'react';
import { useTina } from "tinacms/dist/react";
import Hero from './Hero';
import Services from './Services';
import CocktailCard from './CocktailCard';
import SectionHeader from './SectionHeader';
import styles from './Home.module.css';

interface Props {
  tinaProps: {
    data: any;
    query: string;
    variables: object;
  };
  contactEntry: any;
  services: any[];
  cocktails: any[];
}

export default function Home({ tinaProps, contactEntry, services, cocktails }: Props) {
  const { data } = useTina({
    query: tinaProps.query,
    variables: tinaProps.variables,
    data: tinaProps.data,
  });

  const homeData = data.home;

  const resolveImage = (image: string | undefined) => {
    if (!image) return undefined;
    if (image.startsWith('../../')) {
      return image.replace('../../', '/src/');
    }
    return image;
  }

  return (
    <>
      <Hero
        title={homeData.heroTitle}
        eyebrow={homeData.heroEyebrow}
        description={homeData.heroDescription}
        ctaText="Contactar por WhatsApp"
        ctaHref={contactEntry.data.whatsappUrl}
        imageUrl={resolveImage(homeData.heroImage)}
        data={homeData}
      />

      <SectionHeader id="services-heading" title="Nuestros Servicios" />

      <section id="servicios" aria-label="Servicios">
        <Services services={services} />
      </section>

      <SectionHeader id="cocktails-heading" title="Top 3 Cócteles" />

      <section
          id="cocteles"
          className={styles.cocktailsGrid}
          aria-label="Top cocktails"
      >
          {cocktails.map((c: any) => {
              const imageSrc = typeof c.data.image === 'object' && c.data.image !== null ? c.data.image.src : c.data.image;
              return (
              <CocktailCard
                  key={c.id}
                  id={c.id}
                  title={c.data.title}
                  desc={c.data.desc}
                  image={imageSrc || ""}
                  alt={c.data.alt}
                  whatsappUrl={contactEntry.data.whatsappUrl}
                  slug={c.id.replace(/\.[^/.]+$/, "")}
              />
          )})}
      </section>
    </>
  );
}
