import React from "react";
import Image from "next/image";
import { StorageImage } from "@aws-amplify/ui-react-storage";

const FeaturedComponent = ({ imageUrl, title, subtitle }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative">
      <StorageImage
        className="w-[full] h-[375px] object-cover bg-transparent border rounded-md"
        imgKey={imageUrl || "UserAvatar.png"}
      />
      {/* <Image
        src={imageUrl}
        alt="kuch bhi"
        width={390}
        height={402}
        className="w-[full] h-[375px] object-cover bg-transparent border rounded-md"
      /> */}

      <div className="flex items-center justify-center">
        <div className="absolute mt-[-130px] mb-2  bg-white bg-opacity-75 rounded-xl p-6 max-w-xs md:max-w-full md:w-[350px]">
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
