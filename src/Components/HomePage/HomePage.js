import React from 'react'
import LibraryCarousel from '../LibraryCarousel/LibraryCarousel'
import BookHeader from '../BookHeader/BookHeader'
import Author from '../Author/Author'
import BookVersion from '../BookVersion/BookVersion'
import ReadersReview from '../ReadersReview/ReadersReview'
import AboutUs from '../AboutUs/AboutUs'

export default function HomePage() {
  return (
    <>
     <LibraryCarousel/>
      <BookHeader/>
      <Author/>
      <BookVersion/>
      <ReadersReview/>
      <AboutUs/>
    </>
  )
}
