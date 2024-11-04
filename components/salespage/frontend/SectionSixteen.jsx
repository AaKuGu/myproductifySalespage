import { sectionWidth } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionSixteen = () => {
  return (
    <div
      className={`${""} flex items-center justify-center bg-black w-full sm:min-h-screen h-auto`}
    >
      <div
        className={`flex items-center justify-center  flex-col lg:flex-row gap-10 py-10 sm:py-20 w-[90%] lg:w-[80%] `}
      >
        <div className={`${""} w-full lg:w-[40%] `}>
          <Image
            src="/logo/girl3.png"
            width={500}
            height={650}
            className={`${""} min-w-full`}
          />
        </div>
        <div
          className={`${""} flex flex-col items-center justify-center gap-5 md:gap-10 text-white w-full lg:w-[60%]`}
        >
          <div
            className={`${""} flex flex-col items-start justify-center gap-[5vw] lg:gap-[3vw] font-bold w-full`}
          >
            <div className={`${""} text-[6vw] lg:text-[3.5vw]`}>
              We Save Your Money
            </div>
            <div className={`${""} text-[4vw] lg:text-[1.5vw]`}>
              And Let You Build{" "}
              <span className={`${""} text-purple-500`}>
                Stunning Course Pages Without Paying To Any Freelancers
              </span>{" "}
            </div>
          </div>
          <div
            className={`${""} flex flex-col items-start justify-center gap-[4vw] lg:gap-[2vw] text-[4vw] lg:text-[1.5vw]`}
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
