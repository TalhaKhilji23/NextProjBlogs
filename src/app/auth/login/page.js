"use client";
import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Link from "next/link";
import { Auth } from "aws-amplify";

import { useRouter } from "next/navigation";

export default function LOGIN() {
  // Initialize state variables
  const router = useRouter(); // Initialize useRouter hook

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (event) => {
    event.preventDefault();
    console.log("Email Login:", email);
    console.log("Password Login :", password);

    try {
      const response = await Auth.signIn({
        username: email,
        password: password,
      });


      console.log("response>>",response)
      // On successful signup, navigate to confirm signup
      if(response){
        router.push("/home"); // Navigate to /signup page
    } // Use absolute path
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };


  return (
    <section className="h-full bg-neutral-200 flex items-center justify-center">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg">
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

                    <form onSubmit={handleLogIn}>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <div className="flex flex-col">
                        <input
                          type="text"
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
                              Log in
                            </button>

                        {/* <!--Forgot password link--> */}
                        <Link href="/auth/forgotpassword">
                          <div className="text-end text-blue-500">
                            <p href="#!">Forgot password?</p>
                          </div>
                        </Link>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <Link href="/auth/register">
                          <TERipple rippleColor="light">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                            >
                              Register
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
