import React from 'react';
import styles from './SectionImage.module.css'
import Image from 'next/image';
import Button from '../Button/Button';

interface SectionImageProps {
  subtitle: string;
  text: string;
  image?: string;
}

export default function SectionImage({
  subtitle,
  text,
  image = '/food-img.png',
}: SectionImageProps) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionText}>
        <h3 className={styles.h3}>{subtitle}</h3>
        <p className={styles.p}>{text}</p>
        <Button label={'See Menu'}/>
      </div>

      <div className={styles.sectionImage}>
        <Image src={image} alt="image of menu" className={styles.image} height={450} width={500} />
      </div>
    </div>
  );
}
