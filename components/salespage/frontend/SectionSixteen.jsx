import { sectionWidth } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionSixteen = () => {
  return (
    <div
      className={`${""} flex items-center justify-center bg-black w-full sm:min-h-screen h-auto`}
    >
      <div className={`${sectionWidth} sm:flex-row gap-10 py-10 sm:py-20`}>
        <div className={`${""} w-full`}>
          <Image
            src="https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_1280.png"
            width={300}
            height={600}
            className={`${""} min-w-full`}
          />
        </div>
        <div
          className={`${""} flex flex-col items-center justify-center gap-5 md:gap-10 text-white w-full `}
        >
          <div
            className={`${""} flex flex-col items-start justify-center gap-5 text-[22px] sm:text-[24px] lg:text-[26px] font-bold w-full`}
          >
            <div>We Save Your Money</div>
            <div>
              And Let You Build{" "}
              <span className={`${""} text-purple-500`}>
                Stunning Course Pages Without Paying To Any Freelancers
              </span>{" "}
            </div>
          </div>
          <div
            className={`${""} flex flex-col items-start justify-center gap-10 text-[18px] md:text-[20px] lg:text-[22px]`}
          >
            {data?.map((d, i) => {
              return <div key={i}>{d}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSixteen;

export const data = [
  "Absolutely…",
  "We focus zero time on complicated setups or design…",
  "My Productify handles everything for us effortlessly…",
  "And helps us launch our courses with ease, attracting new students daily…",
];
