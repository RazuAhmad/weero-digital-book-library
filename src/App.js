import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import BookHeader from './Components/BookHeader/BookHeader'
import LibraryCarousel from './Components/LibraryCarousel/LibraryCarousel'
import Author from './Components/Author/Author'


function App() {
  return (
    <div className='body'>
      <Navbar/>
      <LibraryCarousel/>
      <BookHeader/>
      <Author/>
    </div>
  )
}

export default App