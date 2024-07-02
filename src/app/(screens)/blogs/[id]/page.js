"use client";
import React from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import SendingComment from "@/app/components/SendingComment";
import ReceivingComment from "@/app/components/ReceivingComment";
import CommentForm from "@/app/components/CommentForm";

function Detail({ params }) {
  console.log(params.id);

  // Sample comment data array
  const comments = [
    {
      id: 1,
      text: "TOf course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      userImage: "/images/userImage.png",
      userName: "User 1",
      date: "July 1, 2024",
    },
    {
      id: 2,
      text: "Another interesting comment text goes here. This could be about any topic related to the content.",
      userImage: "/images/userImage.png",
      userName: "User 2",
      date: "July 2, 2024",
    },
    // Add more comments as needed
  ];
  const comments2 = [
    {
      id: 1,
      text: "TOf course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
      userImage: "/images/userImage.png",
      userName: "User 1",
      date: "July 1, 2024",
    },
    {
      id: 2,
      text: "Another interesting comment text goes here. This could be about any topic related to the content.",
      userImage: "/images/userImage.png",
      userName: "User 2",
      date: "July 2, 2024",
    },
    // Add more comments as needed
  ];

  return (
    <div className="px-4 md:px-8 lg:px-1 xl:px-1">
      <div>
        <div className="max-w-[1228px] ml-[220px] h-[604px] mx-auto bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-black text-[22px] text-center pt-7 px-4 md:px-8 lg:px-16 xl:px-32">
            How to Spend the Perfect Day on Croatia’s Most Magical Island
          </h1>
        </div>

        <div className="max-w-[1192px]  w-full mx-auto mt-[-500px] ml-60">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              className="rounded-lg "
              width={1072}
              height={398}
              layout="responsive"
              objectFit="cover"
              src="/images/boat.png"
              alt="Boat"
            />
          </div>
        </div>

        <div className="flex justify-end items-end mt-[-770px] mb-[730px]  ">
          <div className="flex bg-[#F5F5F5] w-[360px]  mr-28 h-[100px] rounded-xl">
            <div className="flex">
              <img
                src="/images/userImage.png"
                className="w-20 h-20 mt-3 ml-3"
              />

              <div>
                <h1 className="mt-3 ml-3">Louis Hoebregts</h1>
                <div className="bg-[#F81539BF]/75 w-24 h-10 rounded-xl mt-2 ml-5">

                    <h2 className="text-white text-center pt-[10px] text-sm">+ Follow</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-7 px-4 md:px-0 lg:px-0 xl:px-0">
        <div className="flex items-center">
          <ReactSVG className="mt-1 ml-[500px]" src="/svgs/calender.svg" />
          <h1 className="text-[#3E3232BF]/75 ml-3 text-sm mt-[3px]">
            July 14, 2022
          </h1>
        </div>
        <div className="flex items-center">
          <ReactSVG className="mt-1 ml-[-400px]" src="/svgs/comment.svg" />
          <h1 className="text-[#3E3232BF]/75 ml-3 text-sm mt-[3px]">
            Comments: 35
          </h1>
        </div>
        <div className="flex items-center">
          <ReactSVG className="mt-1 ml-[-700px]" src="/svgs/file.svg" />
          <h1 className="text-[#3E3232BF]/75 ml-3 text-sm mt-[3px]">
            Category: Sport
          </h1>
        </div>
      </div>

      <div className="mt-7 px-4 md:px-0 lg:px-0 xl:px-0 w-full md:max-w-[1228px] lg:max-w-[1228px] xl:max-w-[1228px] ml-0 md:ml-[180px] lg:ml-[200px] xl:ml-[230px]">
        <div className="flex items-center">
          <h1 className="text-[#3E3232] ml-3 text-lg mt-[3px] font-semibold">
            Don’t wait. The purpose of our lives is to be happy!
          </h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-[#3E3232]/75 ml-3 text-sm mt-[15px] leading-7">
            Upon arrival, your senses will be rewarded with the pleasant scent
            of lemongrass oil used to clean the natural wood found throughout
            the room, creating a relaxing atmosphere within the space.
            <br />A wonderful serenity has taken possession of my entire soul,
            like these sweet mornings of spring which I enjoy with my whole
            heart. I am alone, and feel the charm of existence in this spot,
            which was created for the bliss of souls like mine. I am so happy,
            my dear friend, so absorbed in the exquisite.
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
            Not how long, but how well you have lived is the main thing.
          </h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-[#3E3232]/75 ml-3 text-sm mt-[15px] leading-7">
            When you are ready to indulge your sense of excitement, check out
            the range of water-sports opportunities at the resort’s on-site
            water-sports center. Want to leave your stress on the water? The
            resort has kayaks, paddleboards, or the low-key pedal boats.
            Snorkeling equipment is available as well, so you can experience the
            ever-changing undersea environment. Not only do visitors to a bed
            and breakfast get a unique perspective on the place they are
            visiting, they have options for special packages not available in
            other hotel settings. Bed and breakfasts can partner easily with
            local businesses for a smoothly organized and highly personalized
            vacation experience. The Fife and Drum Inn offers options such as
            the Historic Triangle Package that includes three nights at the Inn,
            breakfasts, and admissions to historic Williamsburg, Jamestown, and
            Yorktown. Bed and breakfasts also lend themselves to romance.
            <br />
            <div className="mt-3"></div>
            Part of the charm of a bed and breakfast is the uniqueness; art,
            décor, and food are integrated to create a complete experience. For
            example, the Fife and Drum retains the colonial feel of the area in
            all its guest rooms. Special features include antique furnishings,
            elegant four-poster beds in some guest rooms, as well folk art and
            artifacts from the restoration period of the historic area available
            for guests to enjoy.
          </h1>
        </div>
      </div>

      <div className="flex ml-52 mt-10">
        <div className="bg-red-600 h-2 w-1   mt-[10px]"></div>
        <h1 className="text-left ml-2  text-lg mb-5">Comments</h1>
      </div>

      <div className="ml-[-120px]">
        {/* Mapping through comments data */}
        {comments.map((comment) => (
          <SendingComment
            key={comment.id}
            text={comment.text}
            userImage={comment.userImage}
            userName={comment.userName}
            date={comment.date}
          />
        ))}
      </div>
      <div className="bg-[#FAF9F6] relative  mx-4 md:mx-8 lg:mx-16 xl:mx-[500px] mt-[-70px] rounded-lg pt-1 pb-2">
        {comments.map((comment) => (
          <ReceivingComment
            key={comment.id}
            text={comment.text}
            userImage={comment.userImage}
            userName={comment.userName}
            date={comment.date}
          />
        ))}
      </div>

      <CommentForm />
    </div>
  );
}

export default Detail;
