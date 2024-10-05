import { bigDiv, textH, textS } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionEight = () => {
  return (
    <div
      className={`${""} flex flex-col gap-10 items-center justify-center bg-green-100 w-full min-h-screen py-10  overflow-hidden`}
    >
      <div
        className={`${""} flex flex-col w-[90%] md:w-[95%] py-10 md:py-20 gap-5 sm:gap-7 md:gap-[50px]  items-center justify-center font-kaushanScript`}
      >
        <header
          className={`${""} font-extrabold text-[22px] md:text-[26px] tracking-wide`}
        >
          From This
        </header>
        <div
          className={`w-[130%] md:w-[100%] lg:w-[80%] flex items-center justify-center my-5 overflow-hidden `}
          style={
            {
              // background: "url('/normal/neon6.png')",
              // backgroundSize: "cover",
            }
          }
        >
          <Image
            src="/logo/step2.png"
            width={1000}
            height={600}
            className={`${""} pulse w-full`}
          />
        </div>
        <header
          className={`${""} font-extrabold text-[22px] md:text-[26px] tracking-wide my-5 font-montserrat`}
        >
          To This
        </header>
        <div
          className={`w-[130%] md:w-[100%] lg:w-[80%] flex items-center justify-center`}
          style={{
            background: "url('/normal/neon6.png')",
            backgroundSize: "cover",
          }}
        >
          <Image
            src="/logo/step3.png"
            width={1000}
            height={600}
            className={`${""} min-w-[130%] md:w-[70%] pulse`}
            // className={`${""} min-w-[1000px] max-w-[1000px] h-[1000px]`}
          />
        </div>
      </div>
      <div
        className={`${""} my-5 text-orange-600 text-2xl font-kaushanScript `}
      >
        In &nbsp;&nbsp;Less &nbsp;&nbsp; Than &nbsp;&nbsp; A &nbsp;&nbsp; Minute
      </div>
      <div
        className={`${""} flex flex-col gap-10 py-10 items-center justify-center bg-white w-full`}
      >
        <div
          className={`${textH} text-center  text-gray-500 font-bold lg:font-normal`}
        >
          My Productify Allows Us To Compete With
        </div>
        <div
          className={`${textS} font-bold flex flex-wrap gap-10 items-center justify-center text-gray-500 font-ptSans`}
        >
          {sectionEightData?.map((d, i) => {
            return <div key={i}>{d}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionEight;

const sectionEightData = [
  "Coursera",
  "lynda.com",
  "FutureLearn",
  "Udemy",
  "edX",
  "SkillShare",
];
