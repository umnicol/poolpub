import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './NewsletterForm.module.css'

interface NewsletterProps {
  onSubmit: (email: string) => void;
}

const Newsletter = ({ onSubmit }: NewsletterProps) => {
  const [email, setEmail] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
      <div className={styles.NewsletterContainer}>
      <form className={styles.NewsletterForm} onSubmit={handleSubmit}>
             <h3 className={styles.Newsletter_h3}>SIGN UP FOR NEWSLETTER</h3>  
             <label className={styles.NewsletterLabel}>
             Enter your email and be the first one to know about all our events and get special prices!
                  <input className={styles.NewsletterInput} type="email" value={email} placeholder={"Your email"}onChange={handleChange} />
              </label>
              <button className={styles.NewsletterButton} type="submit">SUBSCRIBE</button>
          </form>
          </div>
  );
};

export default Newsletter;