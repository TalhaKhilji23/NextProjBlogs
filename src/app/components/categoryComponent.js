// components/CategoryComponent.js

import React from "react";
import Image from 'next/image';
import { StorageImage } from "@aws-amplify/ui-react-storage";

const CategoryComponent = ({ category, imageUrl }) => {
  return (
   
        <div  className="" style={{ width: '170px', height: '48px'  }}>
      <div className="relative " style={{ width: '100%', height: '100%' }}>

      {/* <StorageImage
          className="rounded-lg bg-cover  w-40 h-10"
          imgKey={imageUrl || "UserAvatar.png"}
        /> */}
        <Image
          src={imageUrl}
          alt={category}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div  className="mt-[-48px] text-center rounded-lg backdrop-blur-sm z-50 relative text-white">
        <p className="py-3 "> 
            {category}

        </p>
      </div>
      
      
    </div>
  );  
};

export default CategoryComponent;
