'use client';
import React from "react";
import Image from "next/image";
import { ReactSVG } from 'react-svg';

const SendingComment = ({ text, userImage, userName, date }) => {
  return (
    <div className="relative bg-[#F5F5F5] mx-4 md:mx-8 lg:mx-16 xl:mx-80 mt-2 rounded-lg p-4">
      <div className="flex items-center justify-center">
        <div className="rounded-xl w-full h-auto mt-6 flex flex-col md:flex-row">
          <div className="flex items-start md:items-center w-full md:w-auto">
            <Image
              alt="User Image"
              src={userImage}
              width={50}
              height={50}
              className="w-11 h-11 object-cover bg-transparent border rounded-xl"
            />
            <div className="ml-3">
              <h1 className="text-sm font-bold text-black">{userName}</h1>
              <h1 className="text-sm text-[#3E3232BF]/75">{date}</h1>
            </div>
          </div>
          <div className="bg-[#3E32320D]/5 flex py-1 px-3 mt-3 md:mt-0 md:ml-auto rounded-xl items-center">
            <ReactSVG
              className="text-3xl mr-2 fill-[#3E323280]"
              src="/svgs/sharesvg.svg"
            />
            <h1 className="text-[#3E3232BF]/75 text-[12px]">Reply</h1>
          </div>
        </div>
      </div>
      <p className="text-[#000000BF]/75 text-sm mt-4 md:mt-6">{text}</p>
    </div>
  );
};

export default SendingComment;
