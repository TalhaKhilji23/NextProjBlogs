"use client";
import React, { useState, useEffect } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Link from "next/link";
import { Auth, API, graphqlOperation, Storage  } from "aws-amplify";
import { useRouter } from "next/navigation";
import { StorageImage } from '@aws-amplify/ui-react-storage';

 // Import useRouter hook from Next.js
export default function Register() {
  const router = useRouter(); // Initialize useRouter hook

  // Initialize state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bannerFile, setBannerFile] = useState(null);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [userData, setuserData] = useState(null);


 
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const handleChange2 = (e) => {
    const selectedFile2 = e.target.files[0];
    setFile2(selectedFile2);
  };

  const uploadImage = async () => {
    if (!file) {
      console.log("No file selected");
      return null;
    }
    try {
      const result = await Storage.put(file.name, file, {
        contentType: file.type,
      });
      console.log("File uploaded successfully", result.key);
      return result.key;
    } catch (error) {
      console.log("Error uploading file: ", error);
      return null;
    }
  };
  const uploadImage2 = async () => {
    if (!file2) {
      console.log("No file selected");
      return null;
    }
    try {
      const result = await Storage.put(file2.name, file2, {
        contentType: file2.type,
      });
      console.log("File uploaded successfully", result.key);
      return result.key;
    } catch (error) {
      console.log("Error uploading file: ", error);
      return null;
    }
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    if (file) {
        var imageKey = await uploadImage();
        if(imageKey){
            await setBannerFile(imageKey)


        }
        console.log("Banner Image Key:", imageKey);

      }


     

    if (file2) {
        var imageKey2 = await uploadImage2();

        if(imageKey2){
          await setProfilePictureFile(imageKey2)


        }
        console.log("Profile Image Key:", imageKey2);


      }
    try {
     if(file && file2){
      const res = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          given_name: firstName,
          family_name: lastName,
          preferred_username: userName,
          picture: imageKey2,
          "custom:bannerpic": imageKey,
          "custom:explanation": explanation,
          // Adjust attributes as needed
        },
      });
      console.log("Sign up response:", res);
      if(res){
        router.push("/auth/confirmregister"); // Navigate to /signup page
      }

     }
     
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section className="h-full bg-neutral-200 flex items-center justify-center">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 ">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Mega News.
                      </h4>
                    </div>


                    <form onSubmit={handleSignUp}>
                      <p className="text-center  mb-10">
                        Sign up to Enjoy our services
                      </p>
                      {/* <!--Username input--> */}
                      <div className="flex w-full ">
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Enter First Name"
                          className="mb-4 border w-full  h-10 rounded-md border-gray-300 px-5"
                        />
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Enter Last Name"
                          className="mb-4 border ml-5 h-10 w-full  rounded-md border-gray-300 px-5"
                        />
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Enter User Name"
                          className="mb-4 border ml-5 h-10 w-full  rounded-md border-gray-300 px-5"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email"
                          className="mb-4 border h-10 rounded-md border-gray-300 px-5"
                        />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password"
                          className="mb-4 border h-10 rounded-md border-gray-300 px-5"
                        />
                        <h1>Add Banner</h1>
                        <input
                          type="file"
                          id="file-input"
                          onChange={handleChange}
                          className="mb-4  pt-1 border h-10 rounded-md border-gray-300 px-5"
                        />
                        

                        {/* <input
                          type="file"
                          onChange={(e) => setBannerFile(e.target.files[0])}
                          className="mb-4  pt-1 border h-10 rounded-md border-gray-300 px-5"
                        /> */}
                        <h1>Add Profile picture</h1>
                        <input
                          type="file"
                          onChange={handleChange2}

                          className="mb-4  pt-1 border h-10 rounded-md border-gray-300 px-5"
                        />

                        <textarea
                          value={explanation}
                          onChange={(e) => setExplanation(e.target.value)}
                          placeholder="Enter explanation"
                          className="mb-4 border pt-2 h-40 rounded-md border-gray-300 px-5"
                        />
                      </div>

                      <div className="mb-12 pb-1 pt-1 text-center">
                        
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Sign Up
                          </button>

                        {/* <!--Forgot password link--> */}
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an account?</p>

                        <Link href="/auth/login">
                          <TERipple rippleColor="light">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                              Login
                            </button>
                          </TERipple>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
