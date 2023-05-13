
import Header from '<poolpub>/components/Header/Header'
import LogInBox from '<poolpub>/components/LogInBox/LogInBox'

import Head from 'next/head'

// for retrieving data and showcasing them on the profile
//       <h1>{localStorage.getItem("name")}</h1>
//       <h1>{localStorage.getItem("email")}</h1>

export default function LogIn() {
  return (
    <>
      <Head>
        <title>Pool Pub - LogIn</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LogInBox/>
    </>
  )
}
