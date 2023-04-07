import React, { useState } from 'react';
import "./Navbar.css";
import weeroDigitalIcon from "../../images/weero-dital-icon.jpg"
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className=" flex items-center">
            <a href="/" className="text-2xl font-bold text-white"> <img className='w-12' src={weeroDigitalIcon} alt="" /></a>
          </div>
          <div className="hidden md:block">
            <div className=" flex justify-between items-center mt-5 ">
            <p className='mr-4 md:mr-8 font-bold '>
                <Link to="/" className="text-white hover:text-black hover:underline hover:underline-offset-4 ">Homepage</Link>
              </p>
              <p className='mr-4 md:mr-8 font-bold'>
                <Link to="/contact_us" className="text-white hover:text-black hover:underline hover:underline-offset-4">Contact Us</Link>
              </p>
              <p className='mr-4 md:mr-8 font-bold'>
                <Link to="/booking_page" className="text-white hover:text-black hover:underline hover:underline-offset-4">Booking Page</Link>
              </p>
              <p className='mr-4 md:mr-8 font-bold'>
                <Link to="/book_collections" className="text-white hover:text-black hover:underline hover:underline-offset-4">Book Collections</Link>
              </p>
            </div>
          </div>
          <div className="mr-2 flex items-center md:hidden">
            <button onClick={toggleMenu} type="button" className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              {isOpen ? (
                <RiCloseLine
                color="#fff"
                size={27}
                
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                
              />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden scale-up-center">
          <div className="my-8 py-6 cursor-pointer text-2xl  flex flex-col items-center justify-center font-base">
            <p className='mb-2'>
              <Link to="/" onClick={() =>setIsOpen(false)} className="text-white hover:text-black hover:underline hover:underline-offset-4">Homepage</Link>
              </p>
            <p className='mb-2'>
              <Link to="/contact_us" onClick={() =>setIsOpen(false)} className="text-white hover:text-black hover:underline hover:underline-offset-4">Contact Us</Link>
              </p>
            <p className='mb-2'>
              <Link to="/booking_page" onClick={() =>setIsOpen(false)}  className="text-white hover:text-black hover:underline hover:underline-offset-6">Booking page</Link>
              </p>
            <p className='mb-2'>
              <Link to="/book_collections" onClick={() =>setIsOpen(false)} className="text-white hover:text-black hover:underline hover:underline-offset-4">Book Collections</Link>
              </p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
