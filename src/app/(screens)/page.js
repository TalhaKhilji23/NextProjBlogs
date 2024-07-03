"use client";
import Image from "next/image";
import Loader from "../components/Loader";
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main className="bg-white h-[700px]">
     
      <Loader/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
}
