import React from 'react';
import styles from './FoodMenu.module.css';
import Image from 'next/image';


interface FoodMenuProps {
  imageFood: string;
  imageDrinks: string;
}

export default function FoodMenu({
  imageFood,
  imageDrinks,
}: FoodMenuProps) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Image src={imageFood} alt="Food Menu" height={400} width={600} />
        <div className={styles.overlay}>FOOD MENU</div>
      </div>
      <div className={styles.menu}>
        <Image src={imageDrinks} alt="Drinks Menu" height={400} width={600} />
        <div className={styles.overlay}>DRINKS MENU</div>
      </div>
    </div>
  );
}
