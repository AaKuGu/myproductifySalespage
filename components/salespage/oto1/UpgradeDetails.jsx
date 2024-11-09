import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const UpgradeDetails = ({
  upgradeNumber,
  title,
  titleValue,
  subTitle,
  image,
  version,
  data,
}) => {
  return (
    <div
      className="h-auto w-full flex items-center justify-center "
      style={{
        background: "linear-gradient(to right,#000033, #330033)",
      }}
    >
      <div className="flex items-center justify-start w-[90%] lg:w-[80%] h-auto bg-white text-black flex-col px-[2vw] lg:px-[1vw] py-[10vw] lg:py-[5vw] gap-[5vw] lg:gap-[2.5vw]">
        <div
          className={`${""} bg-yellow-500 px-[5vw] lg:px-[2vw] py-[1vw] lg:py-[0.5vw] text-black font-bold text-[6vw] lg:text-[3.5vw] rounded-full`}
        >
          Upgrade #{upgradeNumber}
        </div>
        <h2
          className={`${""} font-bold text-[5vw] lg:text-[1.8vw] text-center`}
        >
          {title} - <i className={`${""} text-red-500`}>{titleValue}$</i>
        </h2>
        <div
          className={`${""}  flex items-center justify-center text-[4vw] lg:text-[1.5vw] text-center w-full lg:w-[80%]`}
        >
          {subTitle}
        </div>
        <div
          className={`${""} border-blue-900 border-[0.5vw] p-[0.5vw] lg:p-[0.2vw]`}
        >
          <Image
            src={image}
            width={600}
            height={400}
            className={`${""} w-full lg:w-[60vw]`}
          />
        </div>
        <div
          className={`${""} bg-yellow-400 text-black font-bold text-center p-[2vw] lg:p-[1vw] text-[4vw] lg:text-[1.5vw]`}
        >
          Here Is What Included When Your Upgrade To <u>{version}</u>
        </div>
        {/* //text-[6vw] lg:text-[3.5vw] */}
        {/* //text-[4vw] lg:text-[1.5vw] */}
        <div
          className={`${""}  flex items-center justify-center w-full h-auto flex-col gap-5 text-normal text-[4vw] lg:text-[1.5vw]`}
        >
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`${""}  flex items-center justify-center gap-3`}
              >
                <span className={`${""} text-yellow-500`}>
                  <IoCheckmarkDoneCircleSharp />
                </span>
                {d}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpgradeDetails;
