"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactSVG } from "react-svg";
import { Auth } from "aws-amplify";
import { StorageImage } from "@aws-amplify/ui-react-storage";

const Header = ({ imgurl, name }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isAnotherDropdownOpen, setIsAnotherDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State for profile dropdown
  const router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log("User data Attr: ", user.attributes.picture);
        setUserData(user);
      } catch (error) {
        console.error("Error getting user data: ", error);
      }
    };
    getUserData();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePagesHover = () => {
    setIsPagesOpen(true);
  };

  const handlePagesLeave = () => {
    setIsPagesOpen(false);
  };

  const handleAnotherDropdownHover = () => {
    setIsAnotherDropdownOpen(true);
  };

  const handleAnotherDropdownLeave = () => {
    setIsAnotherDropdownOpen(false);
  };

  const handleUserPicClick = () => {
    const userId = userData?.attributes?.sub;
    if (userId) {
      router.push(`/profile/${userId}`);
    }
  };

  const handleProfileMenuHover = () => {
    setIsProfileMenuOpen(true);
  };

  const handleProfileMenuLeave = () => {
    setIsProfileMenuOpen(false);
  };

  return (
    <header className="bg-white text-[#FC4308] pt-4 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center relative">
        <Link href="/home"> 
          <div className="text-lg font-bold w-36">Mega News.</div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="ml-16 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="md:flex md:ml-16 md:space-x-4">
          <li
            className="flex relative"
            onMouseEnter={handlePagesHover}
            onMouseLeave={handlePagesLeave}
          >
            <Link
              href="/"
              className="block text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              Categories
            </Link>
            <ReactSVG className="mt-1 ml-2" src="/svgs/dropdown.svg" />
            {isPagesOpen && (
              <div
                className="absolute left-0 mt-6 w-64 h-36 bg-white shadow-lg rounded-lg border border-gray-200"
                onMouseEnter={handlePagesHover}
                onMouseLeave={handlePagesLeave}
              >
                <ul className="py-2 flex flex-col">
                  <li>
                    <Link
                      href="/page1"
                      className="block px-4 py-2 text-[#3E3232] hover:bg-gray-100"
                    >
                      Page 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/page2"
                      className="block px-4 py-2 text-[#3E3232] hover:bg-gray-100"
                    >
                      Page 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/page3"
                      className="block px-4 py-2 text-[#3E3232] hover:bg-gray-100"
                    >
                      Page 3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="flex relative"
            onMouseEnter={handleAnotherDropdownHover}
            onMouseLeave={handleAnotherDropdownLeave}
          >
            <Link
              href="/"
              className="block text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              Pages
            </Link>
            <ReactSVG className="mt-1 ml-2" src="/svgs/dropdown.svg" />
            {isAnotherDropdownOpen && (
              <div
                className="absolute left-0 mt-6 w-64 h-36 bg-white shadow-lg rounded-lg border border-gray-200"
                onMouseEnter={handleAnotherDropdownHover}
                onMouseLeave={handleAnotherDropdownLeave}
              >
                <ul className="py-2 flex flex-col">
                  <li>
                    <Link
                      href="/section1"
                      className="block px-4 py-2 text-[#3E3232] hover:bg-gray-100"
                    >
                      Section 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/section2"
                      className="block px-4 py-2 text-[#3E3232] hover:bg-gray-100"
                    >
                      Section 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/section3"
                      className="block px-4 py-2 text-[#3E3232] hover:bg-gray-100"
                    >
                      Section 3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              href="/contactus"
              className="block w-24 text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block w-24 text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
            >
              About Us{" "}
            </Link>
          </li>
        </ul>

        <div className="col-1 flex justify-between bg-[#F5F5F5] w-96 h-12 rounded-xl md:ml-48">
          <ReactSVG className="mt-4 ml-4" src="/svgs/threedots.svg" />
          <input
            className="bg-[#F5F5F5] ml-[-32px]"
            placeholder="Enter your name..."
          ></input>
          <ReactSVG className="mt-3 ml-4 mr-4" src="/svgs/searchicon.svg" />
        </div>

        <div
          className="relative flex"
          onMouseEnter={handleProfileMenuHover}
          onMouseLeave={handleProfileMenuLeave}
        >
          <StorageImage
            className="ml-16 h-12 w-12 rounded-xl cursor-pointer"
            imgKey={userData?.attributes?.picture || "UserAvatar.png"}
            onClick={handleUserPicClick}
          />

          <Link
            href={`/profile/${userData?.attributes?.sub}`}
            className="block ml-4 mt-4 text-[#3E3232] md:inline-block hover:text-black hover:font-bold"
          >
            {userData?.attributes?.given_name}
          </Link>

          <ReactSVG className="mt-5 ml-2" src="/svgs/dropdown.svg" />

          {isProfileMenuOpen && (
            <div className="absolute left-0 ml-40 mt-12 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
              <ul className="py-2 flex flex-col">
                <li>
                  <Link
                    href={`/profile/${userData?.attributes?.sub}`}
                    className="block px-4 py-2 text-[#3E3232] hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      Auth.signOut()
                        .then(() => {
                          router.push("/auth/login");
                        })
                        .catch((error) => console.error("Error signing out: ", error));
                    }}
                    className="block w-full px-3 py-2 text-left ml-3 text-[#3E3232] hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="bg-[#F5F5F5] w-12 h-12 rounded-xl ml-16">
          <ReactSVG
            className="mt-3 flex justify-center items-center"
            src="/svgs/bookmarkicon.svg"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
