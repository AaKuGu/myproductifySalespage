import Image from "next/image";
import React from "react";
import { FaHandPointRight } from "react-icons/fa6";

const SectionTweleve = ({ data, index }) => {
  const { header, arrayOfData, imageLink, width, height } = data;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 w-full p-[2vw] lg:p-[1vw] py-[10vw] lg:py-[5vw]  text-black `}
    >
      <header
        className={`font-bold text-[6vw] lg:text-[3.3vw] font-ubuntu italic underline text-center`}
      >
        {header}
      </header>
      <div
        className={`${
          index % 2 == 0
            ? "flex-col lg:flex-row"
            : "flex-col lg:flex-row-reverse"
        } flex items-start justify-center gap-[5vw] lg:gap-[2.5vw] w-full px-5 lg:px-10 `}
      >
        <div
          className={`flex flex-col items-start justify-center text-[4vw] lg:text-[2vw] gap-5 lg:gap-10 text-start lg:w-[40%] b`}
        >
          {arrayOfData?.map((d, i) => {
            return (
              <div
                key={i}
                className={`text-start w-full flex items-center justify-center lg:gap-[1vw] gap-[2vw] `}
              >
                <span className={`${""} text-sky-400`}>
                  <FaHandPointRight />
                </span>
                <span>{d}</span>
              </div>
            );
          })}
        </div>
        <div
          className={`flex items-center justify-center w-full  lg:w-[30%] subtle-rotate`}
        >
          <Image
            src={imageLink}
            width={500}
            height={500}
            className={`p-[6px] border-[3px] border-gray-700 w-full h-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTweleve;
