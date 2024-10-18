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
      <div className="flex items-center justify-center w-[90%] md:w-[95%] lg:w-[80%] flex-col gap-5 my-10">
        <header
          className={`${""} flex items-center justify-center flex-col gap-5 text-[25px] md:text-[30px] lg:text-[35px] font-bold`}
        >
          <div className={`${""} text-red-700`}>{header1}</div>
          <div className={`${""} text-[24px] md:text-[30px] text-black`}>
            {header2}
          </div>
        </header>
        <div
          className={`flex items-start justify-center flex-col gap-5 mt-5 ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className={`${""} w-full md:w-[40%] border-[2px] border-black p-1`}>
            <Image
              src={img}
              width={400}
              height={400}
              className={`${""} w-full`}
            />
          </div>

          <div className="flex items-center justify-center flex-col gap-3 w-full md:w-[60%] text-[20px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
