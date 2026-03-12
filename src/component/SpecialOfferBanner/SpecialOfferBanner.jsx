import React from 'react'
import specialOfferBanner from "../../assets/image/specialOfferBanner.png"
function SpecialOfferBanner() {
  return (
    <div className='h-100'>
      <a href="/product"><img className='h-100 w-full' src={specialOfferBanner} alt="Special offer Banner" /></a>
    </div>
  )
}

export default SpecialOfferBanner
