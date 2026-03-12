import React from 'react'
import { FaTruck, FaLock, FaHeadset, FaAward } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Delivery",
      desc: "Quick and reliable delivery"
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "100% safe checkout"
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support",
      desc: "24/7 customer support"
    },
    {
      icon: <FaAward />,
      title:"Quality Assurance",
      desc: "Top brands and premium quality"
    }
  ]
  return (
    <div className='flex flex-col gap-10 py-16'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-shadow-gray-700 text-center p-2 font-semibold'>Why Choose Us</h1>
        <div className='w-10 bg-blue-600 h-1 text-center'></div>
      </div>
      <div className='flex flex-4 p-10 w-full bg-gradient-to-r from-blue-600 to-blue-400 mb-5 h-20 gap-10  justify-evenly items-center font-light'>
        {features.map((feature, index) => (
          <div className='flex group flex-col w-70 justify-center  items-center bg-white rounded-xl p-4 hover:shadow-2xl hover:transform hover:scale-105 hover:-translate-y-2 transistion-all duration-200 border border-gray-400'> 
            <div className='text-5xl text-blue-700 font-light group-hover:scale-105  '>{feature.icon}</div>
            <h1 className='text-lg text-gray-800 font-semibold group-hover:text-blue-500'>{feature.title}</h1>
            <p className='text-gray-500 font-semibold group-hover:text-blue-400 '>{feature.desc}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default WhyChooseUs
