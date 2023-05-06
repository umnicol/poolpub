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
   
      <form className={styles.NewsletterForm} onSubmit={handleSubmit}>
             <h3 className={styles.Newsletter_h3}>SUBSCRIBE TO OUR NEWSLETTER</h3>  
             <label className={styles.NewsletterLabel}>
                  Email:
                  <input className={styles.NewsletterInput} type="email" value={email} onChange={handleChange} />
              </label>
              <button className={styles.NewsletterButton} type="submit">Subscribe</button>
          </form>
  );
};

export default Newsletter;