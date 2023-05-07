import React from 'react';
import styles from './TextSection.module.css';

interface TextSectionProps {
    headline: string,
    paragraph: string
} 

export default function TextSection ({
    headline, paragraph
}: TextSectionProps) {
    return (
        <div className={styles.container}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    )
}