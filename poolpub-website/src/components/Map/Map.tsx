import React from 'react';
import styles from './Map.module.css'
import Image from 'next/image';

interface MapProps {
  image?: string;
}

export default function MapImage({
  
  image = '/map-img.png',
}: MapProps) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionImage}>
        <Image src={image} alt="image of map" className={styles.MapImage} height={450} width={1700} />
      </div>
    </div>
  );
}