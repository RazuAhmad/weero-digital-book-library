import React from 'react'
import person1 from "../../images/UI-face-1.jpg";
import person2 from "../../images/UI-face-2.jpg";
import Typewriter from 'typewriter-effect';


function ReadersReview() {
  return (
    <div className='p-6 md:px-14 md:py-7 mt-14 md:mt-36 text-gray-400
    textHeader_font'>
     <div className='flex flex-col items-center mb-20 '>
        <h1 className='text-3xl md:text-5xl font-extrabold mb-3'>
        <Typewriter
  options={{
    strings: ['What our Readers Say','About Us!'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur</p>
       </div>


    {/* All Readers review are here */}
       
    <div className='flex flex-col justify-between items-center md:flex-col lg:flex-row md:justify-between gap-12 lg:justify-evenly text-gray-600'>

{/* review card no 1.. */}
<div className=" bg-white rounded-md border-2 px-14 pt-6 pb-10 border-orange-500 w-70 md:w-1/4  flex flex-col justify-between items-center md:mb-0 shadow-lg shadow-white">
              <div className=''>
                <p className='text '>
                <img className='rounded-full hover:opacity-50 cursor-pointer ' src={person1} alt="" />
                </p>
              </div>

                <div className='flex flex-col items-center'>
                <h3 className="">David Rock</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  iure autem recusandae, veniam, illo dolor soluta assumenda
                  minima quia velit officia sit exercitationem nam ipsa,
                  repellendus aut facilis quasi voluptas!
                </p>
                </div>
                <p className="mt-4"><button className='bg-blue-600 rounded-md text-black px-6 py-2 hover:bg-black hover:text-white '>View Profile</button></p>
  
</div>

{/* review card no 2.. */}
<div className=" bg-white rounded-md border-2 px-14 pt-6 pb-10 border-orange-500 w-70 md:w-1/4  flex flex-col justify-between items-center md:mb-0 shadow-lg shadow-white">
              <div className=''>
                <p className='text'>
                <img className='rounded-full  hover:opacity-50 cursor-pointer ' src={person2} alt="" />
                </p>
              </div>

                <div className='flex flex-col items-center'>
                <h3 className="">David Rock</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  iure autem recusandae, veniam, illo dolor soluta assumenda
                  minima quia velit officia sit exercitationem nam ipsa,
                  repellendus aut facilis quasi voluptas!
                </p>
                </div>
                
                <p className="mt-4"><button className='bg-blue-600 rounded-md text-black px-6 py-2 hover:bg-black hover:text-white '>View Profile</button></p>
  
</div>

{/* review card no 3... */}
<div className=" bg-white rounded-md border-2 px-14 pt-6 pb-10 border-orange-500 w-70 md:w-1/4  flex flex-col justify-between items-center md:mb-0 shadow-lg shadow-white">
              <div className=''>
                <p className='text '>
                <img className='rounded-full hover:opacity-50 cursor-pointer ' src={person1} alt="" />
                </p>
              </div>

                <div className='flex flex-col items-center'>
                <h3 className="">David Rock</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  iure autem recusandae, veniam, illo dolor soluta assumenda
                  minima quia velit officia sit exercitationem nam ipsa,
                  repellendus aut facilis quasi voluptas!
                </p>
                </div>
                <p className="mt-4"><button className='bg-blue-600 rounded-md text-black px-6 py-2 hover:bg-black hover:text-white '>View Profile</button></p>
  
</div>
</div>
    </div>
  )
}

export default ReadersReview