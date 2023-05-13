import React from 'react';
import styles from './GoogleButton.module.css';
import { signInWithGoogle } from '<poolpub>/firebase'

type GoogleButtonProps = {
 onClick?: () => void;
  label?: string;
};

function GoogleLogInButton({ 
  onClick,
  label,
 }: GoogleButtonProps) 
    {
  return (
    <div className={styles.GoogleContainer}>
    <button className={styles.GoogleLogInButton} onClick={signInWithGoogle}>
    LOG IN
    </button></div>
  );
}

export default GoogleLogInButton;