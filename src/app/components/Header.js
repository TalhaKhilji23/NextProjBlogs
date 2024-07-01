"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ReactSVG } from 'react-svg'
// import { newsvg } from "../../../public/svgs/assets";

import Image from 'next/image';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent text-[#FC4308] pt-4 sticky top-0 z-50">
      <nav className="container mx-auto flex  items-center">
        <div className="text-lg font-bold w-36 ">Mega News.</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="ml-16 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex md:ml-16 md:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="flex">
            <Link
              href="/"
              className="block text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              Categories
            </Link>
            {/* <svg>
              <use xlinkHref="/svgs/assets.svg#1231"></use>
            </svg> */}
           <ReactSVG className="mt-1 ml-2" src='/svgs/dropdown.svg' />
          </li>
          <li className="flex">
            <Link
              href="/"
              className="block text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              Pages
            </Link>
            <ReactSVG className="mt-1 ml-2" src='/svgs/dropdown.svg' />

          </li>
          <li>
            <Link
              href="/"
              className="block w-24 text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block w-24 text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              About Us{" "}
            </Link>
          </li>
        </ul>

      <div className="col-1 flex justify-between bg-[#F5F5F5] w-96 h-12 rounded-xl md:ml-48">
      <ReactSVG className="mt-4 ml-4" src='/svgs/threedots.svg' />
      <input className="bg-[#F5F5F5] ml-[-32px]" placeholder="Enter your name..." ></input>
      <ReactSVG className="mt-3 ml-4 mr-4" src='/svgs/searchicon.svg' />


      

</div>
     <Image
        src="/images/userImage.png" // Image URL
        alt="My Image"
        className="ml-16"
        width={50}   // Set the desired width of the image
        height={3500}  // Set the desired height of the image
      />
       <Link
              href="/"
              className="block ml-4 text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              Behzad
            </Link>
            <ReactSVG className="mt-1 ml-2" src='/svgs/dropdown.svg' />




            <div className="bg-[#F5F5F5] w-12 h-12 rounded-xl ml-16">
            <ReactSVG className="mt-3  flex justify-center items-center" src='/svgs/bookmarkicon.svg' />



            </div>


      </nav>



    </header>
  );
};

export default Header;
