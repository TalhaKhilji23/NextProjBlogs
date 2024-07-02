"use client";
import React from 'react'
import { ReactSVG } from "react-svg";
import PostsComponent from "@/app/components/PostsComponent";


export default function Category() {
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
    <div className="px-4 md:px-16 lg:px-32 xl:px-64 2xl:px-52 py-4">
    <div className="h-12 w-full bg-[#F5F5F5]   rounded-xl flex justify-between items-center px-4">
      <div className="flex space-x-5">
        <h2 className="text-sm text-[#F81539]/75">New</h2>
        <h2 className="text-sm text-[#3E3232BF]/75">Trendy</h2>
        <h2 className="text-sm text-[#3E3232BF]/75">Popular</h2>
        <h2 className="text-sm text-[#3E3232BF]/75">Top</h2>
      </div>
      <div className="flex space-x-3">
        <ReactSVG className="w-6 h-6" src="/svgs/doticon.svg" />
        <ReactSVG className="w-6 h-6 bg-[#3E32320D]/5 px-2 rounded-2xl" src="/svgs/nindedots.svg" />
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
