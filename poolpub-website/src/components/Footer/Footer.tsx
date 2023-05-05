import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css';

interface FooterProps {
  openingHours: { [key: string]: string };
  address1: string;
  address2: string;
  email: string;
  phoneNumber: string;
}

export default function Footer ({
  openingHours,
  address1,
  address2,
  email,
  phoneNumber,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className='column'>
        <h4 className={styles.footerTitle}>Opening Hours</h4>
        <ul className={styles.ul}>
            {Object.entries(openingHours).map(([day,hours]) => (
            <li className={styles.li} key={day}>
                {day}: {hours}
            </li>
            ))}
        </ul>
      </div>

      <div className='column'>
        <h4 className={styles.footerTitle2}>Follow Us on Social Media</h4>  
        <ul className={styles.socialIcons}>
            <li className={styles.socialIcon}>
                <a href="https://www.facebook.com/poolpubcopenhagen/">
                <FaFacebook />
                </a>
            </li>
            <li className={styles.socialIcon}>
                <a href="https://www.instagram.com/poolpub_cph/">
                <FaInstagram />
                </a>
            </li>
        </ul>
      </div>

      <div className='column'>
        <h4 className={styles.footerTitle}>Find Us</h4>
        <p className={styles.p}>{address1}</p>
        <p className={styles.p}>{address2}</p>

        <h4 className={styles.footerTitle}>Send us An Email</h4>
        <p className={styles.p}>{email}</p>

        <h4 className={styles.footerTitle}>Call us</h4>
        <p className={styles.p}>{phoneNumber}</p>
      </div>
    </footer>
  );
}