import Image from "next/image";
import React from "react";
// import "@/components/authenticated/css/animation.css";

const ActualSteps = ({ d, i }) => {
  const { stepNo, title, desc, image } = d;
  return (
    <div
      className={`${
        i % 2 == 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
      } flex items-center justify-center gap-5 py-10 w-full h-auto  text-xl md:text-2xl lg:text-4xl  rounded-2xl button-hover overflow-hidden px-2 md:px-5 `}
      style={{ boxShadow: "0px 0px 25px 5px #ccf2ff" }}
    >
      <div
        className={`${""} rounded-xl w-full overflow-hidden flex items-center justify-center`}
      >
        <Image
          src={image}
          width={550}
          height={370}
          className={`${""} w-[140%] h-auto max-w-[600px] max-h-[400px] `}
        />
      </div>
      <div
        className={`${""} flex items-end justify-center flex-col gap-3  w-full`}
      >
        <div
          className={`${""} text-purple-600 font-teko text-2xl md:text-3xl lg:text-4xl`}
        >
          {stepNo}
        </div>
        <div
          className={`${""} font-extrabold text-purple-700 text-xl md:text-2xl lg:text-3xl`}
        >
          {title}
        </div>
        <div
          className={`${""} w-full h-auto flex items-center justify-center md:justify-end`}
        >
          <p
            className={`${""} mt-5 text-[16px] 400:text-lg md:text-xl lg:text-2xl font-roboto text-center md:text-start w-[80%] font-bold `}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActualSteps;
