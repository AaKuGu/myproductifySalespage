import Image from "next/image";
import React from "react";
import { sectionWidth } from "@/utils/utils";
import PurchaseButtonDark from "../frontend/PurchaseButtonDark";

const PurchaseCard = ({ orange = false }) => {
  return (
    <div
      className={`${
        orange
          ? "bg-gradient-to-b from-orange-700 to-yellow-300 text-white"
          : "bg-white text-black"
      } w-full flex flex-col items-center justify-between p-2 sm:p-3 md:p-10`}
    >
      <div className="flex flex-col gap-5 items-center justify-center font-extrabold font-raleway w-full text-[5vw] lg:text-[2.7vw] my-[10vw] lg:my-[5vw]">
        <div className={`${""}  text-red-500 mt-5`}>
          <span className={`${""} `}>Price After This Offer Ends</span> :{" "}
          <span>$ 147</span>
        </div>
        <div
          className={`${""} w-full text-center text-green-500 mb-5 flex items-center justify-center `}
        >
            Price During This One Time Offer : $37
        </div>
        <header className="text-[6vw] lg:text-[3.5vw] font-bold text-center mb-[5vw] lg:mb-[2.5vw] ">
          <span
            className={`${
              !orange && "bg-yellow-100"
            } font-bold px-2 rounded-lg py-2 `}
          >
            Grab This One Time Offer
          </span>
          <span>& Save ${147 - 37} Now</span>
        </header>

        {/* <PurchaseButtonDark /> */}
      </div>
    </div>
  );
};

export default PurchaseCard;
