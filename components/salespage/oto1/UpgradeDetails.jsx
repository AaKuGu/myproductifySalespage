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
      className="min-h-screen w-full flex items-center justify-center "
      style={{
        background: "linear-gradient(to right,#000033, #330033)",
      }}
    >
      <div className="flex items-center justify-center w-[90%] md:w-[80%] min-h-screen bg-white text-black flex-col px-2 md:px-4 lg:px-5 gap-5 py-10">
        <div
          className={`${""} bg-yellow-500 px-5 py-2 text-black font-bold text-[20px] md:text-[23px] lg:text-[25px] rounded-full`}
        >
          Upgrade #{upgradeNumber}
        </div>
        <h2
          className={`${""} font-bold text-[19px] 500:text-[20px] md:text-[25px] lg:text-[35px] text-center`}
        >
          {title} - <i className={`${""} text-red-500`}>{titleValue}$</i>
        </h2>
        <div
          className={`${""}  flex items-center justify-center text-[16px] 500:text-[20px] md:text-[23px] text-center w-full md:w-[80%]`}
        >
          {subTitle}
        </div>
        <div>
          <Image src={image} width={600} height={400} />
        </div>
        <div
          className={`${""} bg-yellow-400 text-black font-bold text-center py-3 p-3 400:text-[16px] 600:text-[20px] md:text-[23px]`}
        >
          Here Is What Included When Your Upgrade To <u>{version}</u>
        </div>
        <div
          className={`${""}  flex items-center justify-center w-full h-auto flex-col gap-5 text-normal text-[16px] 500:text-[18px] md:text-[20px]`}
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
