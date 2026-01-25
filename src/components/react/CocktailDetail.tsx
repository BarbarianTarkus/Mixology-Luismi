import React from 'react';
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import styles from './CocktailDetail.module.css';

interface Props {
  tinaProps: {
    data: any;
    query: string;
    variables: object;
  };
  contactEntry: any;
}

export default function CocktailDetail({ tinaProps, contactEntry }: Props) {
  const { data } = useTina({
    query: tinaProps.query,
    variables: tinaProps.variables,
    data: tinaProps.data,
  });

  const cocktail = data.cocktails;

  const resolveImage = (image: string | undefined) => {
    if (!image) return undefined;
    // Handle relative paths from Tina
    if (image.startsWith('../../')) {
      return image.replace('../../', '/src/');
    }
    return image;
  }

  const imageUrl = resolveImage(cocktail.image);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer} data-tina-field={tinaField(cocktail, "image")}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={cocktail.alt || cocktail.title} 
              className={styles.image}
            />
          )}
        </div>
        <div className={styles.content}>
          <h1 className={styles.title} data-tina-field={tinaField(cocktail, "title")}>{cocktail.title}</h1>
          <p className={styles.desc} data-tina-field={tinaField(cocktail, "desc")}>{cocktail.desc}</p>
          
          <div className={styles.recipeContent}>
            <h2>Receta y Preparación</h2>
            <div data-tina-field={tinaField(cocktail, "body")}>
              <TinaMarkdown content={cocktail.body} />
            </div>
          </div>

          <div className={styles.actions}>
            <a href={contactEntry.data.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Reservar para mi evento
            </a>
            <a href="/cocteles" className={styles.btnOutline}>
              Volver a la carta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
