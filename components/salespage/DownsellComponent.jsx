import React from "react";
import Button from "./oto1/Button";

const DownsellComponent = ({ data }) => {
  const { subTitle, lowerPrice, cutPrice, buttonData } = data;
  return (
    <div
      className="flex items-center justify-center h-auto p-[2vw] lg:p-[1vw] w-full bg-center bg-cover"
      style={{ backgroundImage: "url('/logo/limitedTimeOffer.png')" }}
    >
      <div className="text-white shadow-lg rounded-lg p-[2vw] lg:p-[0.5vw] text-center w-full flex flex-col items-center justify-center gap-[2vw] lg:gap-[1vw]">
        <h2 className="text-[6vw] lg:text-[3vw] font-bold text-red-600 mb-[2vw] lg:mb-[0.5vw]">
          Limited Time Offer!
        </h2>
        <p className="text-[5vw] lg:text-[1.8vw]">{subTitle}</p>
        <div className="flex justify-center items-baseline mb-[2vw] lg:mb-[1vw]">
          <span className="text-[6vw] lg:text-[3vw] font-extrabold">
            ${lowerPrice}
          </span>
          <span className="text-[4vw] lg:text-[1.5vw] line-through text-gray-500 ml-[2vw] lg:ml-[1vw]">
            ${cutPrice}
          </span>
        </div>
        <p className="text-[5vw] lg:text-[2vw] text-gray-400">
          That's a ${cutPrice - lowerPrice} discount!
        </p>
        <p className="mt-4 text-green-500 font-semibold text-[5vw] lg:text-[2vw]">
          Act Now and Save!
        </p>
        <Button data={{ ...buttonData }} />
      </div>
    </div>
  );
};

export default DownsellComponent;
