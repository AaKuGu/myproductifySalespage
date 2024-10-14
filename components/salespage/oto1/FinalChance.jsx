import Image from "next/image";
import React from "react";

const FinalChance = () => {
  return (
    <div
      className={`${""} min-h-screen  flex items-center justify-center w-full`}
    >
      <div
        className={`${""}  flex items-center justify-center w-[90%] md:w-[80%] lg:w-[70%] border-[4px] border-dotted border-red-400 flex-col gap-5 md:gap-10 my-10 md:my-20 md:py-20 py-10`}
      >
        <Image
          src="/oto1/FinalChance.png"
          width={500}
          height={130}
          className={`${""} w-full h-auto md:w-[500px] md:h-[130px] px-2 md:px-0 `}
        />
        <div
          className={`${""}  flex items-center justify-center flex-col w-ful md:w-[80%] h-auto gap-10 py-10 text-center px-2`}
        >
          <header
            className={`${""} text-[20px] 500:text-[25px] md:text-[30px] lg:text-[30px] font-bold`}
          >
            FINAL CHANCE To Get The "My Productify"
          </header>
          <div
            className={`${""} text-[15px] 500:text-[18px] md:text-[20px] lg:text-[25px] text-center text-gray-200`}
          >
            Total Price Of Everything If You Bought Each Upgrade One By One =
            <b className={`${""} text-yellow-400 font-bold`}>$1,042</b> But When
            You Get The My Productify "Bundle License" Right Now, You Get
            Everything AT A Special, Discounted Price...
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalChance;
