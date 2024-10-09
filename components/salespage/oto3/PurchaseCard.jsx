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
      <div className={`${sectionWidth}  `}>
        <div className="flex flex-col gap-5 items-center justify-center font-extrabold font-raleway w-full">
          <div
            className={`${""} text-[22px] md:text-[25px] lg:text-[30px] text-red-500 mt-5`}
          >
            <span className={`${""} `}>Price After This Offer Ends</span> :{" "}
            <span>$ 1301</span>
          </div>
          <div
            className={`${""} text-[22px] md:text-[25px] lg:text-[30px] text-green-500 mb-5`}
          >
            <span className={`${""} `}>Price During This One Time Offer</span> :{" "}
            <span>$ 47</span>
          </div>
          <header className="text-lg md:text-xl lg:text-2xl  font-bold text-center ">
            <span
              className={`${
                !orange && "bg-yellow-100"
              } font-bold px-2 rounded-lg py-2 `}
            >
              Grab This One Time Offer
            </span>
            <span>& Save $1301 Now</span>
          </header>

          <PurchaseButtonDark />
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
