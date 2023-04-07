import React from 'react'
import "./BookHeader.css";
import bookImg from "../../images/book-header.png";
import Typewriter from 'typewriter-effect';

function BookHeader() {
  return (
    <div className='p-6 md:px-14 md:py-7 text-white flex flex-col-reverse justify-center items-center md:justify-evenly md:items-center md:flex-row lg:flex-row'>
    <div className="textHeader_font flex flex-col justify-center items-start flex-1 md:ml-4 mb-5">
        <h1 className='text-3xl md:text-5xl mb-6 font-semibold'><Typewriter
  options={{
    strings: ['WEEROW DIGITAL',],
    autoStart: true,
    loop: true,
  }}
/></h1>
        <h1 className='text-3xl md:text-5xl font-semibold'>LIBRARY</h1>


        <p className='mt-4'>Country's Largest Library. We have Almost 145658 <br /> readers around Bangladesh</p>

        <p className="mt-4"><button className='bg-white rounded-md text-black px-6 py-2 hover:bg-orange-500'>Visit Now</button></p>
    </div>

    <div className="bookHeader_img flex items-center justify-center flex-1">
        <p><img className='w-80 md:w-full' src={bookImg} alt="" /></p>
    </div>

    </div>
  )
}

export default BookHeader