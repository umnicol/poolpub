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
    Log in with Google
    </button></div>
  );
}

export default GoogleLogInButton;