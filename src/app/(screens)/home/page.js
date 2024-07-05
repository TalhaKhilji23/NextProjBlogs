"use client";
import CategoryComponent from "@/app/components/categoryComponent";
import FeaturedComponent from "@/app/components/featuredComponent";
import BigFeatured from "@/app/components/BigFeatured";
import PostsComponent from "@/app/components/PostsComponent";
import React, { useState, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { useRouter } from "next/navigation";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  listMovieMegaNewsTalhas,
  getUserMegaNewsTalha,
} from "@/graphql/queries";
import Link from "next/link";

const categories = [
  { category: "Music", imageUrl: "/images/breakimg.jpeg" },
  { category: "Nature", imageUrl: "/images/riceimg.jpeg" },
  { category: "Food", imageUrl: "/images/foodpicture.jpeg" },
  { category: "Sports", imageUrl: "/images/saladimg.jpg" },
  { category: "Travel", imageUrl: "/images/userImage.png" },
  { category: "Sports", imageUrl: "/images/saladimg.jpg" },
  { category: "Travel", imageUrl: "/images/userImage.png" },
  { category: "Travel", imageUrl: "/images/userImage.png" },
];

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [blogsList, setBlogsList] = useState(null);
  const [categoryblogsList, setCategoryBlogsList] = useState(null);
  const [blogsList2, setBlogsList2] = useState(null);
  const [blogsList3, setBlogsList3] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [userID, setUserID] = useState(null);
  const [categoryClicked, setCategoryClicked] = useState(null);
  const [showDiv1, setShowDiv1] = useState(false); // Initially hide div1

  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const result = await API.graphql(
          graphqlOperation(listMovieMegaNewsTalhas)
        );
        console.log(
          "File GOT successfully>>>>",
          result?.data?.listMovieMegaNewsTalhas?.items
        );
        const blogs = result?.data?.listMovieMegaNewsTalhas?.items;
        setBlogsList(blogs);
        setBlogsList2(blogs.slice(0, 2));
        setBlogsList3(blogs.slice(0, 1));
        return result;
      } catch (error) {
        console.log("Error Fetching file: ", error);
        return null;
      }
    };
    getBlogsData();
  }, []);

  const handleCategories = async (category) => {
    console.log("Clicked", category);
    setCategoryClicked(category);

    setShowDiv1(true); // Show div1 when a category is clicked
    const result = await API.graphql(
      graphqlOperation(listMovieMegaNewsTalhas, {
        filter: {
          category: { eq: category },
        },
      })
    );
    console.log("Result", result.data.listMovieMegaNewsTalhas.items);
    setCategoryBlogsList(result.data.listMovieMegaNewsTalhas.items);
  };

  const handleBack = () => {
    setShowDiv1(false); // Hide div1 when back button is clicked
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="flex flex-wrap justify-center w-full items-center min-h-16 mb-12 sm:mb-24 md:mb-10 lg:mb-10 xl:mb-10 rounded-xl bg-[#F5F5F5]">
        {categories.map((post, index) => (
          <button key={index} onClick={() => handleCategories(post.category)}>
            <div className="m-2">
              <CategoryComponent
                imageUrl={post.imageUrl || "/default-image.png"}
                category={post.category || "Untitled"}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Conditionally render div1 only when showDiv1 is true */}
      {showDiv1 && (
        <div>
          <div className="flex justify-between">
            <div id="div1" className="flex">
              <div className="bg-red-700   h-4 w-1 mr-2 mt-1"></div>

              <p>Category : {categoryClicked}</p>
            </div>
            <button
              onClick={handleBack}
              className="ml-2  bg-red-500 w-36 h-10 rounded-lg text-white"
            >
              Back
            </button>
          </div>
          <div className="flex flex-wrap mt-4 -mx-2">
            {categoryblogsList?.map((post, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
              >
                <Link href={`/blogs/${post.id}`}>
                  <PostsComponent
                    imageUrl={post.movieimg || "/default-image.png"}
                    title={post.title || "Untitled"}
                    subtitle={post.movieexplanation || "No subtitle available"}
                    userImage={post.user.user_pic || "/default-user.png"}
                    userName={post.user.user_name || "Anonymous"}
                    date={new Date(post.createdAt).toLocaleDateString()}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <div id="div2" className={!showDiv1 ? "block" : "hidden"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          <div className="md:col-span-1 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogsList2?.map((item, index) => (
              <FeaturedComponent
                key={index}
                title={item?.title}
                imageUrl={item?.movieimg}
                subtitle={item.movieexplanation}
              />
            ))}
          </div>
          <div className="col-span-1">
            {blogsList3?.map((item, index) => (
              <BigFeatured
                key={index}
                title={item?.title}
                imageUrl={item?.movieimg}
                subtitle={item.movieexplanation}
              />
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="bg-red-600 h-2 w-1 mt-7"></div>
          <h1 className="text-left ml-2 mt-5 text-xl">Popular Posts</h1>
        </div>
        <div className="flex flex-wrap mt-4 -mx-2">
          {blogsList?.map((post, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
              <Link href={`/blogs/${post.id}`}>
                <PostsComponent
                  imageUrl={post.movieimg || "/default-image.png"}
                  title={post.title || "Untitled"}
                  subtitle={post.movieexplanation || "No subtitle available"}
                  userImage={post.user.user_pic || "/default-user.png"}
                  userName={post.user.user_name || "Anonymous"}
                  date={new Date(post.createdAt).toLocaleDateString()}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
