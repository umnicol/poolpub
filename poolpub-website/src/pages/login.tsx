import FoodMenu from '<poolpub>/components/FoodMenu/FoodMenu'
import Header from '<poolpub>/components/Header/Header'
import Section from '<poolpub>/components/Section/Section'
import TextSection from '<poolpub>/components/TextSection/TextSection'
import { signInWithGoogle } from '<poolpub>/firebase'
import Head from 'next/head'

// for retrieving data and showcasing them on the profile
//       <h1>{localStorage.getItem("name")}</h1>
//       <h1>{localStorage.getItem("email")}</h1>

export default function Profile() {
  return (
    <>
      <Head>
        <title>Pool Pub - Menu</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>For online booking you have to log in</h1>
      <button  className="login-with-google-btn"  onClick={signInWithGoogle}>LOG IN</button>

    

    </>
  )
}
