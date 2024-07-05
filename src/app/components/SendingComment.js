"use client";
import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import ReplyModal from "./ReplyModal"; // Assuming you have a separate modal component
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { createReplyMegaNewsTalha } from "../../../src/graphql/mutations";
import { getMovieMegaNewsTalha } from "../../../src/graphql/queries";
const SendingComment = ({ text, userImage, userName, date, commentID,getBlogsData }) => {
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
    <div className="relative bg-[#F5F5F5]   mx-4 md:mx-8 lg:mx-64 xl:mx-[400px]  mt-2 rounded-lg p-4 ">
      <div className="flex ">
        <div className="rounded-xl w-full h-auto mt-6 flex flex-col md:flex-row">
          <div className="flex items-start md:items-center w-full md:w-auto">
            <StorageImage
              className="w-20 h-20 object-cover bg-transparent border rounded-xl"
              imgKey={userImage || "UserAvatar.png"}
            />
            <div className="ml-3">
              <h1 className="text-sm font-bold text-black mb-5     mt-1">
                {userName}
              </h1>
              <h1 className="text-sm text-[#3E3232BF]/75">{date}</h1>
            </div>
          </div>
          <div
            className="bg-[#3E32320D]/5 flex px-3  md:mt-0 md:ml-auto rounded-xl h-10 items-center cursor-pointer"
            onClick={handleReply}
          >
            <ReactSVG
              className="text-3xl mr-2 fill-[#3E323280]"
              src="/svgs/sharesvg.svg"
            />
            <h1 className="text-[#3E3232BF]/75 text-[12px]">Reply</h1>
          </div>
        </div>
      </div>
      <p className="text-[#000000BF]/75 text-sm mt-4 md:mt-6">{text}</p>

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

export default SendingComment;
