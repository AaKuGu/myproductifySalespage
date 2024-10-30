import { bigDiv, pSmall, sectionWidth, textH, textS } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionNine = () => {
  return (
    <div
      className={` flex items-center justify-center w-full h-auto md:mih-h-screen bg-black text-white`}
    >
      <div
        className={`${""} w-[90%] md:w-[95%] flex flex-col md:flex-row gap-10 md:gap-5 py-10 md:py-20 my-[5vw] lg:my-[3vw] relative`}
      > 
        <Image
          src="/logo/money.png"
          width={500}
          height={500}
          className={`${""} w-full`}
        />
        <div
          className={`${""} flex flex-col gap-10 items-center justify-center w-full `}
        >
          <header
            className={` text-[6vw] lg:text-[3vw] font-bold text-start w-full font-kaushanScript underline`}
          >
            Each One Of Them  
          </header>
          <div
            className={`${""} w-full flex flex-col items-start justify-center gap-[2vw]`}
          >
            {sectionNineData?.map((d, i) => {
              return (
                <div
                  key={i}
                  className={`text-[4vw] lg:text-[1.5vw] text-start w-full`}
                >
                  {d}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;

const sectionNineData = [
  "Generate massive profits every month",
  "By offering top-quality courses",
  "Now, you have the chance to create even BETTER courses…",
  "In any niche you choose...",
  "With just a single click...",
];
