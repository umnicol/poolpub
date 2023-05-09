import ContactForm from '<poolpub>/components/ContactForm/ContactForm'
import Header from '<poolpub>/components/Header/Header'
import HeaderSection from '<poolpub>/components/HeaderSection/HeaderSection'
import MapImage from '<poolpub>/components/Map/Map'
import SectionImage from '<poolpub>/components/SectionImage/SectionImage'
import TextSection from '<poolpub>/components/TextSection/TextSection'
import Head from 'next/head'


export default function Contact() {
  return (
    <>
      <Head>
        <title>Pool Pub - Contact</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header image={'/activities-img.png'} title={'Contact'}/>
      <TextSection headline={'ANYTHING ELSE YOU WOULD LIKE TO KNOW?'} paragraph={'Nobody is perfect, nor are we. Therefore, if there is anything we have missed, do not hesitate to write tos us. We will get back to you as soon as possible,promise!'}/>
      <ContactForm/>
      <MapImage/>
      
    </>
  )
}
