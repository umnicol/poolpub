import React, { useEffect, useState } from "react";
import { db, auth } from "<poolpub>/firebase";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import Button from "../Button/Button";
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri'; // Import the delete icon component from React Icons
import styles from "./BookingTable.module.css";

export default function BookingTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const deleteBooking = async (bookingId: string) => {
    setSelectedBooking(bookings.find((booking) => booking.id === bookingId) || null);
    setShowConfirmation(true);
  };

  const confirmDeleteBooking = async () => {
    if (selectedBooking) {
      try {
        await deleteDoc(doc(db, "bookings", selectedBooking.id));
        setBookings(bookings.filter((booking) => booking.id !== selectedBooking.id));
        console.log("Booking deleted successfully!");
      } catch (error) {
        console.error("Error deleting booking:", error);
      }
    }
    setShowConfirmation(false);
    setSelectedBooking(null);
  };

  const cancelDeleteBooking = () => {
    setShowConfirmation(false);
    setSelectedBooking(null);
  };

  const buttonBooking = () => {
    window.location.href = "/booking";
  };

  return (
    <div>
      <div className={styles.headingContainer}>
        <div className={styles.title}>
          <h2>My Bookings</h2>
        </div>
        <div className={styles.bookingButton}>
          <Button label="+add new" onClick={buttonBooking} />
        </div>
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
            <th>Edit/Delete</th>
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
              <td className={styles.deleteIcon}>
                <RiDeleteBinLine onClick={() => deleteBooking(booking.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {showConfirmation && (
        <div className={styles.confirmationDialog}>
          <h3>Are you sure you want to delete your booking?</h3>
          <div>
            <button onClick={confirmDeleteBooking}>Yes</button>
            <button onClick={cancelDeleteBooking}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}
