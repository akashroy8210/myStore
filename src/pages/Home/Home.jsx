import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import ProductCard from '../../component/ProductCard/ProductCard'
import Login from '../Login/Login'
import HeroBanner from '../../component/HeroBanner/HeroBanner'
import FeatureProduct from '../../component/FeatureProduct/FeatureProduct'
import CategorySection from '../../component/CategorySection/CategorySection'
import TrendingSection from '../../component/TrendingSection/TrendingSection'
import SpecialOfferBanner from '../../component/SpecialOfferBanner/SpecialOfferBanner'
import WhyChooseUs from "../../component/WhyChooseUs/WhyChooseUs"
import NewsSubscription from '../../component/NewsSubscription/NewsSubscription'

function Home() {
  return (
    <div className='w-full flex flex-col gap-10  bg-gray-50'>
      <div>
        <HeroBanner/>
      </div>
      <div>
        <CategorySection/>
      </div>
      <div className='container mx-auto'>
        <FeatureProduct/>
      </div>
      <div className='container mx-auto'>
        <TrendingSection/>
      </div>
      <div>
        <SpecialOfferBanner/>
      </div>
      <div>
        <WhyChooseUs/>
      </div>
      <div className=''>
        <NewsSubscription/>
      </div>
    </div>
  )
}

export default Home
