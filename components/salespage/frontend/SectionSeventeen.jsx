import { sectionWidth } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionSeventeen = () => {
  return (
    <div
      className={`${""} flex items-center justify-center bg-white w-full h-auto relative `}
    >
      <div className="absolute inset-0 ">
        <Image
          src="/logo/background3.png"
          layout="fill"
          objectFit="cover"
          // alt="Background"
        />
      </div>
      <div
        className={`w-[90%] lg:w-[80%] flex items-center justify-center  flex-col lg:flex-row gap-10 py-10 z-10 sm:py-20`}
      >
        <div
          className={`${""} flex flex-col items-center justify-center gap-5 md:gap-10 text-black w-full `}
        >
          <div
            className={`${""} flex flex-col items-start justify-center gap-5  font-bold w-full`}
          >
            <div className={`${""} text-[6vw] lg:text-[3.5vw]`}>
              Best Part Is
            </div>
            <div>
              <span
                className={`${""} text-purple-500 text-[6vw] lg:text-[3.5vw]`}
              >
                No Upfront Cost
              </span>{" "}
            </div>
          </div>
          <div
            className={`${""} flex flex-col items-start justify-center gap-[5vw] lg:gap-[3vw] text-[4vw] lg:text-[1.5vw]`}
          >
            {data?.textData?.map((d, i) => {
              return <div key={i}>{d}</div>;
            })}
          </div>
        </div>
        <div className={`${""} w-full lg:w-[50%]`}>
          <Image
            src={data?.image}
            width={300}
            height={600}
            className={`${""} min-w-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSeventeen;

export const data = {
  image: "/logo/sideImage3.png",
  textData: [
    "We don't have coders, designers, tech support, or anything of that sort…",
    "We never invest in traffic in any way possible…",
    "Do you understand what that implies? We don’t spend a single penny upfront…",
    "And we retain 100% of the earnings we generate…",
  ],
};
