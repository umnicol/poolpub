import React from 'react';
import styles from './PopUp.module.css'

interface PopupProps {
  onClose: () => void;
}

const Popup = ({ onClose }: PopupProps) => {
  return (
    <div className={styles.PopUpContainer}>
      <h2 className={styles.PopUpHeader}>Thank you for subscribing!</h2>
      <p className={styles.PopUpParagraph}>You have successfully subscribed to our newsletter.</p>
      <button className={styles.PopUpButton} onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
