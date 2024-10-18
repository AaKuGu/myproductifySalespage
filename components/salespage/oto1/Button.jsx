import React from "react";

const Button = ({ data }) => {
  return (
    <div
      className={`bg-yellow-400 text-black px-5 py-2 font-bold text-[20px] md:text-[25px] lg:text-[28px] mb-5 md:mb-10 transition-transform transform hover:scale-105 cursor-pointer w-[90%] md:w-[70%] my-5 animate-bounce`}
    >
      {data}
    </div>
  );
};

export default Button;
