import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import ContactUs from './Components/ContactUs/ContactUs'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'


function App() {
  return (
    <div className='body'>
      <Navbar/>
      
      <Routes>
     <Route path='/' element={<HomePage/>} />
        <Route path='/contact_us' element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default App