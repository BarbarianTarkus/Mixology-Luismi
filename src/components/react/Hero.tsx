import React from 'react';
import styles from './Hero.module.css';
import { tinaField } from 'tinacms/dist/react';

export interface Props {
  title?: string;
  eyebrow?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageUrl?: string;
  data?: any; // For tina
}

export default function Hero({
  title = "Coctelería Exclusiva en tu Evento",
  eyebrow = "Servicio Premium a Domicilio",
  description = "Elevamos la experiencia de tus celebraciones con mixología de autor y barras móviles de lujo.",
  ctaText = "Contactar por WhatsApp",
  ctaHref = "https://wa.me/1234567890",
  imageUrl,
  data,
}: Props) {
  
  return (
    <section className={styles.heroSection} style={imageUrl ? { '--hero-bg-url': `url('${imageUrl}')` } as React.CSSProperties : {}}>
      <div className={styles.heroContent}>
        {/* Text Column */}
        <div className={styles.heroText}>
          <span className={styles.heroEyebrow} data-tina-field={tinaField(data, "heroEyebrow")}>
            {eyebrow}
          </span>
    
          <h1 className={styles.heroTitle} data-tina-field={tinaField(data, "heroTitle")}>
            {title}
          </h1>
    
          <p className={styles.heroDescription} data-tina-field={tinaField(data, "heroDescription")}>
            {description}
          </p>
    
          <div className={styles.heroCtaContainer}>
            <a
              className={styles.heroCta}
              href={ctaHref}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={ctaText}
            >
              <span className={`material-symbols-outlined ${styles.ctaIcon}`}>chat</span>
              <span className={styles.ctaText}>{ctaText}</span>
            </a>
          </div>
        </div>
    
        {/* Image Column for md+ */}
        <div
          id="hero-image"
          className={styles.heroImageCol}
          data-tina-field={tinaField(data, "heroImage")}
          style={{ viewTransitionName: 'hero-image' } as React.CSSProperties}
        >
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title} 
              className={styles.heroImageFile}
            />
          )}
        </div>
      </div>
    </section>
  );
}
