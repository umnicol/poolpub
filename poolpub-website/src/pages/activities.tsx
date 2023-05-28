import ActivityGrid from '<poolpub>/components/ActivityGrid/ActivityGrid'
import Header from '<poolpub>/components/Header/Header'
import TextSection from '<poolpub>/components/TextSection/TextSection'
import Head from 'next/head'


export default function Activities() {
  return (
    <>
      <Head>
        <title>Pool Pub - Activities</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header image={'/activities-img.png'} title={'Activities & Events'}/>

      <TextSection headline={'Pick from our variety of activities'} paragraph={'We have lots of activities at pool-pub copenhagen! We have 13 pool tables, 1 billard tables, 1 ping pong table, 1 table football, 2 shuffleboard tables, golf, hunting simulator, arcade machines and a huge bar area. We have a venue where there is space for you to throw your own party! You can always contact us with your ideas and we will do everything we can to help.'}/>
   
      <ActivityGrid activities={[
         {
          image: '/poola-img.png',
          text: 'Pool',
        },
        {
          image: '/darts-img.png',
          text: 'Darts',
        },
        {
          image: '/tabletennis-img.png',
          text: 'Table Tennis',
        },
        {
          image: '/table-football-img.png',
          text: 'Table Football',
        },
        {
          image: '/shuffle-board-img.png',
          text: 'Shuffle Board',
        },
        {
          image: '/arcade-games-img.png',
          text: 'Arcade Games',
        },
        {
          image: '/somblock-img.png',
          text: 'Sømblock',
        },
        {
          image: '/subsoccer-img.png',
          text: 'Subsoccer',
        },
        {
          image: '/golf-simulator-img.png',
          text: 'Golf Simulator',
        }
      ]}/>

      <TextSection headline={'Or pick an Event!'} paragraph={'None of our activities sound good? Are you looking for a fun competition with your friends or a place for your next party? Then we have something for you. All you need to do is book your event through booking form and we will handle the rest! '}/>
      
      <ActivityGrid activities={[
         {
          image: '/poola-img.png',
          text: 'Five-Match',
        },
        {
          image: '/darts-img.png',
          text: 'Darts',
        },
        {
          image: '/tabletennis-img.png',
          text: 'Table Tennis',
        },
      ]}/>
      

      
    </>
  )
}
