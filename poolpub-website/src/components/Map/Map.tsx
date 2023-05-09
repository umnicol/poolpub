import React from 'react';
import styles from './Map.module.css'
import Image from 'next/image';

interface MapProps {
  image?: string;
}

export default function MapImage({
  
  image = '/map-image.png',
}: MapProps) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionImage}>
        <Image src={image} alt="image of map" className={styles.MapImage} height={420} width={1500} />
      </div>
    </div>
  );
}