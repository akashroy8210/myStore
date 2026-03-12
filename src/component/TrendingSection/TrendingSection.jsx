import React from 'react'
import {sarees,boysShoes,girlsShoes,tops,kurtis,jeans,shirts,phones, earbuds} from "../../Data/Product.jsx"
import ProductCard from '../ProductCard/ProductCard.jsx'
function TrendingSection() {
    const categeries=[
        ...sarees.slice(2,3),
        ...sarees.slice(7,8),
        ...shirts.slice(7,8),
        ...kurtis.slice(7,8)
    ]
  return (
    <div className='flex flex-col gap-10 p-5'>
      <div>
        <h1 className='text-3xl font-semibold mb-4 border-b-2 border-blue-500 inline-block pb-2 text-gray-700'>Trending Product</h1>
      </div>
      <div>
        <div className='grid grid-cols-4 gap-x-6 gap-y-10 justify-center items-center'>
          {categeries.map((cat,index)=>(
            <ProductCard 
              key={index}
              name={cat.title}
              image={cat.image}
              price={cat.price}
              discountPrice={cat.discountPrice}
              discount={cat.discount}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingSection
