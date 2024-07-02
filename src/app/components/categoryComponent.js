// components/CategoryComponent.js

import React from "react";
import Image from 'next/image';

const CategoryComponent = ({ category, imageUrl }) => {
  return (
   
        <div  style={{ width: '170px', height: '48px' }}>
      <div className="relative" style={{ width: '100%', height: '100%' }}>
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
