"use client";
import React from "react";
import { ReactSVG } from "react-svg";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <ReactSVG className="mt-3 mr-3" src="/svgs/error.svg" />
  
    <h1 className="text-center">
      OOPS! Page you&apos;re looking for doesn&apos;t exist. Please use search for help
    </h1>
  </div>
  

  );
}
