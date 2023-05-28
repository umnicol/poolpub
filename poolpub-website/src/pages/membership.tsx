import Header from '<poolpub>/components/Header/Header'
import MembershipCards from '<poolpub>/components/MembershipCards/MembershipCards'
import TextSection from '<poolpub>/components/TextSection/TextSection'
import Head from 'next/head'


export default function Membership() {
  return (
    <>
      <Head>
        <title>Pool Pub - Membership</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header image={'/activities-img.png'} title={'Membership'}/>

      <TextSection headline={'Become a member of pool-pub family'} paragraph={'Get a POOL-PUB membership card and become member for life! Every month you will receive around 2-4 messages with special offers or fun events. Some of the offers even cheaper beer or lower price for some of our activities. What is there to think about? You can see for yourself and compare the advantages and disadvantages.'}/>
      <MembershipCards/>
    </>
  )
}
