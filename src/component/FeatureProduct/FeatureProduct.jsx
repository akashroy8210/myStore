import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import {sarees,boysShoes,girlsShoes,tops,kurtis,jeans,shirts,phones, earbuds} from "../../Data/Product.jsx"


function FeatureProduct() {
  const categeries = [
          ...sarees.slice(8,9),
          ...tops.slice(3,4),
          ...kurtis.slice(9,10),
          ...earbuds.slice(0,1)
      ]
  return (
    <div >
      <div className='flex flex-col gap-10 p-5'>
        <div>
        <h1 className='text-3xl font-semibold mb-4 border-b-2 border-blue-500 inline-block pb-2 text-gray-700'>New arrivals</h1>
      </div>
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

export default FeatureProduct
