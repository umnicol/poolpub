import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from './ContactForm.module.css'

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}


  export default function ContactForm ({
    name,
    email,
    message
  }: ContactFormProps) {

  return (
          <form className={styles.ContactForm}>
              <label className={styles.ContactLabel} htmlFor="name">NAME:</label>
              <input className={styles.ContactInput}
                  type="text" />

              <label className={styles.ContactLabel} htmlFor="email">EMAIL:</label>
              <input className={styles.ContactInput}
                  type="email" />

              <label className={styles.ContactLabel} htmlFor="message">MESSAGE:</label>
              <textarea className={styles.ContactText}/>

              <button className={styles.ContactButton} type="submit">SUBMIT</button>
          </form>
      
  )
};


