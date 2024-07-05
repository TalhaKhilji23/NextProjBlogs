"use client";
import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import ReplyModal from "./ReplyModal"; // Assuming you have a separate modal component
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { createReplyMegaNewsTalha } from "../../../src/graphql/mutations";
import { getMovieMegaNewsTalha } from "../../../src/graphql/queries";

const ReceivingComment = ({ text, userImage, userName, date, commentID,getBlogsData }) => {
  console.log("commentID", commentID);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [blogsList, setBlogsList] = useState(null);
  const [userID, setUserID] = useState(null);
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleReply = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="relative px-10  mx-4 md:mx-1 mt-[-20px] lg:mx-1 xl:mx-1  rounded-lg">
      <div className="flex items-center justify-center">
        <div className="rounded-xl w-full md:w-[95%] lg:w-[85%] xl:w-[1128px] h-[267px] mt-6">
          <div className="flex justify-between">
            <div className="flex">
              <StorageImage
                className="w-20 h-20 object-cover bg-transparent border rounded-xl"
                imgKey={userImage || "UserAvatar.png"}
              />
              <div>
                <h1 className="text-left text-sm font-bold text-black ml-3 mt-3">
                  {userName}
                </h1>
                <h1 className="text-left text-sm text-[#3E3232BF]/75 ml-3 mt-1">
                  {date}
                </h1>
              </div>
            </div>
            <button
              className="bg-[#3E32320D]/5 flex  h-10 px-3 mt-3 mr-3 rounded-xl cursor-pointer"
              onClick={handleReply}
            >
              <ReactSVG
                className="mt-3 text-3xl mr-2 fill-[#3E323280] ml-2"
                src="/svgs/sharesvg.svg"
              />
              <h1 className="mt-[10px]  text-[#3E3232BF]/75 text-[12px] mr-3">
                Reply
              </h1>
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-[#000000BF]/75 mt-[-170px] text-sm px-4 md:px-10 xl:px-2  pb-20 ">
        {text}
      </h1>
      <h1 className="text-[#000000BF]/75  text-sm px-4 md:px-10 xl:px-80  pb-20 border-b border-gray-200 "></h1>

      {/* Modal for replying */}
      {isModalOpen && (
        <ReplyModal
          closeModal={closeModal}
          parentCommentId={123}
          onSubmitReply={async (replyText) => {
            const handleComment = async (event) => {
              try {
                const user_id = await Auth.currentAuthenticatedUser();

                const reply = {
                  comment: replyText,
                  userType: "Sender",
                  userId: user_id.attributes.sub,
                  commentMegaNewsTalhaRepliesId: commentID,
                  // userMegaNewsTalhaUserCommentsId: user_id.attributes.sub,
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                };
                console.log("reply Data:", reply);
                const result = await API.graphql(
                  graphqlOperation(createReplyMegaNewsTalha, { input: reply })
                );
                console.log("Movie Created response:", result);

                if (result.data.createReplyMegaNewsTalha) {
                  setReplyText("");
                  getBlogsData();
                }
              } catch (error) {
                console.log("Error creating movie:", error);
                console.error("Error creating movie:", error);
              }
            };
            handleComment();
            // Handle submit reply logic here
            console.log("Submitted reply:", replyText);
            setIsModalOpen(false); // Close modal after submission
          }}
        />
      )}
    </div>
  );
};

export default ReceivingComment;
