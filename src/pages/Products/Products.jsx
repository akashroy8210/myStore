import React from 'react'
import { sarees, boysShoes, girlsShoes, tops, kurtis, jeans, shirts, phones, earbuds } from "../../Data/Product.jsx"
import ProductCard from '../../component/ProductCard/ProductCard'
function Products() {
  const categories = [
    ...sarees,
    ...boysShoes,
    ...girlsShoes,
    ...tops,
    ...kurtis,
    ...jeans,
    ...shirts,
    ...phones,
    ...earbuds
  ]
  return (
    <div className='container mx-auto py-10' >
      <div className='flex gap-10 flex-col'>
        <div className='flex gap-10 flex-col' >
          <div>
            <h1 className='text-2xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-2'>Saree</h1>

          </div>
          <div className='grid grid-cols-4 gap-10'>
            {sarees.map((cat, index) => (
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
        <div className='flex gap-10 flex-col' >
          <div>
            <h1 className='text-2xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-2'>Earbuds</h1>
          </div>
          <div className='grid grid-cols-4 gap-10'>
            {earbuds.map((cat, index) => (
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
        <div className='flex gap-10 flex-col' >
          <div>
            <h1 className='text-2xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-2'>Kurti</h1>

          </div>
          <div className='grid grid-cols-4 gap-10'>
            {kurtis.map((cat, index) => (
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
        <div className='flex gap-10 flex-col' >
          <div>
            <h1 className='text-2xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-2'>Phone</h1>

          </div>
          <div className='grid grid-cols-4 gap-10'>
            {phones.map((cat, index) => (
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

    </div>
  )
}

export default Products
