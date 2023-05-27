import Head from 'next/head'
import Image from 'next/image'
import styles from '<poolpub>/styles/Home.module.css'
import MainHeader from '<poolpub>/components/MainHeader/MainHeader'
import Header from '<poolpub>/components/Header/Header'
import HeaderSection from '<poolpub>/components/HeaderSection/HeaderSection'
import Section from '<poolpub>/components/Section/Section'
import SectionImage from '<poolpub>/components/SectionImage/SectionImage'
import Newsletter from '<poolpub>/components/Newsletter/NewsletterForm'
import Button from '<poolpub>/components/Button/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pool Pub - Home</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainHeader/>

      <Section title={'Our Story'} subtitle={'Get to know us'} text={'Founded in 1993, POOL-PUB is already here for nearly 30 years! We offer more than 15 types of beer, 13 pool tables and other activities such as shuffleboard, darts or tabletennis. We are located in the lively neighbourhood of Norrebro and are open everyday. So don not wait and come visit us!'}/>
      
  
    
      <HeaderSection image={'/pool-img.png'} 
              title={"Bored? We've got you!"} 
              subtitle="Come play pool or darts, book a five match with your friends or rent a party room"
              subtitle2="We have something for everyone!"/>

      <SectionImage subtitle={'Excellent food and drinks'} text={'Apart from our variety of activities, you can also enjoy our delicious burgers or try any of our 15 types of beer and cocktails. We have something for evveyrone- just come and try it for yourseelf.'}/>
      
      <HeaderSection image={'/mainheader-img.png'} 
              title={"Be part of our pool-pub family!"} 
              subtitle="Become a member for only 200KR"
              subtitle2="And get special offers and lower prices"/>

      <Newsletter/>
    </>

  
  )
}
