'use client';

import React from "react";
import { ReactSVG } from "react-svg";

const ProfileEdit = () => {
  return (
    <div className="text-[#3E3232] px-4 md:px-8 lg:px-6 xl:px-2 2xl:px-4 mt-2 rounded-lg">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center mt-20">
              <div className="bg-red-600 h-2 w-1 mt-2"></div>
              <h1 className="text-left ml-2 mt-7 text-lg mb-5">Contact Us.</h1>
            </div>
            <div className="flex flex-wrap  w-[1200px]">
              {/* Line 1 */}
              <div className="w-full flex flex-wrap mb-4">
                <div className="flex-1 min-w-[250px] mb-4">
                  <h2 className="text-[#3E3232]">First Name</h2>
                  <input  
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your First Name..."
                  />
                </div>
                <div className="flex-1 ml-3 min-w-[250px] mb-4">
                  <h2 className="text-[#3E3232]">Last Name</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your Last Name..."
                  />
                </div>
                <div className="flex-1  ml-3 min-w-[250px] mb-4">
                  <h2 className="text-[#3E3232]">User Name</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your User Name..."
                  />
                </div>
              </div>
              {/* Line 2 */}
              <div className="w-full flex flex-wrap mb-4">
                <div className="flex-1 min-w-[300px] mb-4">
                  <h2 className="text-[#3E3232]">Old Password</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your Old Password..."
                  />
                </div>
                <div className="flex-1  ml-3 min-w-[300px] mb-4">
                  <h2 className="text-[#3E3232]">Password</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your password..."
                  />
                </div>
                <div className="flex-1  ml-3 min-w-[300px] mb-4">
                  <h2 className="text-[#3E3232]">Email</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your email..."
                  />
                </div>
              </div>
              {/* Line 3 */}
              <div className="w-full mb-4">
                <h2 className="text-[#3E3232]">Add Banner</h2>
                <div className="bg-[#F5F5F5] w-full px-4 h-36 rounded-xl mt-2 flex justify-center items-center">
                  <ReactSVG className="mt-8" src="/svgs/bigpic.svg" />
                  <div className="ml-5">
                    <h1 className="text-center mt-2 text-sm text-[#3E3232BF]/75">
                      Drop image here, paste or
                    </h1>
                    <div className="w-32 h-10 rounded-xl border border-[#3E3232BF]/20 mt-4 flex justify-center items-center">
                      <ReactSVG className="mr-2" src="/svgs/plus.svg" />
                      <div className="text-[#3E3232BF]/75">Select</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Line 4 */}
              <div className="w-full flex flex-wrap lg:flex-nowrap mb-4 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex-1 mb-4">
                  <h2 className="text-[#3E3232]">Explanation</h2>
                  <div className="bg-[#EDEDED] px-3 pt-2 rounded-xl mt-1 w-[800px]">
                    <div className="flex flex-wrap mb-2">
                      {[
                        { src: "/svgs/img.svg", label: "Image" },
                        { src: "/svgs/doodle.svg", label: "Color" },
                        { src: "/svgs/correction.svg", label: "Text" },
                        { src: "/svgs/align.svg", label: "Align" },
                        { src: "/svgs/link.svg", label: "Link" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="w-[104px] ml-3 mt-1 pt-1 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
                        >
                          <ReactSVG className="w-4 h-4 mr-2" src={item.src} />
                          <h4 className="text-sm text-[#3E3232BF]/75">
                            {item.label}
                          </h4>
                        </div>
                      ))}
                    </div>
                    <textarea
                      className="bg-[#F5F5F5] w-full px-4 h-32 pt-3 md:h-80 rounded-xl mt-2 resize-none"
                      placeholder="Write your explanation here..."
                    />
                  </div>
                </div>
                <div className="flex-1 mb-4">
                  <h2 className="text-[#3E3232]">Add Image</h2>
                  <div className="bg-[#F5F5F5]/75 w-[400px] rounded-xl h-96 flex flex-col justify-center items-center">
                    <ReactSVG className="mt-8" src="/svgs/bigpic.svg" />
                    <h1 className="text-center mt-2 text-[#3E3232BF]/75">
                      Add Image
                    </h1>
                    <div className="w-32 h-10 rounded-xl border border-[#3E3232BF]/20 mt-4 flex justify-center items-center">
                      <ReactSVG className="mr-2" src="/svgs/plus.svg" />
                      <div className="text-[#3E3232BF]/75">Select</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="2"
            className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center lg:mt-0 lg:mb-20"
          >
            {/* Right side content can be added here if needed */}
          </div>
        </div>
        <div className="flex justify-end mt-10 mr-[50px] lg:mt-0 mb-10 lg:mb-0 space-x-4">
          <div className="bg-[#F5F5F5] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/save.svg" />
            <h1 className="text-[#3E3232BF]">Draft</h1>
          </div>
          <div className="bg-[#F5F5F5] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/eye.svg" />
            <h1 className="text-[#3E3232BF]">Preview</h1>
          </div>
          <div className="bg-[#F81539BF]/75 w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/plane.svg" />
            <h1 className="text-white">Public</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
