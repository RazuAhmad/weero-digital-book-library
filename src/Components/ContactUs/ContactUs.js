import React from 'react'
import { useForm } from 'react-hook-form';

function ContactUs() {
  const { register, handleSubmit ,watch,reset} = useForm();

  const onSubmit = (data) => {

    console.log(data);
    reset()
  };

  return (
    <div className='textHeader_font text-white my-24'>
    <h2 className='font-bold text-center   text-3xl mx-5 mb-4'>Contact Us</h2>
    
    <form onSubmit={handleSubmit(onSubmit
    )} className="max-w-xl mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-gray-900 SellForm-container_main ">

      <div className='flex justify-center gap-4'>
      
      </div>

      <p className='mb-3'>
          <label htmlFor="wallet">Your Email</label>
          <br />
          <input
            {...register("userEmail")}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="email"
            id="wallet"
            placeholder='write your email'
          />
        </p>
           
        <p className='mb-3'>
          <label htmlFor="wallet">Active Phone Number</label>
          <br />
          <input
            {...register("userPhone")}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            id="wallet"
            placeholder='write your phone number'
           
          />
        </p>

        <p className='mb-3'>
          <label htmlFor="wallet">Share Your Opinion</label>
          <br />
          <textarea
            {...register("walletAddress")}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            id="wallet"
            
           placeholder='Whats on your mind?'
          />
        </p>
            
            <div className='text-center'>
            <input  className='text-white   bg-green-700 border-2 ml-2 px-12 py-2 rounded cursor-pointer'  type="submit" value="Submit" />
            </div>
        </form>

    </div>
  )
}

export default ContactUs