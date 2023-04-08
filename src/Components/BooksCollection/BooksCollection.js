import React from 'react'
import "./BooksCollection.css"
import fakeDatas from "../../fakeData/fakeData.json";
import { Link } from 'react-router-dom';



function BooksCollection() {
  
  const categoryHandler=(e)=>{
console.log(e.target.value);


  }

  return (
    <div className='textHeader_font'>
        <h1 className='text-white text-4xl text-center mt-6'>Welcome To The Country's Biggest Book Collection Platform........</h1>

        <div className='flex flex-col items-center text-center text-white text-xl font-bold mt-4'>
         <p className='text-red-500 text-3xl mb-2'>
          Select Book Category
         </p>

         <p className='text-black '>
         <select
         onChange={categoryHandler}
            className='class="text-2xl w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 '
            id="currency"
          >
            <option value="all">All</option>
            <option value="self help">Self help</option>
            <option value="Motivational">Motivational</option>
            <option value="History">History</option>
            <option value="Software development">Software development</option>
          </select>
         </p>
          
         
        </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-2xl'>

            {
              fakeDatas.map((item)=> <div className='border-2 border-solid border-white singleBookItem' key={item.id}>

              <h1>Book Name: {item.bookName}</h1>
          <h2>Author's Name: {item.author}</h2>
          <h2>Book Category: {item.category}</h2>
          
  <br />
  <p className="mt-4"><Link to={`/booking_page/${item.id}`}><button className='bg-blue-600 rounded-md text-black px-6 py-2 hover:bg-black hover:text-white '>Book Now This Item</button></Link></p>
              </div>)
            }



          </div>
        
    </div>
  )
}

export default BooksCollection