import BookingTable from '<poolpub>/components/BookingTable/BookingTable';
import Header from '<poolpub>/components/Header/Header';
import ProfileBio from '<poolpub>/components/ProfileBio/ProfileBio';
import { auth } from '<poolpub>/firebase';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe(); // Cleanup the auth state listener
  }, []);

  if (!isLoggedIn) {
    return <div className='loginFirst'>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Pool Pub - My Profile</title>
        <meta
          name="description"
          content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header image="/activities-img.png" title="My Profile" />
      <ProfileBio />
      <BookingTable/>
    </>
  );
}
