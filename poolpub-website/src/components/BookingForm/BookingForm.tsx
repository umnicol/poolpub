import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import styles from "./BookingForm.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "<poolpub>/firebase";
import { User } from "firebase/auth";

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
}

export interface BookingFormData {
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
  activity: string;
  date: string;
  time: string;
  people: number;
  message: string;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  // State to hold the current user
  const [user, setUser] = useState<User | null>(null);

   // State to hold the form data
  const [formData, setFormData] = useState<BookingFormData>({
    userId: "",
    name: "",
    email: "",
    phoneNumber: "",
    activity: "POOL",
    date: "",
    time: "",
    people: 1,
    message: "",
  });

  // useEffect to set the current user when it changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect to update the form data when the user changes
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        userId: user.uid,
        name: user.displayName ?? "",
        email: user.email ?? "",
      }));
    }
  }, [user]);

    // Event handler for input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Event handler for form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Save form data to Firebase
      const docRef = await addDoc(collection(db, "bookings"), formData);
      console.log("Document written with ID:", docRef.id);

      // Call the onSubmit prop with the form data
      onSubmit(formData);

      // Reset the form after successful submission
      setFormData((prevData) => ({
        ...prevData,
        name: "",
        email: "",
        phoneNumber: "",
        activity: "POOL",
        date: "",
        time: "",
        people: 1,
        message: "",
      }));
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };
  

  return (
    <>
      <h1 className={styles.BookingHeading}>Booking form</h1>
      <p className={styles.BookingParagraph}></p>
      <div className={styles.BookingContainer}>
        <form className={styles.BookingForm} onSubmit={handleSubmit}>
          <label className={styles.BookingLabel}>Reservation Name</label>
          <input
            className={styles.BookingInput}
            type="text"
            name="name"
            value={formData.name}
            placeholder="e.g. Anna Jones"
            onChange={handleInputChange}
            required
          />

          <label className={styles.BookingLabel}>Reservation Email</label>
          <input
            className={styles.BookingInput}
            type="email"
            name="email"
            value={formData.email}
            placeholder="e.g. annajones@gmail.com"
            onChange={handleInputChange}
            required
          />

          <label className={styles.BookingLabel}>Phone Number</label>
          <input
            className={styles.BookingInput}
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="e.g. +45 12 34 56 78"
            onChange={handleInputChange}
            required
          />

          <label className={styles.BookingLabel}>Choose Activity</label>
          <select
           className={styles.BookingSelect}
           name="activity"
           value={formData.activity}
           onChange={handleInputChange}
         >
           <option value="POOL">POOL</option>
           <option value="DARTS">DARTS</option>
           <option value="TABLE TENNIS">TABLE TENNIS</option>
           <option value="TABLE FOOTBALL">TABLE FOOTBALL</option>
           <option value="SHUFFLEBOARD">SHUFFLEBOARD</option>
           <option value="GOLF SIMULATOR">GOLF SIMULATOR</option>
           <option value="HUNTING SIMULATOR">HUNTING SIMULATOR</option>
           <option value="BEER PONG">BEER PONG</option>
         </select>

         <label className={styles.BookingLabel}>Choose Date</label>
         <input
           className={styles.BookingInput}
           type="date"
           name="date"
           value={formData.date}
           onChange={handleInputChange}
           required
         />

         <label className={styles.BookingLabel}>Choose Starting Time</label>
         <input
           className={styles.BookingInput}
           type="time"
           name="time"
           value={formData.time}
           onChange={handleInputChange}
           required
         />

         <label className={styles.BookingLabel}>Select number of people</label>
         <input
           className={styles.BookingInput}
           type="number"
           name="people"
           min="1"
           max="15"
           value={formData.people}
           onChange={handleInputChange}
           required
         />

         <label className={styles.BookingLabel}>Special Requirements</label>
         <textarea
           className={styles.BookingText}
           name="message"
           value={formData.message}
           placeholder="e.g. 2 boxes of beer"
           onChange={handleInputChange}
         />

         <button className={styles.BookingButton} type="submit">
           SAVE
         </button>
       </form>
     </div>
   </>
 );
}
