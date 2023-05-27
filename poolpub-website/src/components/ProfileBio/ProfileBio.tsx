import React, { useEffect, useState } from 'react';
import { auth } from '<poolpub>/firebase';
import Button from '../Button/Button';

export default function ProfileBio() {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        setUser({ name: name ?? '', email: email ?? '' });
      }
    });

    return () => unsubscribe(); // Cleanup the auth state listener
  }, []);

  const buttonBooking = () => {
    window.location.href = '/booking';
  };

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>{user.email}</p>
      <Button label={'+add new'} onClick={buttonBooking}/>
    </div>
  );
}
