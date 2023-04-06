import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-lg font-bold text-gray-800">My Bookshop</a>
          </div>
          <div className="hidden md:block">
            <ul className="ml-4 flex items-center">
              <li className="ml-4">
                <a href="/" className="text-gray-800 hover:text-gray-900">Homepage</a>
              </li>
              <li className="ml-4">
                <a href="/books" className="text-gray-800 hover:text-gray-900">Contact</a>
              </li>
              <li className="ml-4">
                <a href="/contact" className="text-gray-800 hover:text-gray-900">Booking Page</a>
              </li>
              <li className="ml-4">
                <a href="/contact" className="text-gray-800 hover:text-gray-900">All Book Collections</a>
              </li>
            </ul>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button onClick={toggleMenu} type="button" className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden ">
          <div className="my-8 cursor-pointer text-white text-2xl text-center font-base">
            <p className='mb-2'><a href="/" className="text-gray-800 hover:text-gray-900">Home</a></p>
            <p className='mb-2'><a href="/books" className="text-gray-800 hover:text-gray-900">Books</a></p>
            <p className='mb-2'><a href="/contact" className="text-gray-800 hover:text-gray-900">Contact</a></p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
