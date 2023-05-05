import React from 'react';
import styles from './Section.module.css'

interface SectionProps {
    title: string;
    subtitle: string;
    text: string;
}

export default function Section ({
    title, subtitle, text
}: SectionProps) {
    return (
     <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.h2}>{title}</h2>
        </div>

        <div className={styles.sectionText}>
          <h4 className={styles.h4}>{subtitle}</h4>
          <p className={styles.p}>{text}</p>
        </div>
     </div>
    );
}