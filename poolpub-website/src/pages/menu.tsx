import BookingForm from '<poolpub>/components/BookingForm/BookingForm'
import FoodMenu from '<poolpub>/components/FoodMenu/FoodMenu'
import Header from '<poolpub>/components/Header/Header'
import TextSection from '<poolpub>/components/TextSection/TextSection'
import Head from 'next/head'


export default function Menu() {
  return (
    <>
      <Head>
        <title>Pool Pub - Menu</title>
        <meta name="description" content="Welcome to Pool Pub, the ultimate destination for pool enthusiasts in Copenhagen. Enjoy a night of fun, games, and great drinks with friends and family. Our expertly-crafted cocktails and wide selection of beers are sure to keep you refreshed as you play your way to victory. Visit us today and experience the thrill of Pool Pub Name for yourself!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header image={'/activities-img.png'} title={'Menu'}/> 

      <TextSection headline={'Our food and beverages menu'} paragraph={'We are not just a bar with pool tables. We offer wide selection of beers, delicious burgers and other smaller snacks that will make your visit even more enjoyable. We change beers and cocktails based on the seasonal availability and have special offers and discount to make it the best value for your money. Come and taste it yourself! '}/>
     
      <FoodMenu imageFood={'/menu-img.jpg'} imageDrinks={'/drinks-img.jpg'}/>

    </>
  )
}
