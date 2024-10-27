import React from "react";
import Button from "./oto1/Button";

const DownsellComponent = ({ data }) => {
  const { subTitle, lowerPrice, cutPrice, buttonData } = data;
  return (
    <div
      className="flex items-center justify-center h-auto p-4 w-full bg-center bg-cover"
      style={{ backgroundImage: "url('/logo/limitedTimeOffer.png')" }}
    >
      <div className="text-white shadow-lg rounded-lg p-2 text-center w-full flex flex-col items-center justify-center gap-3">
        <h2 className="md:text-[40px] 500:text-[30px] 300:text-[22px] font-bold text-red-600 mb-4">
          Limited Time Offer!
        </h2>
        <p className="text-lg mb-4">{subTitle}</p>
        <div className="flex justify-center items-baseline mb-4">
          <span className="text-4xl font-extrabold">${lowerPrice}</span>
          <span className="text-lg line-through text-gray-500 ml-2">
            ${cutPrice}
          </span>
        </div>
        <p className="text-md text-gray-400">That's a $30 discount!</p>
        <p className="mt-4 text-green-500 font-semibold 300:text-[18px] 500:text-[25px] md:text-[30px]">
          Act Now and Save!
        </p>
        <Button data={{ ...buttonData }} />
      </div>
    </div>
  );
};

export default DownsellComponent;
