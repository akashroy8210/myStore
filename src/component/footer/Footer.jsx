import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-900 p-6 '>
      <div className='container mx-auto py-8 px-4 flex gap-4 flex-wrap justify-evenly '>

        {/* //company information */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-100'>COMMERCE APP</h1>
          <p className="text-gray-400">
            Your one-stop shop for quality products at the best price.
          </p>
          <div className='flex gap-4 text-white'>
            <ul className='flex gap-4 text-gray-400 '>
              <li><a href="#" className='text-2xl text-blue-500' ><ion-icon name="logo-facebook" /></a></li>
              <li><a href="#" className='text-2xl text-[#1D9BF0]' ><ion-icon name="logo-twitter" /></a></li>
              <li><a href="#" className='text-2xl text-pink-800' ><ion-icon name="logo-instagram" /></a></li>
              <li><a href="#" className='text-2xl text-[#0077B5]' ><ion-icon name="logo-linkedin" /></a></li>
            </ul>
          </div>
        </div>
        {/* quick link */}
        <div>
          <h1 className='text-gray-100'>Quick Links</h1>
          <div className=''>
            <ul>
              <li><a href="/" className='text-gray-400 hover:text-blue-500' >Home</a></li>
              <li><a href="/Products" className='text-gray-400 hover:text-blue-500' >Products</a></li>
              <li><a href="/Categories" className='text-gray-400 hover:text-blue-500' >Categories</a></li>
              <li><a href="/Cart" className='text-gray-400 hover:text-blue-500' >Cart</a></li>
              <li><a href="/Login" className='text-gray-400 hover:text-blue-500' >Login</a></li>
            </ul>
          </div>
        </div>

        {/* customer support */}
        <div>
          <h1 className='text-gray-100'>Customer Support</h1>
          <div>
            <ul>
              <li><a href="/FAQ" className='text-gray-400 hover:text-blue-500' >FAQ</a></li>
              <li><a href="/Return-Policy" className='text-gray-400 hover:text-blue-500' >Return Policy</a></li>
              <li><a href="/Shipping-Info" className='text-gray-400 hover:text-blue-500' >Shipping Info</a></li>
              <li><a href="/Order-Tracking" className='text-gray-400 hover:text-blue-500' >Order Tracking</a></li>
            </ul>
          </div>
        </div>

        {/* contact information */}
        <div>
          <h1 className='text-gray-100'>Contact Information</h1>
          <div className='text-gray-400'>
            <p>Email: support@shop.com</p>
            <p>City, State 12345</p>
            <p>Location: Guwahati, India</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-center">© 2026 ECOMMERCE APP. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

