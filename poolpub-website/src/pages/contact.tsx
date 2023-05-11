import ContactForm from '<poolpub>/components/ContactForm/ContactForm'
import Header from '<poolpub>/components/Header/Header'
import HeaderSection from '<poolpub>/components/HeaderSection/HeaderSection'
import MapImage from '<poolpub>/components/Map/Map'
import SectionImage from '<poolpub>/components/SectionImage/SectionImage'
import TextSection from '<poolpub>/components/TextSection/TextSection'
import Head from 'next/head'

export default function Contact() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <>
      <Head>
        <title>Pool Pub - Contact</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header image={'/activities-img.png'} title={'Contact'}/>
      <TextSection headline={'Anything you would like to know?'} paragraph={'Nobody is perfect, nor are we. Therefore, if there is anything we have missed, do not hesitate to write to us. We will get back to you as soon as possible, promise!'}/>
<<<<<<< Updated upstream
      <ContactForm name={'NAME'} email={'EMAIL'} message={'MESSAGE'}/>
=======
      <ContactForm name={''} email={''} message={''} address1={''} address2={''} phoneNumber={''}/>
>>>>>>> Stashed changes
      <MapImage googleMapsApiKey={googleMapsApiKey}/>
    </>
  )
}
