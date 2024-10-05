import { sectionWidth } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionSeventeen = () => {
  return (
    <div
      className={`${""} flex items-center justify-center bg-gray-700 w-full sm:min-h-screen h-auto`}
    >
      <div className={`${sectionWidth} sm:flex-row gap-10 py-10 sm:py-20`}>
        <div
          className={`${""} flex flex-col items-center justify-center gap-5 md:gap-10 text-white w-full `}
        >
          <div
            className={`${""} flex flex-col items-start justify-center gap-5 text-[22px] sm:text-[24px] lg:text-[26px] font-bold w-full`}
          >
            <div>Best Part Is</div>
            <div>
              <span
                className={`${""} text-[22px] sm:text-[26px] md:text-[23px] lg:text-[29px] text-purple-500`}
              >
                No Upfront Cost
              </span>{" "}
            </div>
          </div>
          <div
            className={`${""} flex flex-col items-start justify-center gap-10 text-[18px] md:text-[20px] lg:text-[22px]`}
          >
            {data?.textData?.map((d, i) => {
              return <div key={i}>{d}</div>;
            })}
          </div>
        </div>
        <div className={`${""} w-full sm:w-[50%]`}>
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
  image: "https://cdn.pixabay.com/photo/2016/06/15/10/39/man-1458632_1280.png",
  textData: [
    "We don't have coders, designers, tech support, or anything of that sort…",
    "We never invest in traffic in any way possible…",
    "Do you understand what that implies? We don’t spend a single penny upfront…",
    "And we retain 100% of the earnings we generate…",
  ],
};
