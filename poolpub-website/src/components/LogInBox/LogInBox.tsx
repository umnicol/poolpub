import React from 'react';
import GoogleLogInButton from '../GoogleButton/GoogleButton';
import styles from './LogInBox.module.css';

interface LogInBoxProps {
}

export default function LogInBox ({

}:LogInBoxProps) {

return (
    <div className={styles.LogInContainer}>
    <div className={styles.LogIn}>
    <h1 className={styles.LogIn_h1}>log in for online bookings</h1>
    <p className={styles.LogIn_p}> Please choose one of the options to log in to our booking system. Afterwards you can manage, add, edit or delete your bookings.</p>
    <GoogleLogInButton/>
    

    </div>
    </div>
);
}