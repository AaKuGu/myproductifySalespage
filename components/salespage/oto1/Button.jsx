"use client";

import { handleSmoothScroll } from "@/utils/utils";
import React from "react";

const Button = ({ data }) => {
  return (
    <a
      href={data?.link}
      onClick={handleSmoothScroll} // Attach the smooth scroll handler
      className={`bg-yellow-400 text-black px-5 py-2 font-bold text-[20px] md:text-[25px] lg:text-[28px] mb-5 md:mb-10 transition-transform transform hover:scale-105 cursor-pointer w-[90%] md:w-[70%] my-5 animate-bounce text-center`}
    >
      {data?.title}
    </a>
  );
};

export default Button;
