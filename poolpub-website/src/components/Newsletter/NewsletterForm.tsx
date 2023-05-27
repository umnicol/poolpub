import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './NewsletterForm.module.css'
import { useDispatch } from 'react-redux';
import { subscribeToNewsletter } from '<poolpub>/redux/actions';
import Popup from '../PopUp/PopUp';

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);
  const dispatch = useDispatch();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form submission
    dispatch(subscribeToNewsletter());
    setSubscribed(true);
  };

  const handleClosePopup = () => {
    setSubscribed(false);
  };



  return (
      <div className={styles.NewsletterContainer}>
      <form className={styles.NewsletterForm} onSubmit={handleSubscribe}>
             <h3 className={styles.Newsletter_h3}>SIGN UP FOR NEWSLETTER</h3>  
             <label className={styles.NewsletterLabel}>
             Enter your email and be the first one to know about all our events and get special prices!
                  <input className={styles.NewsletterInput} type="email"  placeholder={"Your email"} />
              </label>
              <button className={styles.NewsletterButton} type="submit">Subscribe</button>

      {subscribed && <Popup onClose={handleClosePopup} />}
          </form>
          </div>
  );
};

export default Newsletter;