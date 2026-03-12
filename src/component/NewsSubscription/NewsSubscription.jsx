import React from 'react'
import email from "../../assets/image/email.png"
function NewsSubscription() {
    return (
        <div className='bg-gradient-to-r from-blue-600 to-blue-400 w-full'>
            <div className='container mx-auto flex justify-between items-center py-20 '>
                <div className='flex  justify-center items-center gap-10' >
                    <img src={email} alt="newletter image" className='w-25 flex items-center  justify-center' />
                    <div>
                        <h1 className='text-7xl font-bold text-white'>Subscribe to our newsletter</h1>
                    <p className='text-2xl font-semibold text-gray-300'>Get the latest updates and offers</p>
                    </div>

                </div>
                <div>
                    <form className='flex flex-col gap-4'>
                        <div className='flex gap-10'>
                            <input type="text" placeholder='Enter your email' className='w-96 border border-gray-300 rounded-full py-3 px-4 focus:ring-2 focus:ring-blue-400 text-gray-600 bg-gradient-to-r from-blue-100  to-blue-50 text-xl font-semibold placeholder:text-gray-600 focus:outline-none ' />
                        </div>
                        <div>
                            <button type='submit' className='bg-blue-600 hover:shadow-xl cursor-pointer transition-all duration-200 w-96 text-white py-3 text-lg font-semibold px-4 rounded-full hover:bg-blue-700'>Subscribe</button>
                            <p  className='text-md  font-semibold text-gray-300'>Get exclusive deals, new arrivals & special discounts.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsSubscription
