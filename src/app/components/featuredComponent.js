import React from "react";
import Image from "next/image";

const FeaturedComponent = ({ imageUrl, title, subtitle }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="kuch bhi"
        width={360}
        height={402}
        className="w-full h-[375px] object-cover bg-transparent border rounded-md"
      />

     <div className="flex items-center justify-center">
     <div className="absolute mt-[-120px] mb-2  bg-white bg-opacity-75 rounded-xl p-6 max-w-xs md:max-w-full md:w-[310px]">
        <h1 className="text-2xl mb-3">{title}</h1>
        <h3 className="text-sm text-gray-700">
          {truncateText(subtitle, 70)}
        </h3>
      </div>
     </div>
    </div>
  );
};

export default FeaturedComponent;
