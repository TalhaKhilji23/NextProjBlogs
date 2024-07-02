'use client';
import React from "react";
import Image from "next/image";
import { ReactSVG } from 'react-svg';

const ReceivingComment = ({ text, userImage, userName, date }) => {
  const description =
    "TOf course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge";

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative  mx-4 md:mx-1 mt-[-20px] lg:mx-1 xl:mx-1  rounded-lg">
      <div className="flex items-center justify-center">
        <div className="rounded-xl w-full md:w-[95%] lg:w-[85%] xl:w-[1128px] h-[267px] mt-6">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                alt="User Image"
                src={userImage}
                width={50}
                height={50}
                className="w-11 h-11 mt-3 ml-3 object-cover bg-transparent border rounded-xl"
              />
              <div>
                <h1 className="text-left text-sm font-bold text-black ml-3 mt-3">
                  {userName}
                </h1>
                <h1 className="text-left text-sm text-[#3E3232BF]/75 ml-3 mt-1">
                  {date}
                </h1>
              </div>
            </div>
            <div className="bg-[#3E32320D]/5 flex py-1 px-3 mt-3 mr-3 rounded-xl">
              <ReactSVG
                className="mt-3 text-3xl mr-2 fill-[#3E323280] ml-2"
                src="/svgs/sharesvg.svg"
              />
              <h1 className="mt-[10px] text-[#3E3232BF]/75 text-[12px] mr-3">
                Reply
              </h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[#000000BF]/75 mt-[-170px] text-sm px-4 md:px-10 xl:px-2 xl:ml-7 pb-20 ">{text}</h1>
    </div>
  );
};

export default ReceivingComment;
