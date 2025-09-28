import React from 'react'

import HeroSection from '../../componants/Home/HeroSection/HeroSection'
import BenefitsSection from "../../componants/Home/BenefitsSection/BenefitsSection"
import Categories from '../../componants/Home/CategoriesSection/Categories'
import BestsellerSection from '../../componants/Home/BestsellerSection/BestsellerSection'
import InFocusSection from '../../componants/Home/InFocusSection/InFocusSection'
import OfferSection from '../../componants/Home/OffersSection/OfferSection'
import FlashSale from '../../componants/Home/FlashSale/FlashSale'
import AdSection from '../../componants/Home/AdSection/AdSection'
import Prands from '../../componants/Home/PrandsSection/Prands'



const HomePage = () => {

  return (
    <div className=' App'>
      <HeroSection/>
      <BenefitsSection/>
      <Categories/>
      <BestsellerSection/>
      <InFocusSection/>
      <OfferSection/>
      < AdSection />
      < Prands/>
    </div>
  )
}

export default HomePage
