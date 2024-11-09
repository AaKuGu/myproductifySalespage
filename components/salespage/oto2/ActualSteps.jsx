import Image from "next/image";
import React from "react";
// import "@/components/authenticated/css/animation.css";

const ActualSteps = ({ d, i }) => {
  const { stepNo, title, desc, image } = d;
  return (
    <div
      className={`${
        i % 2 == 0 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
      } flex items-center justify-center gap-5 w-full h-auto   rounded-2xl button-hover overflow-hidden px-[1.5vw]  py-[5vw] lg:py-[0.3vw]`}
      style={{ boxShadow: "0px 0px 25px 5px #ccf2ff" }}
    >
      <div
        className={`${""} rounded-xl w-full overflow-hidden flex items-center justify-center`}
      >
        <Image
          src={image}
          width={550}
          height={370}
          className={`${""} w-[140%] lg:w-[40vw] `}
        />
      </div>
      <div
        className={`${""} flex items-end justify-center flex-col gap-[5vw] lg:gap-[3vw]  w-full`}
      >
        <div
          className={`${""} text-purple-600 font-teko text-[6vw] lg:text-[3.5vw]`}
        >
          {stepNo}
        </div>
        <div
          className={`${""} font-extrabold text-purple-700 text-[5vw] lg:text-[2.5vw] `}
        >
          {title}
        </div>
        <div
          className={`${""} w-full h-auto flex items-center justify-center lg:justify-end`}
        >
          <p
            className={`${""} mt-5 text-[4vw] lg:text-[1.5vw]
  font-roboto text-center lg:text-start w-[80%] font-bold lg:leading-[2.5vw] leading-[7vw] `}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActualSteps;
