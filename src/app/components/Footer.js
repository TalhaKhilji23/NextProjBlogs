"use client";

import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] w-full text-[#3E3232] py-8 mt-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
          <div className="flex ">
        <div className="bg-red-600 h-2 w-1   mt-2"></div>
        <h1 className="text-left ml-2  text-lg mb-5">
          Mega News
        </h1>
        </div>
            <p  className="text-left ml-2 text-[#3E3232BF]/75 text-sm mb-5">
            Lorem ipsum dolor sit amet, consectetur adipis congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin
            </p>
            <div className="flex h-20 ">
        <div className="bg-red-600 h-2 w-1   mt-2"></div>
        <h1 className="text-left ml-2  text-lg mb-5">
        Newsletters
        </h1>

        <div className="bg-white mt-10 ml-[-100px] rounded-xl flex justify-between w-[300px]">
  <input
    placeholder="Enter your email"
    className="pl-4  placeholder:text-sm"
  />
  <ReactSVG className="mt-3 mr-3" src="/svgs/email.svg" />
</div>

        
       
        </div>

      
          </div>

          
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-black hover:font-bold">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/categories" className="hover:text-black hover:font-bold">Categories</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-black hover:font-bold">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-black hover:font-bold">Contact Us</Link>
              </li>
            </ul>


       

           
          </div>
       


          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-black">
                <ReactSVG src="/svgs/facebook.svg" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-black">
                <ReactSVG src="/svgs/twitter.svg" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-black">
                <ReactSVG src="/svgs/instagram.svg" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-black">
                <ReactSVG src="/svgs/linkedin.svg" />
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p>
              Email: info@meganews.com
            </p>
            <p>
              Phone: +123 456 7890
            </p>
            <p>
              Address: 123 Mega Street, News City, Country
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-[#3E32320D]/5 mt-5 py-3  rounded-md">
        <div className="mt-1  ml-10 text-left text-sm text-[#3E3232BF]/75">
                &copy; Privacy policy | terms & conditions
              </div>    
        <div className="mt-1 mr-10 text-left text-sm text-[#3E3232BF]/75  ">
        all copyright (c) 2022 reserved 
              </div>    
        </div>
           
      </div>
    </footer>
  );
};

export default Footer;
