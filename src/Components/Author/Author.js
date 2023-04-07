import React from 'react'
import "./Author.css";

import authorImg from "../../images/author image.jpg";

function Author() {
  return (
    <div className=' p-6 md:px-14 md:py-7 mt-14 md:mt-36 h-auto md:h-96 text-white bg-red-600 flex flex-col items-center justify-center md:flex-row md:justify-between'>
        <div className=' flex  flex-1  justify-end'>
        <p ><img className='w-2/3 bottom-12 relative md:bottom-14' src={authorImg} alt="" /></p>
        </div>
    <div className='textHeader_font flex flex-col items-start flex-1'>
      <h2 className='text-xl
      '>Author of 28 books</h2>
      
        <h1 className=' text-3xl md:text-5xl mb-6 font-semibold'>Edward Wildblood</h1>
        <div className='bg-white w-56 h-2 mb-2'></div>
        <p >noam Chomsky is an American linguist, philosopher, and social critic. He is best known for his groundbreaking work in linguistics, which has had a major impact on the study of language and cognitive science, as well as for his outspoken political activism and critiques of American foreign policy.</p>
        <p className="mt-4"><button className='bg-white rounded-md text-black px-6 py-2 hover:bg-dark '>Visit Now</button></p>
    </div>
    
    </div>
  )
}

export default Author