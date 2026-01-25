import React from 'react';
import styles from './ServiceCard.module.css';

interface Props {
  icon?: string;
  title?: string;
  description?: string;
}

export default function ServiceCard({
  icon = "celebration",
  title = "Servicio",
  description = "Descripción breve del servicio.",
}: Props) {
  const id = String(title)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return (
    <article className={styles.serviceCard} role="article" aria-labelledby={`service-${id}`}>
      <div className={styles.serviceIconContainer} aria-hidden="true">
        <span className={`material-symbols-outlined ${styles.serviceIcon}`}>{icon}</span>
      </div>

      <div className={styles.serviceContent}>
        <h3 id={`service-${id}`} className={styles.serviceTitle}>
          {title}
        </h3>
        <p className={styles.serviceDescription}>
          {description}
        </p>
      </div>
    </article>
  );
}
