import React from 'react'

function ProductCard({name,image,price,discountPrice,discount}) {
  return (

      <div className='bg-white border border-gray-200 rounded-2xl shadow-md w-85  hover:transform hover:scale-102  hover:-translate-y-2 transistion-all duration-200'>
        {/* product image */}
        <div className="h-60 flex items-center bg-gray-100 rounded-t-2xl relative overflow-hidden">
          <p className="bg-blue-600 absolute top-0 left-0 px-3 py-2 rounded-full  text-white text-xs ">{discount}% Off</p>
          <img src={image} alt={name} className=' w-75 m-auto object-contain drop-shadow-2xl ' />
          <p className="absolute top-2 right-2 text-gray-400 bg-white  w-8 h-8 rounded-full text-lg flex items-center justify-center shadow-lg cursor-pointer hover:text-pink-500 transition-all duration-200 ">
          <ion-icon name="heart"></ion-icon>
          </p>
        </div>
        <div className='flex gap-2 flex-col  p-4 '>
          {/* product name */}
          <h2 className=' text-gray-700 font-bold text-[1.5rem] line-clamp-1'>{name}</h2>
          {/* product price */}
          <div className='flex font-bold gap-2 items-center'>
            <h1 className='text-blue-600 text-2xl'>₹{discountPrice}</h1>
            <p className='text-gray-500 line-through  text-sm'>₹{price}</p>
          </div>
          {/* add-btn */}
          <button className='bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg font-bold text-white cursor-pointer'>Add to Cart</button>
        </div>
      </div>


  )
}

export default ProductCard
