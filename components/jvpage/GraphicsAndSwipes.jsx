import Link from "next/link";
import React from "react";

const GraphicsAndSwipes = () => {
  return (
    <div
      className={`${""} min-h-screen w-full flex items-center justify-center flex-col gap-[10vw] lg:gap-[5vw] text-black`}
      style={{
        background: 'url("/background/one.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${""} flex items-center justify-center flex-col gap-[5vw] lg:gap-[2vw]`}
      >
        <div className={`${""} text-[6vw] lg:text-[3.4vw]`}>
          Your High Converting Email Swipes
        </div>
        <div className={`${""} font-normal text-[4vw] lg:text-[2vw]`}>
          Click the link below to access the email swipe file!
        </div>
        <Link
          href="https://docs.google.com/document/d/1U3AqUWp_WhwDM6gJ59-g55DCz40aZyws58ZiYZy08wc/edit?usp=sharing"
          target="_blank"
          className={`${""} bg-red-600 px-[2vw] lg:py-[1vw] border-dashed border-[0.3vw] border-red-700 shadow-lg shadow-sky-200 text-white hover:text-[1.4em] duration-300`}
        >
          Click Here To Get Your Swipes
        </Link>
      </div>
    </div>
  );
};

export default GraphicsAndSwipes;
