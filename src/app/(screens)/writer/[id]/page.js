"use client";
import React from 'react'
import { ReactSVG } from "react-svg";
import PostsComponent from "@/app/components/PostsComponent";


export default function Writer() {
    const postsData = [
  { 
    imageUrl: "/images/boat.png",
    title: "Post 1",
    subtitle: "This is the first post",
    userImage: "/images/userImage.png",
    userName: "User 1",
    date: "July 1, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-44 2xl:px-64 py-4">
      <div className="h-64 w-full bg-[#F5F5F5] rounded-xl flex flex-col justify-between items-center p-4">
        <img src='/images/cover.png' className='w-full h-32 object-cover rounded-t-xl'/>
        <div className='flex justify-between w-full mt-4'>
          <div className="flex items-center space-x-5">
            <img src='/images/user2.png' className='h-[50px] w-[50px] md:h-[75px] md:w-[75px] rounded-xl'/>
            <h2 className="text-sm md:text-base text-[#3E3232]">Louis Hoebregts</h2>
          </div>
          <div className="flex space-x-5 mt-7 ml-[-120px]">
            <h2 className="text-sm text-[#3E3232]">Blogs</h2>
            <h2 className="text-sm text-[#3E3232]">Create Blog</h2>
          </div>
          <div className="flex items-center mt-5 h-10 bg-[#F81539BF]/75 border px-3 py-1 rounded-xl">
            {/* <ReactSVG className="w-4 h-4 md:w-6 md:h-6 mt-2" src="/svgs/user.svg" /> */}
            <h3 className='text-white text-sm ml-2'>+ Follow</h3>
          </div>
        </div>
      </div>

      <div className="flex mt-10 items-center">
        <div className="bg-red-600 h-2 w-1"></div>
        <h1 className="text-left ml-2 text-lg">Category: Sport</h1>
      </div>

      <div className="flex flex-wrap mt-4 -mx-2">
        {postsData.map((post, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <PostsComponent
              imageUrl={post.imageUrl}
              title={post.title}
              subtitle={post.subtitle}
              userImage={post.userImage}
              userName={post.userName}
              date={post.date}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
