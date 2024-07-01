import React from "react";
import Image from "next/image";

const BigFeatured = () => {
  const description = "This is a blog about Bigggfood";

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative w-full">
      <Image
        src="/images/laptop.png"
        alt="kuch bhi"
        width={350}
        height={452}
        className="w-full h-[373px] object-cover bg-transparent border rounded-md"
      />

<div className="flex items-center justify-center">
     <div className="absolute mt-[-120px]  bg-white bg-opacity-75 rounded-xl p-6 max-w-xs md:max-w-full md:w-[670px] mb-2">
        <h1 className="text-2xl mb-3">Hello</h1>
        <h3 className="text-sm text-gray-700">
          {truncateText(description, 70)}
        </h3>
      </div>
     </div>
    </div>
  );
};

export default BigFeatured;
