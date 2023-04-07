import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import BookSlider from './Components/BookSlider/BookSlider'
import BookHeader from './Components/BookHeader/BookHeader'


function App() {
  return (
    <div className='body'>
      <Navbar/>
      <BookSlider/>
      <BookHeader/>
    </div>
  )
}

export default App