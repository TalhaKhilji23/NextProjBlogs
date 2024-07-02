"use client";

import React from "react";
import { ReactSVG } from 'react-svg'


const CommentForm = () => {
  return (
    <div className="text-[#3E3232] mx-auto px-4 md:px-8 lg:px-16 xl:px-80 mt-2 xl:ml-20 rounded-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mt-20">
              <div className="bg-red-600 h-2 w-1 mt-2"></div>
              <h1 className="text-left ml-2 mt-7 text-lg mb-5">Add a Comment</h1>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="mb-4 md:mr-4 lg:mr-8 lg:w-[488px]">
                <div>
                  <h2 className="text-[#3E3232]">Name</h2>
                  <input
                    className="bg-[#F5F5F5] w-[488px] px-4 md:px-6 lg:px-10 h-12 rounded-xl mt-2"
                    placeholder="Enter your name..."
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-[#3E3232]">Website</h2>
                  <input
                    className="bg-[#F5F5F5] w-[488px] px-4 md:px-6 lg:px-10 h-12 rounded-xl mt-2"
                    placeholder="Enter your website..."
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-[#3E3232]">Email</h2>
                  <input
                    className="bg-[#F5F5F5] w-[488px] px-4 md:px-6 lg:px-10 h-12 rounded-xl mt-2"
                    placeholder="Enter your Email..."
                  />
                </div>
              </div>
              <div className="ml-0 md:ml-10 lg:ml-0 lg:col-span-2">
                <div>
                  <h2 className="text-[#3E3232]">Comment</h2>
                  <textarea
                    className="bg-[#F5F5F5]  px-4 md:px-6 lg:px-10 h-32 w-[488px] pt-3 md:h-60 rounded-xl mt-2 resize-none"
                    placeholder="Write your comment here..."
                  />
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="flex items-end justify-end mt-10 mr-64">
              <div className="bg-[#F81539BF]/75 w-52 rounded-xl h-10  flex">
              <ReactSVG className="mt-3 mr-3 ml-7" src="/svgs/commenticon.svg" />

                <h1 className="text-center mt-2 text-white"> Send Comment</h1>
              </div>
            </div>
      </div>
    </div>
  );
};

export default CommentForm;
