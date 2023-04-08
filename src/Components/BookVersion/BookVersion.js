import React from 'react'
import "./BookVersion.css";
import ebookImg from "../../images/ebook.png"

function BookVersion() {
  return (
    <div className='p-6 md:px-14 md:py-7 mt-14 md:mt-36 text-white textHeader_font'>

        <div className='flex flex-col items-center mb-28 '>
        <h1 className='text-3xl md:text-5xl font-extrabold mb-3'>Purchase Whatever You Want</h1>
        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>


        {/* All cards are here... */}
       
       <div className='flex flex-col justify-between items-center md:flex-row md:justify-between md:gap-3 lg:justify-evenly'>

        {/* EPUB card no 1.. */}
        <div className="cardEPUB bg-red-600 rounded-md border-2 border-sky-500 w-80  flex flex-col justify-between mb-12 md:mb-0 shadow-lg shadow-white">
            <h1 className='bg-sky-500 text-center py-3 mb-6'>EPUB</h1>
            
            <div className='flex flex-col items-center'>
            <p className='text-center'><img className='w-12 h-12' src={ebookImg} alt="" /></p>
            <p>With Supporting text</p> 
            <p>below as a natural lead-in</p>
            </div>
            <div className='flex flex-col items-center '>
            <h1 className='text-4xl '>$77.99</h1>
            <p className="mt-4"><button className='bg-white rounded-md text-black px-6 py-1 hover:bg-black hover:text-white '>Purchase Now</button></p>
            </div>
        </div>

        {/* Ebook card no 2.. */}
        <div className="cardEPUB bg-red-600 rounded-md border-2 border-sky-500  w-80 h-96 flex flex-col justify-between mb-12 md:mb-0 shadow-lg shadow-white">
            <h1 className='bg-sky-500 text-center py-3 mb-6'>E-book</h1>
            <div className='flex flex-col items-center'>
            <p className='text-center'><img className='w-12 h-12' src={ebookImg} alt="" /></p>
            <p>With Supporting text</p> 
            <p>below as a natural lead-in</p>
            </div>
            <div className='flex flex-col items-center mb-5'>
            <h1 className='text-4xl '>$77.99</h1>
            <p className="mt-4"><button className='bg-white rounded-md text-black px-6 py-1 hover:bg-black hover:text-white '>Purchase Now</button></p>
            </div>
        </div>

        {/* Printcopy card no 3... */}
        <div className="cardEPUB bg-red-600 rounded-md border-2 border-sky-500   w-80 h-96 flex flex-col justify-between shadow-lg shadow-white">
            <h1 className='bg-sky-500 text-center py-3 mb-6'>Print Copy</h1>
            <div className='flex flex-col items-center'>
            <p className='text-center'><img className='w-12 h-12' src={ebookImg} alt="" /></p>
            <p>With Supporting text</p> 
            <p>below as a natural lead-in</p>
            </div>
            <div className='flex flex-col items-center mb-5'>
            <h1 className='text-4xl '>$77.99</h1>
            <p className="mt-4"><button className='bg-white rounded-md text-black px-6 py-1 hover:bg-black hover:text-white '>Purchase Now</button></p>
            </div>
        </div>
       </div>

    

    </div>
  )
}

export default BookVersion