import React from 'react'
function CategoryCard({name,image,bg}) {
  return (
    <div>
      <div className='w-40 rounded-lg bg-white border border-gray-300 shadow-md hover:shadow-xl group hover:border-blue-500 hover:transform hover:-translate-y-2 transition-all duration-200 cursor-pointer p-4 flex justify-center flex-col items-center'>
        <div className={` rounded-full flex justify-center items-center w-28 h-28  ${bg}`} >
        <img src={image} alt={name}  className='w-30 h-30 object-contain drop-shadow-lg  group-hover:transform group-hover:scale-110 transition-all duration-100' />
        </div>
        <h1 className='text-gray-800 font-bold text-lg py-2 text-center'>{name}</h1>
      </div>
    </div>
  )
}
export default CategoryCard
