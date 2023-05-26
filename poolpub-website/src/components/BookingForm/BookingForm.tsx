import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from './BookingForm.module.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

interface BookingFormProps {
  name?: string;
  email?: string;
  message?: string;
  date?:  number; // firebase.firestore.Timestamp v fatabaze mi ukazuje timestamp a dava dokopy date + time. tak asi to by sme mohli pouzit
  time?: number;
  people?: number;
  activity?: string;
  phoneNumber?: string;
}

  export default function BookingForm ({
    name,
    email,
    message,
    
  }: BookingFormProps) {

  return (
          <><div className={styles.BookingContainer}>
        <h1> Booking form</h1>
      <form className={styles.BookingForm}>

        <label className={styles.BookingLabel}>Reservation Name</label>
        <input className={styles.BookingInput}
          type="text" placeholder="e.g. Anna Jones" required />

        <label className={styles.BookingLabel}>Reservation Email</label>
        <input className={styles.BookingInput}
          type="email" placeholder="e.g. annajones@gmail.com" required/>

       <label className={styles.BookingLabel}>Phone Number</label>
        <input className={styles.BookingInput}
          type="text" placeholder="e.g. +45 12 34 56 78" required />

        <label className={styles.BookingLabel}>Choose Activity</label>
        <select className={styles.BookingSelect}>
            <option >POOL</option>
            <option >DARTS</option>
            <option >TABLE TENNIS</option>
            <option >TABLE FOOTBALL</option>
            <option >SHUFFLEBOARD</option>
            <option >GOLF SIMULATOR</option>
            <option >HUNTING SIMULATOR</option>
            <option >BEER PONG</option>
            </select>


        <label className={styles.BookingLabel}>Choose Date </label>
        <input className={styles.BookingInput} type="date" name="date" required/>

         <label className={styles.BookingLabel}>Choose Starting Time</label>
         <input className={styles.BookingInput}
            type="time" required  />

        <label className={styles.BookingLabel}>Select number of poeple</label>
        <input className={styles.BookingInput}
          type="number" min="1" max="15" required />

        <label className={styles.BookingLabel}>Special Requriments</label>
        <textarea className={styles.BookingText} placeholder="e.g. 2 boxes of beer"/>   

           <button className={styles.BookingButton} type="submit">SAVE</button>
      </form>
      </div>
      </>
  )
};
