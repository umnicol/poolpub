import React, { useEffect } from 'react';
import styles from './ActivityGrid.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import { auth } from '<poolpub>/firebase';



interface Activity {
  image: string;
  text: string;
}

interface ActivityGridProps {
  activities: Activity[];
}

export default function ActivityGrid({ activities }: ActivityGridProps) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleBookNowClick = () => {
    if (isLoggedIn) {
      router.push('/profile');
    } else {
      router.push('/login');
    }
  };

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
        <Button label={'Book Now'} onClick={handleBookNowClick}/>
      </div>
    </div>
  );
}