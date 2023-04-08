import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import ContactUs from './Components/ContactUs/ContactUs'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import BooksCollection from './Components/BooksCollection/BooksCollection'
import BookingPage from './Components/BookingPage/BookingPage'


function App() {
  return (
    <div className='body'>
      <Navbar/>
      
      <Routes>
     <Route path='/' element={<HomePage/>} />
        <Route path='/contact_us' element={<ContactUs/>} />
        <Route path='/book_collections' element={<BooksCollection/>} />
        <Route path='/booking_page/:id' element={<BookingPage/>}  />
      </Routes>
    </div>
  )
}

export default App