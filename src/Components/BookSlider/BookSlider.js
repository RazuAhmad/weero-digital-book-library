import { Carousel } from 'flowbite-react'
import React from 'react'
import slider1 from "../../images/book library slider1.jpg";
import slider2 from "../../images/book library slider 2.jpg";
import slider3 from "../../images/book library slider 3.jpg";
import slider4 from "../../images/book library slider 4.jpg"
import slider5 from "../../images/book library slider 5.jpg"
function BookSlider() {
  return (
    <div className="h-72 sm:h-64 xl:h-auto 2xl:h-96">
  <Carousel>
    <img
      src={slider1}
      alt="..."
    />
    <img
      src={slider2}
      alt="..."
    />
    <img
      src={slider3}
      alt="..."
    />
    <img
      src={slider4}
      alt="..."
    />
    <img
      src={slider5}
      alt="..."
    />
  </Carousel>
</div>
  )
}

export default BookSlider