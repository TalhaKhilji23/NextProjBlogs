"use client";
import React, { useState, useEffect } from "react";
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { ReactSVG } from "react-svg";
import { createMovieMegaNewsTalha } from "../../../src/graphql/mutations";

const AddBlogComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    category: "",
    explanation: "",
    image: null,
  });
  const [userID, setUserID] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log("User data Attr in blog: ", user.attributes.sub);
        setUserID(user.attributes.sub);
      } catch (error) {
        console.error("Error getting user data: ", error);
      }
    };
    getUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
    console.log(`${name}:`, files ? files[0] : value);

    if (files && files[0]) {
      setImagePreview(URL.createObjectURL(files[0]));
    }
  };

  const uploadImage = async () => {
    if (!formData.image) {
      console.log("No file selected");
      return null;
    }
    try {
      const result = await Storage.put(formData.image.name, formData.image, {
        contentType: formData.image.type,
      });
      console.log("File uploaded successfully>>>>", result.key);
      return result.key;
    } catch (error) {
      console.log("Error uploading file: ", error);
      return null;
    }
  };

  const handleCreateMovie = async (event) => {
    event.preventDefault();
    let imageKey = null;
    if (formData.image) {
      imageKey = await uploadImage();
      console.log("Banner Image Key:", imageKey);
    }

    try {
      if (imageKey) {
        const movie = {
          title: formData.title,
          tag: formData.tags,
          movieimg: imageKey,
          category: formData.category,
          movieexplanation: formData.explanation,
          userId: userID,
          userMegaNewsTalhaMoviesId: userID,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        console.log("Movie Data:", movie);
        const result = await API.graphql(
          graphqlOperation(createMovieMegaNewsTalha, { input: movie })
        );
        console.log("Movie Created response:", result);

        if (result.data.createMovieMegaNewsTalha) {
          setFormData({
            title: "",
            tags: "",
            explanation: "",
            image: null,
          });
          setImagePreview(null);
        }
      }
    } catch (error) {
      console.log("Error creating movie:", error);
      console.error("Error creating movie:", error);
    }
  };

  return (
    <div className="text-[#3E3232] px-4 md:px-8 lg:px-6 xl:px-2 2xl:px-4 mt-2 rounded-lg">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center mt-20">
              <div className="bg-red-600 h-2 w-1 mt-2"></div>
              <h1 className="text-left ml-2 mt-7 text-lg mb-5">Add A Blog</h1>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="w-full md:w-1/2 mb-4 md:mr-4 lg:mr-8">
                <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                  <div className="w-full">
                    <h2 className="text-[#3E3232]">Title</h2>
                    <input
                      className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                      placeholder="Enter your title..."
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                    <h2 className="text-[#3E3232]">Category</h2>
                    <input
                      className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                      placeholder="Enter your Category..."
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <h2 className="text-[#3E3232]">Add Tags</h2>
                    <input
                      className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                      placeholder="Enter tags..."
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div>
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
                      className="bg-[#F5F5F5] w-full px-4 h-32 pt-3 md:h-60 rounded-xl mt-2 resize-none"
                      placeholder="Write your explanation here..."
                      name="explanation"
                      value={formData.explanation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            <div className="bg-[#F5F5F5]/75 w-72 sm:w-80 md:w-96 rounded-xl h-80 sm:h-96 flex flex-col justify-center items-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Selected"
                  className="mt-8 px-4 rounded-3xl h-full w-full object-cover"
                />
              ) : (
                <>
                  <ReactSVG className="mt-8" src="/svgs/bigpic.svg" />
                  <h1 className="text-center mt-2 text-[#3E3232BF]/75">
                    Add Image
                  </h1>
                </>
              )}
              <div className="w-32 h-10 rounded-xl border border-[#3E3232BF]/20 mt-4 flex justify-center items-center">
                <input
                  type="file"
                  className="hidden"
                  id="imageUpload"
                  name="image"
                  onChange={handleChange}
                />
                <label
                  htmlFor="imageUpload"
                  className="cursor-pointer flex justify-center items-center"
                >
                  <ReactSVG className="mr-2" src="/svgs/plus.svg" />
                  <div className="text-[#3E3232BF]/75">Select</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10 lg:mt-[-40px] mb-10 lg:mb-0 lg:mr-[-30px] space-x-4">
          <div className="bg-[#F5F5F5] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/save.svg" />
            <h1 className="text-[#3E3232BF]">Draft</h1>
          </div>
          <div className="bg-[#F5F5F5] w-32 rounded-xl h-10 flex justify-center items-center">
            <ReactSVG className="mr-2" src="/svgs/eye.svg" />
            <h1 className="text-[#3E3232BF]">Preview</h1>
          </div>
          <button
            onClick={handleCreateMovie}
            className="bg-[#F81539BF]/75 w-32 rounded-xl h-10 flex justify-center items-center"
          >
            <ReactSVG className="mr-2" src="/svgs/plane.svg" />
            <h1 className="text-white">Public</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlogComponent;
