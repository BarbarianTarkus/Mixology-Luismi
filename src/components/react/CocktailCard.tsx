import React from 'react';
import styles from './CocktailCard.module.css';

interface Props {
  title: string;
  desc: string;
  image: string;
  alt?: string;
  showActions?: boolean;
  whatsappUrl?: string;
  slug?: string;
}

export default function CocktailCard({
  title,
  desc,
  image,
  alt,
  showActions = false,
  whatsappUrl = 'https://wa.me/1234567890',
  slug,
}: Props) {
  const displayAlt = alt || title;

  return (
    <article
      className={styles.cocktailCard}
      aria-labelledby={slug ? `cocktail-${slug}-title` : ''}
      style={
        slug
          ? ({
              viewTransitionName: `cocktail-card-${slug}`,
            } as React.CSSProperties)
          : {}
      }
    >
      <a href={slug ? `/cocteles/${slug}` : '#'} className={styles.cocktailImageLink}>
        <div
          className={styles.cocktailImageContainer}
          style={
            slug
              ? ({
                  viewTransitionName: `cocktail-image-${slug}`,
                } as React.CSSProperties)
              : {}
          }
        >
          {image && <img src={image} alt={displayAlt} className={styles.cocktailImageFile} />}
        </div>
      </a>

      <div className={styles.cocktailContent}>
        <div className={styles.cocktailHeader}>
          <h3 id={slug ? `cocktail-${slug}-title` : ''} className={styles.cocktailTitle}>
            {slug ? <a href={`/cocteles/${slug}`}>{title}</a> : title}
          </h3>
        </div>
        <p className={styles.cocktailDesc}>{desc}</p>

        {showActions && (
          <div className={styles.cocktailActions}>
            <a
              className={styles.btnPrimarySm}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contactar por ${title}`}
            >
              <span className={`material-symbols-outlined ${styles.btnIcon}`}>chat</span>
              Reservar
            </a>

            {slug && (
              <a className={styles.btnOutlineSm} href={`/cocteles/${slug}`}>
                <span className={`material-symbols-outlined ${styles.btnIcon}`}>info</span>
                Ver receta
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
