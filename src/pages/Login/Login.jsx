import React, { use } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';
import { useState } from 'react';
function Login() {
    const navigate = useNavigate();
    const naveigateToRegister = () => {
        navigate('/register');
    }
    const [create, setCreate] = useState(false);
    if(create){
        naveigateToRegister();
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
    
    return (
        <div className='flex  flex-col gap-20 bg-gray-50'>
            
            <div className='bg-gray-50 w-full flex items-center justify-center'>
                <div className='bg-white border border-gray-300 shadow-2xl rounded-2xl  p-10 w-110 '>
                    <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
                    {/* form page */}
                    <form className='flex  flex-col gap-2 text-lg' onSubmit={() => {
                        navigate('/');
                    }}>
                        {/* email address */}
                        <div className='my-2 relative flex flex-col gap-2 font-semibold'>
                            <label htmlFor="email">Email Address</label>
                            <MdOutlineEmail className='absolute top-13 left-2 text-gray-400' />
                            <input type="email" name="email" id="email"
                                className='bg-white border border-gray-300  rounded-lg  focus:ring-blue-500 w-full py-2 px-8'
                                placeholder='Email Address' required />
                        </div>
                        {/* password */}
                        <div className='my-2 mb-6 relative flex flex-col gap-2 font-semibold'>
                            <label htmlFor="password">Password</label>
                            <FaLock className='absolute top-12 left-2 text-gray-400' />
                            <input type="password" name="password" id="password"
                                className='bg-white border border-gray-300  rounded-lg focus:ring-blue-500 w-full py-2 px-8 '
                                placeholder='Password' required />
                            {/* showpassword */}
                            <button type="button" id='show-pass' onClick={showPassword} className='text-gray-400 cursor-pointer absolute right-2 top-12 '><ion-icon name="eye-off"></ion-icon></button>
                        </div>

                        {/* button-login */}
                        <button type="submit"

                            id='btn-login'
                            className='bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 cursor-pointer'>
                            Login
                        </button>

                        {/* forget password */}
                        <p className='text-center py-4 border-b font-semibold border-gray-300'><a href="#" className="text-blue-800" >Forgot Password?</a></p>

                        {/* button-signup */}
                        <p className='text-center mt-3'>Don't have an account?<button type="button" onClick={() => {
                            setCreate(true);
                        }} className='cursor-pointer text-blue-600 font-semibold'>Register</button></p>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login
