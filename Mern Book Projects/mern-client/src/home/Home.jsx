import React from 'react'
import Banner from '../components/Banner';
import BestSellers from './BestSellers';
import FavBook from './FavBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellers/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home;