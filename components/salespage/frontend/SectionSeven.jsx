import { sectionSeven } from "@/constant/salespages";
import { leadingH, sectionWidth, textH, twoBlocks } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionSeven = () => {
  return (
    <div
      className={`${""} flex flex-col gap-10 md:gap-16 items-center justify-center p-10 bg-gradient-to-br  w-full py-20`}
      style={{
        background: "linear-gradient(to top right, blue, red)",
      }}
    >
      <div
        className={`w-[90%] lg:w-[80%] flex items-center justify-center flex-col gap-[5vw] lg:gap-[3vw] my-[5vw] lg:my-[3vw]`}
      >
        <header
          className={`${""} font-bold text-[4vw] lg:text-[2.5vw] text-white  text-center `}
        >
          Freelancers Are Charging Thousands of Dollars Worldwide to Create a
          Single Training Course for Their Clients!
        </header>
        <div
          className={`${""} grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full items-center justify-center  `}
        >
          {sectionSeven?.map((d, i) => {
            return (
              // <div
              //   className={`animateIt ${""} p-2  rounded-lg duration-300 ${twoBlocks} `}
              // >
              <Image
                src={d}
                width={500}
                height={500}
                key={i}
                className={`${""} w-full rounded-lg `}
              />
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
