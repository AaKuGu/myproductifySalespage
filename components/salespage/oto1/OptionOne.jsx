import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { optionOneUpgradePoints } from "./constant";

const OptionOne = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto bg-red-200 text-black flex-col px-[0.5vw] lg:px-[0.3vw] relative shadow-lg rounded-lg shadow-blue-100 border border-gray-400 py-[10vw] lg:py-[5vw]">
      <div
        className={`${""} text-[5vw] lg:text-[2vw] bg-yellow-500 px-[2vw] lg:px-[1vw] py-[0.5vw] lg:py-[0.3vw] text-black font-bold rounded-full absolute bottom-[100%]`}
      >
        Option #1
      </div>
      <div
        className={`${""} font-bold text-[6vw] lg:text-[3.5vw]  text-center `}
      >
        Get The Upgrades
      </div>
      <div
        className={`${""} font-bold text-[5vw] lg:text-[2.5vw]  text-center mb-5`}
      >
        One At A Time
      </div>
      <div>
        <Image
          src="/logo/banner1.png"
          width={1000}
          height={500}
          className={`${""} w-full lg:w-[30vw]`}
        />
      </div>
      <div
        className={`${""}  flex items-center justify-center w-full h-auto flex-col gap-[3vw] lg:gap-[1vw] text-normal text-[4vw] lg:text-[1.5vw]  p-[0.5vw] `}
      >
        {optionOneUpgradePoints?.map((d, i) => {
          return (
            <div key={i} className={`${""}  flex items-center justify-center `}>
              <span className={`${""} text-purple-500`}>
                <IoCheckmarkDoneCircleSharp />
              </span>
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionOne;
