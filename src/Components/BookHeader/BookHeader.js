import React from 'react'
import "./BookHeader.css";
import bookImg from "../../images/book-header.png"
function BookHeader() {
  return (
    <div className=' text-white flex flex-col justify-between items-center md:flex-row lg:flex-row'>
    <div className="bookHeader_text flex flex-col justify-center flex-1">
        <h1 className='text-6xl mb-6 font-semibold'>WELLOW DIGITAL</h1>
        <h1 className='text-6xl'>LIBRARY</h1>
        <p className="mt-4"><button className='bg-white rounded-md text-black p-2'>Buy Now for $5.99</button></p>
    </div>
    <div className="bookHeader_img flex flex-1">
        <img className='w-full' src={bookImg} alt="" />
    </div>

    </div>
  )
}

export default BookHeader