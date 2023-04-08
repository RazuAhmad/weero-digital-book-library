import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from "../../fakeData/fakeData.json";

function BookingPage(props) {
    const {id}=useParams();

const selectedItem=fakeData.find((element)=>element.stringifyId===id);
console.log(selectedItem);
  return (
    <div className='text-white '>
        <h1 className="text-6xl text-center">Your Booking Item Id: {id}</h1>
        <h1 className='text-5xl text-center'>Welcome to the Booking Page</h1>
        
        <h2 className='text-center text-2xl'>This is where from you can book this item.</h2>
    </div>
  )
}

export default BookingPage