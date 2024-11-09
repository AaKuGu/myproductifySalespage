import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
// import  from "@/public/logo/file.png";
import { optionOneUpgradePoints, optionTwoUpgradePoints } from "./constant";

const OptionTwo = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto bg-blue-900 text-white flex-col px-[1vw] lg:px-[0.3vw] relative shadow-lg rounded-lg shadow-blue-100 border border-gray-400 py-[10vw] lg:py-[5vw] gap-[5vw] lg:gap-[2.5vw]">
      <div
        className={`${""} text-[5vw] lg:text-[2vw] bg-yellow-500 px-[2vw] lg:px-[1vw] py-[0.5vw] lg:py-[0.3vw] text-black font-bold rounded-full absolute bottom-[100%]`}
      >
        Option #2
      </div>
      <div
        className={`${""} font-bold text-[6vw] lg:text-[3.5vw] text-center mt-5`}
      >
        Get The `Bundle Version`
      </div>
      <div
        className={`${""} border-white border-[0.5vw] lg:border-[0.2vw] p-[0.5vw] lg:p-[0.4vw] `}
      >
        <Image
          src="/logo/bundleBanner.png"
          width={600}
          height={400}
          className={`${""} w-full lg:w-[30vw]`}
        />
      </div>
      <div className={`${""}text-[4vw] lg:text-[1.5vw] text-center`}>
        This Option Gives You Access To ALL Of The Upgrades At A{" "}
        <b>Highly-Discounted</b> ONE TIME Price:
      </div>
      <div className={`${""} font-bold text-[5vw] lg:text-[1.5vw] text-center`}>
        Here’s What’s Included With The ‘Bundle Upgrade’:
      </div>
      <div
        className={`${""}  flex items-center justify-center w-full h-auto flex-col gap-5 text-normal text-[3vw] lg:text-[1.5vw] `}
      >
        <div
          className={`${""} flex items-start justify-center flex-col gap-5 w-[85%] `}
        >
          {optionTwoUpgradePoints?.map((d, i) => {
            return (
              <div
                key={i}
                className={`${""}  flex items-center justify-center gap-3`}
              >
                <span className={`${""} text-purple-500`}>
                  <IoCheckmarkDoneCircleSharp />
                </span>
                Upgrade #{i + 1} - {d}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OptionTwo;
