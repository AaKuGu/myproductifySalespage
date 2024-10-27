import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
// import  from "@/public/logo/file.png";
import { optionOneUpgradePoints, optionTwoUpgradePoints } from "./constant";

const OptionTwo = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-purple-900 text-white flex-col px-2 md:px-4 lg:px-5 gap-10 py-10 relative ">
      <div
        className={`${""} bg-yellow-500 px-5 py-2 text-black font-bold text-[20px] md:text-[23px] lg:text-[25px] rounded-full absolute top-[-20px]`}
      >
        Option #2
      </div>
      <div
        className={`${""} font-bold text-[25px] 500:text-[30px] lg:text-[40px]  text-center mt-5`}
      >
        Get The `Bundle Version`
      </div>
      <div>
        <Image src="/background/BundleHeroImage.png" width={600} height={400} />
      </div>
      <div
        className={`${""} text-[14px] 400:text-[16px] md:text-[18px] lg:text-[20px] text-center`}
      >
        This Option Gives You Access To ALL Of The Upgrades At A
        <b>Highly-Discounted</b> ONE TIME Price:
      </div>
      <div className={`${""} font-bold text-[20px] md:text-[24px] text-center`}>
        Here’s What’s Included With The ‘Bundle Upgrade’:
      </div>
      <div
        className={`${""}  flex items-center justify-center w-full h-auto flex-col gap-5 text-normal text-[16px] 500:text-[18px] md:text-[20px] `}
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
                upgrade #{i + 1} - {d}
              </div>
            );
          })}
        </div>
      </div>
    
    </div>
  );
};

export default OptionTwo;
