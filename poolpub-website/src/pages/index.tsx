import Head from 'next/head'
import Image from 'next/image'
import styles from '<poolpub>/styles/Home.module.css'
import MainHeader from '<poolpub>/components/MainHeader/MainHeader'
import Header from '<poolpub>/components/Header/Header'
import HeaderSection from '<poolpub>/components/HeaderSection/HeaderSection'


export default function Home() {
  return (
    <>
      <Head>
        <title>Pool Pub - Home</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainHeader/>
      <HeaderSection image={'/activities-img.png'} 
              title={"Bored? We've got you!"} 
              subtitle="Come play pool or darts, book a five match with your friends or rent a party room"
              subtitle2="We have something for everyone!"/>
      
      <HeaderSection image={'/activities-img.png'} 
              title={"Be part of our pool-pub family!"} 
              subtitle="Become a member for only 200KR"
              subtitle2="And get special offers and lower prices"/>
    </>
  )
}
