import React, { useEffect } from 'react';
import styles from './MainHeader.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import { auth } from '<poolpub>/firebase';

interface MainHeaderProps {
  image?: string;
  logo?: string;
}

export default function MainHeader({
  image = '/mainheader-img.png',
  logo = '/poolpub-logo.png',
}: MainHeaderProps) {
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
    <header className={styles.header} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" className={styles.logo} height={50} width={1000} />
      </div>

      <div className={styles.button_mainheader}>
        <Button label={'BOOK NOW'} onClick={handleBookNowClick} />
      </div>

      <div className={styles.scrollDown}>
        <span className={styles.arrow}></span>
      </div>
    </header>
  );
}
