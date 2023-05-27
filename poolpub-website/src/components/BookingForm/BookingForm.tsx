import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import styles from "./BookingForm.module.css";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "<poolpub>/firebase";
import { User } from "firebase/auth";

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
  editingBooking?: BookingFormData; // Optional prop to hold the booking being edited
}

export interface BookingFormData {
  id: string;
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

export default function BookingForm({ onSubmit, editingBooking }: BookingFormProps) {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    id: "",
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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

  useEffect(() => {
    if (editingBooking) {
      setFormData(editingBooking);
    }
  }, [editingBooking]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      if (editingBooking && editingBooking.id) {
        // Update existing booking in the database
        const { id, ...bookingData } = formData; // Exclude userId from the update data
        const bookingRef = doc(db, "bookings", editingBooking.id);
        await updateDoc(bookingRef, bookingData);
        console.log("Document updated with ID:", editingBooking.id);
      } else {
        // Save new booking to Firebase
        const docRef = await addDoc(collection(db, "bookings"), formData);
        console.log("Document written with ID:", docRef.id);
      }
  
      onSubmit(formData);
      window.location.href = "/profile";
  
    } catch (error) {
      console.error("Error adding/updating document:", error);
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
