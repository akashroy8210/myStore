import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';
import { useState } from 'react';
function Register() {
  const navigate = useNavigate();
  const [login,setLogin]=useState(false);
  if(login){
    navigate('/login');
  }
  function showPassword() {
    var x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";
      document.getElementById("show-pass").innerHTML = `<ion-icon name="eye"></ion-icon>`;

    } else {
      x.type = "password";
      document.getElementById("show-pass").innerHTML = `<ion-icon name="eye-off"></ion-icon>`;

    }
  }
  function checkPassword(e) {
    e.preventDefault();
    const pass = document.getElementById("password");
    const confPass = document.getElementById("conf-password");
    const message = document.getElementById("message");
    if (pass.value !== confPass.value) {
      message.innerHTML = "Passwords do not match";
      document.getElementById("label-conf-pass").innerHTML = "Confirm Password*";
      document.getElementById("label-conf-pass").classList.add("text-red-500");
      return false;
    } else {
      message.innerHTML = "";
      document.getElementById("label-conf-pass").innerHTML = "Confirm Password";
      document.getElementById("label-conf-pass").classList.remove("text-red-500");
      return true;
    }
  }
  return (
    <div className='flex  flex-col gap-20 bg-gray-50'>
      
      <div className='bg-gray-50 w-full  flex items-center justify-center'>
        {/* login page-card */}
        <div className='bg-white border border-gray-300 shadow-2xl rounded-2xl  p-10 w-110 '>
          <h2 className='text-2xl font-bold mb-4 text-center'>Create Account</h2>
          {/* form page */}
          <form className='flex  flex-col gap-2 text-lg ' onSubmit={() => {
            checkPassword();
          }}>
            <div className='my-1 relative flex flex-col gap-2 font-semibold'>
              <label htmlFor="name">Username</label>
              <ion-icon name="person-outline" className='absolute top-12.5 left-2 text-gray-400' />
              <input type="text" name="name" id="name" className='bg-white border border-gray-300  rounded-lg focus:ring-blue-500 w-full py-2 px-8' placeholder='Username' required />
            </div>
            {/* email address */}
            <div className='my-1 relative flex flex-col gap-2 font-semibold'>
              <label htmlFor="email">Email Address</label>
              <MdOutlineEmail className='absolute top-13 left-2 text-gray-400' />
              <input type="email" name="email" id="email" className='bg-white border border-gray-300  rounded-lg focus:ring-blue-500 w-full py-2 px-8' placeholder='Email Address' required />
            </div>
            {/* password */}
            <div className='my-1 relative flex flex-col gap-2 font-semibold'>
              <label htmlFor="password">Password</label>
              <FaLock className='absolute top-12 left-2 text-gray-400' />
              <input type="password" name="password" id="password" className='bg-white border border-gray-300  rounded-lg focus:ring-blue-500 w-full py-2 px-8' placeholder='Password' required />
              {/* showpassword */}
              <button type="button" id='show-pass' onClick={showPassword} className='text-gray-400 cursor-pointer absolute right-2 top-12 '><ion-icon name="eye-off"></ion-icon></button>
            </div>

            {/* confirm password */}
            <div className='  relative flex flex-col gap-2 font-semibold'>
              <label htmlFor="conf-password" id='label-conf-pass'>Confirm Password</label>
              <FaLock className='absolute top-12 left-2 text-gray-400' />
              <input type="password" name="conf-password" id="conf-password" className='bg-white border border-gray-300  rounded-lg focus:ring-blue-500 w-full py-2 px-8' placeholder='Confirm Password' required />
              {/* showpassword */}
              <button type="button" id='show-pass' onClick={showPassword} className='text-gray-400 cursor-pointer absolute right-2 top-12 '><ion-icon name="eye-off"></ion-icon></button>
            </div>
            <p id='message' className='text-red-500'></p>

            {/* button-create account */}
            <button type="submit" className='bg-blue-600 mt-4 text-white py-2 px-4 mb-4 rounded-lg w-full hover:bg-blue-700 cursor-pointer' >Create Account</button>

            {/* login */}
            <p className='text-center py-2 border-t border-gray-300  font-semibold '>Already have an account?<button  className='cursor-pointer text-blue-600 font-semibold' type='button' onClick={() => setLogin(true)}>Login</button></p>
          </form>
        </div>
      </div>
    
    </div>
  )
}

export default Register
