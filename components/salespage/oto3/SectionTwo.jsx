import Image from "next/image";
import React from "react";

const SectionTwo = ({
  header1,
  header2,
  img,
  children,
  reverse = false,
  bgBlue = false,
}) => {
  return (
    <section
      className={`${
        bgBlue && "bg-red-100"
      } h-auto w-full flex items-center justify-center flex-col`}
    >
      <div className="flex items-center justify-center w-[90%] flex-col gap-[5vw] lg:gap-[2.5vw] my-[10vw] lg:my-[5vw]">
        <header
          className={`${""} flex items-center justify-center flex-col gap-5 text-[5vw] lg:text-[2.5vw]  font-bold`}
        >
          <div className={`${""} text-red-700`}>{header1}</div>
          <div className={`${""} text-[4vw] lg:text-[2vw]  text-black`}>
            {header2}
          </div>
        </header>
        <div
          className={`flex items-start justify-center flex-col gap-[5vw] lg:gap-[2.5vw] mt-5 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div
            className={`${""} w-full lg:w-[40%] border-[2px] border-black p-1`}
          >
            <Image
              src={img}
              width={400}
              height={400}
              className={`${""} w-full`}
            />
          </div>

          <div className="flex items-center justify-center flex-col gap-3 w-full lg:w-[60%] text-[4vw] lg:text-[1.5vw] ">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
