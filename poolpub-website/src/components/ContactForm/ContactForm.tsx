import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from './ContactForm.module.css'

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

 

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: "",
    email: "",
    message: "",
  });


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here we might send form data to the backend or do something else with it
  };

  return (
          <form className={styles.ContactForm} onSubmit={handleSubmit}>
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

export default ContactForm;
