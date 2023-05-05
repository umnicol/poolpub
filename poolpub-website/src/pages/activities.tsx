import Header from '<poolpub>/components/Header/Header'
import Head from 'next/head'


export default function Activities() {
  return (
    <>
      <Head>
        <title>Pool Pub - Activities</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header image={'/activities-img.png'} title={'Activities'}/>
    </>
  )
}