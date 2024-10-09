import React from "react";
import SectionOne from "./SectionOne";

const Oto1 = () => {
  return (
    <div
      className={`${""} w-full min-h-screen flex items-center justify-center flex-col `}
    >
      <div
        className={`${""} w-full text-center bg-yellow-800 text-white font-bold text-lg md:text-xl lg:text-2xl py-3`}
      >
        Your Order Is Not Complete - Don't Close This Page
      </div>
      <SectionOne />
    </div>
  );
};

export default Oto1;
