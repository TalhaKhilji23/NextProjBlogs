"use client";
import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import PostsComponent from "@/app/components/PostsComponent";
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { createMovieMegaNewsTalha } from "@/graphql/mutations";
import {
  listMovieMegaNewsTalhas,
  getUserMegaNewsTalha,
} from "@/graphql/queries";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import AddBlogComponent from "@/app/components/AddBlogComponent";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [blogsList, setBlogsList] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [userID, setUserID] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const result = await API.graphql(
          graphqlOperation(getUserMegaNewsTalha, { id: user?.attributes?.sub })
        );
        console.log(
          "File GOT successfully>>>>",
          result?.data?.getUserMegaNewsTalha
        );
        setUserID(result?.data?.getUserMegaNewsTalha);
        setBlogsList(result?.data?.getUserMegaNewsTalha?.movies?.items);
        return result;
      } catch (error) {
        console.log("Error Fetching file: ", error);
        return null;
      }
    };
    getBlogsData();
  }, []);

  const handleProfileEdit = () => {
    const userId = userID?.id;
    if (userId) {
      router.push(`/profileedit/${userId}`);
    }
  };

  return (
    <div className="px-4 md:px-6 lg:px-10 xl:px-52 2xl:px-60 py-4">
      <div className="h-64 w-full bg-[#F5F5F5] rounded-xl flex flex-col justify-between items-center p-4">
        <StorageImage
          className="w-full h-32 object-cover rounded-t-xl"
          imgKey={userID?.banner_pic || "UserAvatar.png"}
        />
        {/* <img src='/images/cover.png' className='w-full h-32 object-cover rounded-t-xl' /> */}
        <div className="flex justify-between w-full mt-4">
          <div className="flex items-center space-x-5">
            <StorageImage
              className="h-[50px] w-[50px] md:h-[75px] md:w-[75px] rounded-xl"
              imgKey={userID?.user_pic || "UserAvatar.png"}
            />
            <h2 className="text-sm md:text-base text-[#3E3232]">
              {userID?.user_name}
            </h2>
          </div>
          <div className="flex space-x-5 mt-7">
            <h2
              className={`text-sm cursor-pointer ${
                !showAddBlog ? "text-[#3E3232]" : "text-gray-400"
              }`}
              onClick={() => setShowAddBlog(false)}
            >
              Blogs
            </h2>
            <h2
              className={`text-sm cursor-pointer ${
                showAddBlog ? "text-[#3E3232]" : "text-gray-400"
              }`}
              onClick={() => setShowAddBlog(true)}
            >
              Create Blog
            </h2>
          </div>
          <div
            className="flex items-center mt-5 h-10 border-[#E6E6E6] border px-3 py-1 rounded-xl cursor-pointer"
            onClick={handleProfileEdit}
          >
            <ReactSVG
              className="w-4 h-4 md:w-6 md:h-6 mt-2"
              src="/svgs/user.svg"
            />
            <h3 className="text-[#F81539BF]/75 text-sm ml-2">Edit Profile</h3>
          </div>
        </div>
      </div>

      <div>
        {showAddBlog ? (
          <AddBlogComponent />
        ) : (
          <div>
            <div className="flex flex-wrap mt-4 -mx-2">
              {blogsList?.map((post, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                >
                  <PostsComponent
                    imageUrl={post.movieimg || "/default-image.png"}
                    title={post.title || "Untitled"}
                    subtitle={post.movieexplanation || "No subtitle available"}
                    userImage={post.user.user_pic || "/default-user.png"}
                    userName={post.user.user_name || "Anonymous"}
                    date={new Date(post.createdAt).toLocaleDateString()}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
