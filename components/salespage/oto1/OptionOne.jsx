import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import FirstImage from "@/public/logo/file.png";
import { optionOneUpgradePoints } from "./constant";

const OptionOne = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white text-black flex-col px-2 md:px-4 lg:px-5 gap-2 py-10 relative shadow-lg rounded-lg shadow-blue-100 border border-gray-400">
      <div
        className={`${""} bg-yellow-500 px-5 py-2 text-black font-bold text-[20px] md:text-[23px] lg:text-[25px] rounded-full absolute top-[-20px]`}
      >
        Option #1
      </div>
      <div
        className={`${""} font-bold text-[25px] 500:text-[30px] lg:text-[40px]  text-center mt-5`}
      >
        Get The Upgrades
      </div>
      <div
        className={`${""} font-bold text-[25px] 500:text-[30px] lg:text-[40px]  text-center mb-5`}
      >
        One At A Time
      </div>
      <div>
        <Image src={FirstImage} width={600} height={400} />
      </div>
      <div
        className={`${""}  flex items-center justify-center w-full h-auto flex-col gap-5 text-normal text-[16px] 500:text-[18px] md:text-[20px]`}
      >
        {optionOneUpgradePoints?.map((d, i) => {
          return (
            <div
              key={i}
              className={`${""}  flex items-center justify-center gap-3`}
            >
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
