import React from 'react';
import type { AppProps } from 'next/app';
import '<poolpub>/styles/globals.css';
import NavBar from '<poolpub>/components/Navbar/NavBar';
import Footer from '<poolpub>/components/Footer/Footer';
import { Provider } from 'react-redux';
import store from '<poolpub>/redux/store';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
      <Footer openingHours={{    
          Monday:"15.00-23.00",
          Tuesday: "15.00-24.00",
          Wednesday: "15.00-24.00",
          Thursday: "15.00-01.00",
          Friday: "13.00-03.00",
          Saturday: "13.00-03.00",
          Sunday: "Closed"}} 
          
          address1={'Rentemestervej 67'} 
          address2={'2400 København NV'} 
          email={'poolpub@poolpub.dk'} 
          phoneNumber={'+45 28 89 67 13'} /> 
          </Provider>
    </>
  );
}