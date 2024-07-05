'use client';

import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import {updateUserMegaNewsTalha} from "@/graphql/mutations";
const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    oldPassword: '',
    password: '',
    email: '',
    explanation: '',
    bannerImage: null, // State for banner image
    userImage: null // State for user image
  });

  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, files } = e.target;

    // Check if the input is for file upload (image)
    if (files && files.length > 0) {
      const reader = new FileReader();
      const file = files[0];

      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          [name]: {
            file: file,
            previewURL: reader.result // This is the base64 encoded image data
          }
        }));
      };

      reader.readAsDataURL(file); // Read the image file as Data URL
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: e.target.value
      }));
    }
  };
  const handleUpdateUser = async (event) => {
    event.preventDefault();
   

    try {
      const user_id = await Auth.currentAuthenticatedUser();
     
    const userModel = {
      id: user_id.attributes.sub,
      first_name: formData.firstName,
      last_name: formData.lastName,
      user_name: formData.userName,
      email: formData.email,

      explanation: formData.explanation,
      // userMegaNewsTalhaUserCommentsId: user_id.attributes.sub,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    console.log("User Data:", userModel);
    const result = await API.graphql(
      graphqlOperation(updateUserMegaNewsTalha, { input: userModel })
    );
    console.log("Movie Created response:", result);

    if (result) {
      setFormData("");
    }
      
    } catch (error) {
      console.log("Error creating movie:", error);
      console.error("Error creating movie:", error);
    }
  };

  return (
    <div className="text-[#3E3232] px-4 md:px-8 lg:px-6 xl:px-2 2xl:px-4  rounded-lg">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center mt-1">
              <div className="bg-red-600 h-2 w-1 mt-2"></div>
              <h1 className="text-left ml-2 mt-7 text-lg mb-5">Contact Us.</h1>
            </div>
            <div className="flex flex-wrap  w-[1200px]">
              {/* Line 1 */}
              <div className="w-full flex flex-wrap mb-4">
                <div className="flex-1 min-w-[250px] mb-4">
                  <h2 className="text-[#3E3232]">First Name</h2>
                  <input  
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your First Name..."
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1 ml-3 min-w-[250px] mb-4">
                  <h2 className="text-[#3E3232]">Last Name</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your Last Name..."
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1  ml-3 min-w-[250px] mb-4">
                  <h2 className="text-[#3E3232]">User Name</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your User Name..."
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Line 2 */}
              <div className="w-full flex flex-wrap mb-4">
                <div className="flex-1 min-w-[300px] mb-4">
                  <h2 className="text-[#3E3232]">Old Password</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your Old Password..."
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1  ml-3 min-w-[300px] mb-4">
                  <h2 className="text-[#3E3232]">Password</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your password..."
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1  ml-3 min-w-[300px] mb-4">
                  <h2 className="text-[#3E3232]">Email</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your email..."
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Line 3 */}
              <div className="w-full mb-4">
                <h2 className="text-[#3E3232]">Add Banner</h2>
                <div className="bg-[#F5F5F5] w-full px-4 h-36 rounded-xl mt-2 flex justify-center items-center">
                  {formData.bannerImage && (
                    <img src={formData.bannerImage.previewURL} alt="Banner Preview" className="max-h-36 rounded-xl" style={{ maxWidth: '100%' }} />
                  )}
                  <div className="ml-5">
                    <h1 className="text-center mt-2 text-sm text-[#3E3232BF]/75">
                      Drop image here, paste or
                    </h1>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                      name="bannerImage"
                      className="hidden"
                      id="bannerImage"
                    />
                    <label
                      htmlFor="bannerImage"
                      className="w-32 h-10 rounded-xl border border-[#3E3232BF]/20 mt-4 flex justify-center items-center cursor-pointer"
                    >
                      <ReactSVG className="mr-2" src="/svgs/plus.svg" />
                      <div className="text-[#3E3232BF]/75">Select</div>
                    </label>
                  </div>
                </div>
              </div>
              {/* Line 4 */}
              <div className="w-full flex flex-wrap lg:flex-nowrap mb-4 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex-1 mb-4">
                  <h2 className="text-[#3E3232]">Explanation</h2>
                  <div className="bg-[#EDEDED] px-3 pt-2 rounded-xl mt-1 w-[800px]">
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
                          className="w-[104px] ml-3 mt-1 pt-1 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
                        >
                          <ReactSVG className="w-4 h-4 mr-2" src={item.src} />
                          <h4 className="text-sm text-[#3E3232BF]/75">
                            {item.label}
                          </h4>
                        </div>
                      ))}
                    </div>
                    <textarea
                      className="bg-[#F5F5F5] w-full px-4 h-32 pt-3 md:h-80 rounded-xl mt-2 resize-none"
                      placeholder="Write your explanation here..."
                      name="explanation"
                      value={formData.explanation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex-1 mb-4">
                  <h2 className="text-[#3E3232]">Add Image</h2>
                  <div className="bg-[#F5F5F5]/75 w-[400px] rounded-xl h-96 flex flex-col justify-center items-center">
                    {formData.userImage && (
                      <img src={formData.userImage.previewURL} alt="User Image Preview" className="max-h-96 rounded-xl" style={{ maxWidth: '100%' }} />
                    )}
                    <h1 className="text-center mt-2 text-[#3E3232BF]/75">
                      Add Image
                    </h1>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                      name="userImage"
                      className="hidden"
                      id="userImage"
                    />
                    <label
                      htmlFor="userImage"
                      className="w-32 h-10 rounded-xl border border-[#3E3232BF]/20 mt-4 flex justify-center items-center cursor-pointer"
                    >
                      <ReactSVG className="mr-2" src="/svgs/plus.svg" />
                      <div className="text-[#3E3232BF]/75">Select</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="2"
            className=" "
          >
            {/* Right side content can be added here if needed */}
        

          </div>
        </div>
        <div className="flex justify-end mt-10 mr-[50px] lg:mt-0 mb-10 lg:mb-0 space-x-4">
          <div className="bg-[#F5F5F5] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/save.svg" />
            <h1 className="text-[#3E3232BF]">Draft</h1>
          </div>
          <div className="bg-[#F5F5F5] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/see.svg" />
            <h1 className="text-[#3E3232BF]">See</h1>
          </div>
          <button onClick={handleUpdateUser} className="bg-[#b61515] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/see.svg" />
            <h1 className="text-[#f8efefbf]">submit</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
