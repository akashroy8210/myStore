import React from 'react'
import logo from "../../assets/image/Logo.png"
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()

  return (
    <div className='w-full bg-white shadow-md sticky top-0 z-50'>
      <header  className='flex flex-col '>
        <div className='grid grid-cols-5 items-center p-2 container mx-auto'>
          <div className=''>
            {/* <img src={logo} alt="Eccomerce App" className='w-20' /> */}
            <button ></button>
            <a className='text-2xl text-gray-800 font-bold' href="/"><ion-icon  className="text-gray-700" name='shopping-bag-outline'></ion-icon> My Store</a>
        </div>
        <div className='text-center flex justify-center items-center relative  col-span-3'>
          <ion-icon className="absolute left-3 font-bold text-2xl" name="search-outline"></ion-icon>
            <input type="search" name="search-bar" id="search-bar" placeholder='Search Product' className='border-l border-y text-2md bg-gray-50 font-semibold text-lg  border-gray-300 grid col-span-3 w-full py-2 px-10 rounded-l-2xl hover:outline-none focus:outline-none hover:border-gray-500' />
            <ion-icon name="search-outline" id="search-bar" className='text-2xl  bg-blue-600 py-[0.62rem] text-white rounded-tr-2xl rounded-br-2xl border border-blue-600 px-4'></ion-icon>
        </div>
        <div className=' flex justify-end gap-4'> 
            <button className='cursor-pointer px-2 py-1 bg-blue-600 text-2xl text-white rounded-sm hover:bg-blue-700 '><ion-icon name="cart-outline"></ion-icon></button>
            <button onClick={() => navigate('/login')} className='cursor-pointer px-4 py-1 bg-blue-600 text-white rounded-full font-bold flex justify-center items-center gap-1 hover:bg-blue-700'><ion-icon name="person-outline"></ion-icon>Login</button>
        </div>
        </div>
        <div className='border-t border-gray-200'>
          <div className='flex justify-start items-center gap-5 p-4 container mx-auto '>
            <h1 className='text-lg font-semibold text-gray-700'>Categories:</h1>
          <div>
            
            <ul className='flex gap-5 flex-wrap '>
              <li><a className='font-semibold text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-1 ' href="/electronics">Electronics</a></li>
              <li><a className='font-semibold text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-1 ' href="/shoes">Shoes</a></li>
              <li><a className='font-semibold text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-1 ' href="/shirt">Shirt</a></li>
              <li><a className='font-semibold text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-1 ' href="/jeans">Jeans</a></li>
              <li><a className='font-semibold text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-1 ' href="/saree">Saree</a></li>
              <li><a className='font-semibold text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-1 ' href="/kurti">Kurti</a></li>
              <li><a className='font-semibold text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 py-1 ' href="/top">Top</a></li>
            </ul>
          </div>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
