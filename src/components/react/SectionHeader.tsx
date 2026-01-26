import React from 'react';
import styles from './SectionHeader.module.css';

interface Props {
  id: string;
  title: string;
}

export default function SectionHeader({ id, title }: Props) {
  return (
    <header className={styles.sectionHeader} aria-labelledby={id}>
      <h2 id={id} className={styles.sectionTitle}>
        {title}
      </h2>
      <div className={styles.titleUnderline}></div>
    </header>
  );
}
