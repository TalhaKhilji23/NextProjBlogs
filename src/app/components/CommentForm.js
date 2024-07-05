'use client';

import React, { useState, useEffect } from "react";
import { ReactSVG } from 'react-svg';
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { createCommentMegaNewsTalha } from "../../../src/graphql/mutations";

const CommentForm = ({blogId}) => {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  // Log state changes
  useEffect(() => {
    console.log({ name, website, email, comment });
  }, [name, website, email, comment]);

  const handleComment = async (event) => {
    event.preventDefault();
   

    try {
      const user_id = await Auth.currentAuthenticatedUser();
     
    const movie = {
      comment: comment,
      userType: "Sender",
      userId: user_id.attributes.sub,
      movieMegaNewsTalhaCommentsId: blogId,
      // userMegaNewsTalhaUserCommentsId: user_id.attributes.sub,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    console.log("Movie Data:", movie);
    const result = await API.graphql(
      graphqlOperation(createCommentMegaNewsTalha, { input: movie })
    );
    console.log("Movie Created response:", result);

    if (result.data.createCommentMegaNewsTalha) {
      setComment("");
      setEmail("");
      setWebsite("");
      setName("");
    }
      
    } catch (error) {
      console.log("Error creating movie:", error);
      console.error("Error creating movie:", error);
    }
  };



  return (
    <div className="text-[#3E3232] mx-auto px-4 md:px-8 lg:px-16 xl:px-36 mt-2 rounded-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mt-20">
              <div className="bg-red-600 h-2 w-1 mt-2"></div>
              <h1 className="text-left ml-2 mt-7 text-lg mb-5">Add a Comment</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="w-full lg:w-[50%] mb-4 lg:mb-0">
                <div className="mb-5">
                  <h2 className="text-[#3E3232]">Name</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <h2 className="text-[#3E3232]">Website</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your website..."
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <h2 className="text-[#3E3232]">Email</h2>
                  <input
                    className="bg-[#F5F5F5] w-full px-4 h-12 rounded-xl mt-2"
                    placeholder="Enter your Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-[50%]">
                <div>
                  <h2 className="text-[#3E3232]">Comment</h2>
                  <textarea
                    className="bg-[#F5F5F5] w-full px-4 h-32 md:h-60 pt-3 rounded-xl mt-2 resize-none"
                    placeholder="Write your comment here..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-10">
          <button onClick={handleComment} className="bg-[#F81539BF]/75 w-52 rounded-xl h-10 flex items-center justify-center">
            <ReactSVG className="mr-3" src="/svgs/commenticon.svg" />
            <h1 className="text-white">Send Comment</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
