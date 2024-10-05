import Image from "next/image";
import React from "react";

const SectionTweleve = ({ data, index }) => {
  const { header, arrayOfData, imageLink, width, height } = data;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 py-10 w-full px-1 400:px-3 md:px-[40px]  text-black `}
    >
      <header
        className={`font-bold text-3xl md:text-4xl lg:text-5xl font-ubuntu italic underline text-center`}
      >
        {header}
      </header>
      <div
        className={`${
          index % 2 == 0
            ? "flex-col lg:flex-row"
            : "flex-col lg:flex-row-reverse"
        } flex items-start justify-center gap-10 w-full px-5 md:px-10 `}
      >
        <div
          className={`flex flex-col items-start justify-center text-lg md:text-xl lg:text-2xl gap-5 md:gap-10 text-start`}
        >
          {arrayOfData?.map((d, i) => {
            return (
              <div key={i} className={`text-start w-full`}>
                {d}
              </div>
            );
          })}
        </div>
        <div
          className={`flex items-center justify-center w-full md:w-[50%] lg:w-[30%] subtle-rotate`}
        >
          <Image
            src={imageLink}
            width={250}
            height={height}
            className={`p-[6px] border-[3px] border-gray-700 w-full h-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTweleve;
