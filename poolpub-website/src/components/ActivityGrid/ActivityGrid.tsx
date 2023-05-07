import React from 'react';
import styles from './ActivityGrid.module.css';
import Image from 'next/image';
import Button from '../Button/Button';

interface Activity {
  image: string;
  text: string;
}

interface ActivityGridProps {
  activities: Activity[];
}

export default function ActivityGrid({ activities }: ActivityGridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {activities.map((activity, index) => (
          <div className={styles.gridItem} key={index}>
            <Image src={activity.image} alt={activity.text} height={400} width={600}/>
            <p>{activity.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button label={'Book Now'}/>
      </div>
    </div>
  );
}