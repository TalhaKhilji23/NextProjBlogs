'use client';

import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { createContactUs } from "@/graphql/mutations";
const ContactUs = () => {
  // State variables for form inputs
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [explanation, setExplanation] = useState("");
  const [imageFile, setImageFile] = useState(null); // State for image file

  // Function to handle image file selection
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  // Function to handle image upload
  const handleImageUpload = () => {
    // Implement your image upload logic here
    if (imageFile) {
      console.log("Uploading image:", imageFile.name);
      // You can perform an API call or any other logic for image upload
    }
  };

  // Function to log current state
  const handleContactUs =async (event) => {
    console.log("Current State:");
    console.log("Subject:", subject);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Explanation:", explanation);
    console.log("Image File:", imageFile);

    event.preventDefault();
   

    try {
    // const user_id = await Auth.currentAuthenticatedUser();
     
    const contact = {
      id: "839047c4-b1b9-4424-847b-aa4008c47a5b",
      subject: subject,
      name: name,
      email: email,
      explanation: explanation,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    console.log("Contact Data:", contact);
    const result = await API.graphql(
      graphqlOperation(createContactUs,  contact )
    );
    console.log("Contact Created response:", result);

    if (result) {
      setEmail("");
      setExplanation("");
      setName("");
      setSubject("");
    }
      
    } catch (error) {
      console.log("Error creating contact :", error);
      console.error("Error creating contact:", error);
    }
  };

  return (
    <div className="text-[#3E3232] w-full px-4 md:px-8 lg:px-6 xl:px-2 2xl:px-4 mt-2 rounded-lg">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex xl:w-[2000px] flex-wrap">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center mt-20">
              <div className="bg-red-600 h-2 w-1 mt-2"></div>
              <h1 className="text-left ml-2 mt-7 text-lg mb-5">Contact Us.</h1>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="flex flex-wrap mb-4">
                  <div className="w-full lg:w-1/3 pr-2 mb-4 lg:mb-0">
                    <h2 className="text-[#3E3232]">Subject</h2>
                    <input
                      className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                      placeholder="Enter your title..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-1/3 pl-2 pr-2 mb-4 lg:mb-0">
                    <h2 className="text-[#3E3232]">Name</h2>
                    <input
                      className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                      placeholder="Enter your name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-1/3 pl-2">
                    <h2 className="text-[#3E3232]">Email</h2>
                    <input
                      className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex xl:w-[1600px] flex-wrap">
                <div className="w-full lg:w-2/3 pr-2 mb-4 lg:mb-0">
                  <h2 className="text-[#3E3232]">Explanation</h2>
                  <div className="bg-[#EDEDED] px-3 pt-2 rounded-xl mt-1">
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
                          className="w-1/2 sm:w-1/4 p-2"
                        >
                          <div className="bg-gray-100 rounded-xl flex items-center justify-center p-2">
                            <ReactSVG className="w-4 h-4 mr-2" src={item.src} />
                            <h4 className="text-sm text-[#3E3232BF]/75">
                              {item.label}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                    <textarea
                      className="bg-[#F5F5F5] w-full px-4 h-32 md:h-60 rounded-xl mt-2 resize-none"
                      placeholder="Write your explanation here..."
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full  lg:w-1/3 ml-[-20px] flex justify-center lg:justify-end items-center mt-4 lg:mt-6">
                  <div className="bg-[#F5F5F5]/75 w-full lg:w-96 rounded-xl h-96 flex flex-col justify-center items-center">
                    <ReactSVG className="mt-8" src="/svgs/bigpic.svg" />
                    <h1 className="text-center mt-2 text-[#3E3232BF]/75">Add Image</h1>
                    <label className="cursor-pointer w-32 h-10 rounded-xl border border-[#3E3232BF]/20 mt-4 flex justify-center items-center">
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageSelect}
                      />
                      <ReactSVG className="mr-2" src="/svgs/plus.svg" />
                      <div className="text-[#3E3232BF]/75">Select</div>
                    </label>
                    {imageFile && (
                      <div className="mt-4">
                        <p>Selected Image: {imageFile.name}</p>
                        <button className="bg-[#F81539BF]/75 rounded-xl px-4 py-2 text-white mt-2" onClick={handleImageUpload}>
                          Upload Image
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end xl:mr-[-55px] mt-10 mb-10 space-x-4">
          <div className="bg-[#F5F5F5] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/save.svg" />
            <h1 className="text-[#3E3232BF]">Draft</h1>
          </div>
          <div className="bg-[#F5F5F5] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/eye.svg" />
            <h1 className="text-[#3E3232BF]">Preview</h1>
          </div>
          <button onClick={handleContactUs} className="bg-[#F81539BF]/75 w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/plane.svg" />
            <h1 className="text-white">Public</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
