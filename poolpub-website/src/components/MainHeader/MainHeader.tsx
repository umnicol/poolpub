import react from 'react';
import styles from './MainHeader.module.css'
import Image from 'next/image';

interface MainHeaderProps {
    image?: string;
    logo?: string;
}

export default function MainHeader ({
    image = '/mainheader-img.png',
    logo = '/poolpub-logo.png'
}: MainHeaderProps) {
    return(
            <header className={styles.header} style={{ backgroundImage: `url(${image})` }}>
              <div className={styles.logoContainer}>
                <Image src={logo} alt="Logo" className={styles.logo} height={50} width={1000} />
              </div>

              <div className={styles.scrollDown}>
                 <span className={styles.arrow}></span>
              </div>
            </header>
    )
}