import React, { useEffect, useState } from "react";
import { db, auth } from "<poolpub>/firebase";
import { collection, query, where, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Button from "../Button/Button";
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import styles from "./BookingTable.module.css";
import BookingForm, { BookingFormData } from "../BookingForm/BookingForm";

export default function BookingTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [editingBooking, setEditingBooking] = useState<BookingFormData | null>(null);

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

  const editBooking = (booking: Booking) => {
    setEditingBooking({
      id: booking.id,
      userId: auth.currentUser?.uid || "",
      name: booking.name,
      email: booking.email,
      phoneNumber: booking.phoneNumber,
      activity: booking.activity,
      date: booking.date,
      time: booking.time,
      people: booking.people,
      message: booking.message,
    });
  };

  const onSubmit = async (data: BookingFormData) => {
    if (selectedBooking) {
      try {
        // Update existing booking in the database
        const { id, ...bookingData } = data; // Exclude userId from the update data
        const bookingRef = doc(db, "bookings", selectedBooking.id);
        await updateDoc(bookingRef, bookingData);
        console.log("Document updated with ID:", selectedBooking.id);
      } catch (error) {
        console.error("Error updating booking:", error);
      }
    }
  
    setEditingBooking(null); // Close the editing form
    window.location.reload(); // Reload the page after updating the booking
  };
  
  
  
  
    /* add more buton */
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

      {editingBooking ? (
        <BookingForm onSubmit={onSubmit} editingBooking={editingBooking} />
      ) : (
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
              <th>Edit</th>
              <th>Delete</th>
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
                <td className={styles.editIcon}>
                  <RiEdit2Line onClick={() => editBooking(booking)} />
                </td>
                <td className={styles.deleteIcon}>
                  <RiDeleteBinLine onClick={() => deleteBooking(booking.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

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
