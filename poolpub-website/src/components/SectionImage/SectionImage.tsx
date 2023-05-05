import React from 'react';
import styles from './SectionImage.module.css'
import Image from 'next/image';

interface SectionImageProps {
  subtitle: string;
  text: string;
  image?: string;
}

export default function SectionImage({
  subtitle,
  text,
  image = '/poolpub-logo.png',
}: SectionImageProps) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionText}>
        <h3 className={styles.h3}>{subtitle}</h3>
        <p className={styles.p}>{text}</p>
      </div>

      <div className={styles.sectionImage}>
        <Image src={image} alt="image of menu" className={styles.image} height={200} width={200} />
      </div>
    </div>
  );
}
