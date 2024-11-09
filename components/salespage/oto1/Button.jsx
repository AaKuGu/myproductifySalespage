"use client";

import { handleSmoothScroll } from "@/utils/utils";
import React from "react";

const Button = ({ data }) => {
  return (
    <a
      href={data?.link}
      onClick={handleSmoothScroll} // Attach the smooth scroll handler
      className={`bg-yellow-400 text-black px-5 py-[2vw] lg:py-[1vw] font-bold text-[4vw] lg:text-[1.5vw] mb-5 lg:mb-10 transition-transform transform hover:scale-105 cursor-pointer w-[90%] lg:w-[70%] my-5 animate-bounce text-center`}
    >
      {data?.title}
    </a>
  );
};

export default Button;
