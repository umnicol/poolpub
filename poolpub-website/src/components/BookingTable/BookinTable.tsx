import React, { useEffect, useState } from "react";
import { db, auth } from "<poolpub>/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Button from "../Button/Button";
import styles from "./BookingTable.module.css";


export default function BookingTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  interface Booking {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    activity: string;
    date: string;
    time: string;
    people: number;
    message: string;
  }

  useEffect(() => {
    const loadBookings = async () => {
      if (!auth.currentUser) return;

      try {
        const bookingsQuery = query(
          collection(db, "bookings"),
          where("userId", "==", auth.currentUser.uid)
        );

        const snapshot = await getDocs(bookingsQuery);
        const bookingData: Booking[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phoneNumber: doc.data().phoneNumber,
          activity: doc.data().activity,
          date: doc.data().date,
          time: doc.data().time,
          people: doc.data().people,
          message: doc.data().message,
        }));

        setBookings(bookingData);
      } catch (error) {
        console.error("Error loading bookings:", error);
      }
    };

    loadBookings();
  }, []);


  const buttonBooking = () => {
    window.location.href = '/booking';
  };
  
  return (
    <div>
      <h2>My Bookings</h2>
      <div className={styles.bookingButton}>
      <Button label={'+add new'} onClick={buttonBooking} />
        </div>
      <table className={styles.bookingTable}>
        <thead>
          <tr>
            <th>Reservation Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Activity</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
            <th>Special Requirements</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phoneNumber}</td>
              <td>{booking.activity}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.people}</td>
              <td>{booking.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
