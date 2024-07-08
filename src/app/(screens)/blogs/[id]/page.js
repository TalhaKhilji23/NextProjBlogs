"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import SendingComment from "@/app/components/SendingComment";
import ReceivingComment from "@/app/components/ReceivingComment";
import CommentForm from "@/app/components/CommentForm";
import Modal from "@/app/components/Modal";
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { StorageImage } from "@aws-amplify/ui-react-storage";

import { getMovieMegaNewsTalha } from "@/graphql/queries";

function Detail({ params }) {
  console.log(params.id);
  const blog_id = params.id;

  const [blogsList, setBlogsList] = useState(null);
  const [userID, setUserID] = useState(null);
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const getBlogsData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const result = await API.graphql(
        graphqlOperation(getMovieMegaNewsTalha, { id: blog_id })
      );
      console.log(
        "File Got successfully>>>>",
        result?.data?.getMovieMegaNewsTalha
      );
      setBlogsList(result?.data?.getMovieMegaNewsTalha);
      return result;
    } catch (error) {
      console.log("Error Fetching file: ", error);
      return null;
    }
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  const openModal = (comment) => {
    setSelectedComment(comment);
    setIsModalShowing(true);
  };

  const closeModal = () => {
    setIsModalShowing(false);
    setSelectedComment(null);
  };

  return (
    <div className="px-4 md:px-8 lg:px-1 xl:px-1">
      <div>
        <div className="max-w-[1228px] ml-[220px] h-[604px] mx-auto bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-black text-[22px] text-center pt-7 px-4 md:px-8 lg:px-16 xl:px-32">
            {blogsList?.title}
          </h1>
        </div>

        <div className="max-w-[1192px]  w-full mx-auto mt-[-500px] ml-60">
          <div className="relative rounded-lg overflow-hidden">
            <StorageImage
              className="rounded-lg object-cover w-full mb-32 h-[600px]"
              imgKey={blogsList?.movieimg || "UserAvatar.png"}
            />
          </div>
        </div>

        <div className="flex justify-end items-end mt-[-830px] mb-[630px]">
          <div className="flex bg-[#F5F5F5] w-[360px] mr-28 h-[100px] rounded-xl">
            <div className="flex">
              <StorageImage
                className="w-20 h-20 mt-3 ml-3 rounded-xl"
                imgKey={blogsList?.user?.user_pic || "UserAvatar.png"}
              />
              <div>
                <h1 className="mt-3 ml-3">{blogsList?.user?.first_name}</h1>
                <div className="bg-[#F81539BF]/75 w-24 h-10 rounded-xl mt-2 ml-5">
                  <h2 className="text-white text-center pt-[10px] text-sm">
                    + Follow
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-7 px-4 md:px-[600px] ml:[-40px]">
        <div className="flex items-center mb-4 md:mb-0 md:mr-4 ">
          <ReactSVG className="w-6 h-6" src="/svgs/calender.svg" />
          <h1 className="text-gray-600 ml-3 text-sm">July 14, 2022</h1>
        </div>
        <div className="flex items-center mb-4 md:mb-0 md:mr-4">
          <ReactSVG className="w-6 h-6" src="/svgs/comment.svg" />
          <h1 className="text-gray-600 ml-3 text-sm">Comments: 35</h1>
        </div>
        <div className="flex items-center">
          <ReactSVG className="w-6 h-6" src="/svgs/file.svg" />
          <h1 className="text-gray-600 ml-3 text-sm">Category: Sport</h1>
        </div>
      </div>

      <div className="mt-7 px-4 md:px-0 lg:px-0 xl:px-0 w-full md:max-w-[1228px] lg:max-w-[1228px] xl:max-w-[1228px] ml-0 md:ml-[180px] lg:ml-[200px] xl:ml-[230px]">
        <div className="flex items-center">
          <h1 className="text-[#3E3232] ml-3 text-lg mt-[3px] font-semibold">
            {blogsList?.title}
          </h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-[#3E3232]/75 ml-3 text-sm mt-[15px] leading-7">
            {blogsList?.movieexplanation}
            <br />
            {blogsList?.movieexplanation}
          </h1>
        </div>
      </div>

      <div className="max-w-[872px] mx-auto ml-[370px] mt-[40px]">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            className="rounded-lg"
            width={872}
            height={486}
            layout="responsive"
            objectFit="cover"
            src="/images/boatscol.png"
            alt="Boat"
          />
        </div>
      </div>

      <div className="mt-7 px-4 md:px-0 lg:px-0 xl:px-0 w-full md:max-w-[1228px] lg:max-w-[1228px] xl:max-w-[1228px] ml-0 md:ml-[100px] lg:ml-[150px] xl:ml-[200px]">
        <div className="flex items-center">
          <h1 className="text-[#3E3232] ml-3 text-lg mt-[3px] font-semibold">
            {blogsList?.title}
          </h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-[#3E3232]/75 ml-3 text-sm mt-[15px] leading-7">
            {blogsList?.movieexplanation}
            <br />
            <div className="mt-3"></div>
            {blogsList?.movieexplanation}
          </h1>
        </div>
      </div>

      <div className="flex ml-52 mt-10">
        <div className="bg-red-600 h-2 w-1 mt-[10px]"></div>
        <h1 className="text-left ml-2 text-lg mb-5">Comments</h1>
      </div>

      {/* Scrollable container for comments */}
      <div className="ml-[-120px] max-h-[600px] overflow-y-auto">
        {/* Mapping through comments data */}
        {blogsList?.comments?.items.map((comment) => (
          <div key={comment.id}>
            <SendingComment
              text={comment.comment}
              userImage={comment.user.user_pic}
              userName={comment.user.user_name}
              date={new Date(comment.user.createdAt).toLocaleDateString()} // Format date if available
              commentID={comment.id}
              getBlogsData={getBlogsData}
            />
            <button
              className="text-blue-500 mt-2 ml-[1000px]"
              onClick={() => {
                console.log("View Replies button clicked");
                openModal(comment);
              }}
            >
              View Replies
            </button>
          </div>
        ))}
      </div>

      {/* Modal for displaying receiving comments */}
      <Modal isShowing={isModalShowing}>
        <div className="bg-[#FAF9F6] relative mx-4 md:mx-8 lg:mx-16 xl:mx-[500px] mt-[-370px] rounded-lg pt-1 pb-2">
          <button
            className="text-red-700 text-2xl ml-1 w-16 h-10 mb-10"
            onClick={closeModal}
          >
            x
          </button>
          <div className="max-h-[600px] overflow-y-auto">
            {/* Mapping through receiving comments */}
            {selectedComment?.replies.items.length === 0 ? (
              <div className="text-center mt-4 w-[1000px] h-[1000px] text-gray-600">
                No replies yet!
              </div>
            ) : (
              selectedComment?.replies.items.map((receivingComment) => (
                <ReceivingComment
                  key={receivingComment.id}
                  text={receivingComment.comment}
                  userImage={receivingComment.user.user_pic}
                  userName={receivingComment.user.user_name}
                  date={new Date(
                    receivingComment.user.createdAt
                  ).toLocaleDateString()}
                  commentID={selectedComment.id}
                  getBlogsData={getBlogsData} // Format date if available
                />
              ))
            )}
          </div>
        </div>
      </Modal>

      {/* Form for adding comments */}
      <CommentForm blogId={blog_id} />
    </div>
  );
}

export default Detail;
