import React from "react";
import Image from "next/image";
import { StorageImage } from "@aws-amplify/ui-react-storage";

const BigFeatured = ({imageUrl, title, subtitle}) => {
  const description = subtitle;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative w-full">
      {/* <Image
        src="/images/laptop.png"
        alt="kuch bhi"
        width={380}
        height={452}
        className="w-[740px] h-[373px] object-cover bg-transparent border rounded-md"
      /> */}
       <StorageImage
        className="w-[740px] h-[373px] object-cover bg-transparent border rounded-md"
        imgKey={imageUrl || "UserAvatar.png"}
      />

<div className="flex items-center justify-center">
     <div className="absolute mt-[-125px]  bg-white ml-[-20px] bg-opacity-75 rounded-xl p-6 max-w-xs md:max-w-full md:w-[720px] mb-2">
        <h1 className="text-2xl mb-3">{title}</h1>
        <h3 className="text-sm text-gray-700">
          {truncateText(description, 70)}
        </h3>
      </div>
     </div>
    </div>
  );
};

export default BigFeatured;
