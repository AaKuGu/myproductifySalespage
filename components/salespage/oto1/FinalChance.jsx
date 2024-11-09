import Image from "next/image";
import React from "react";

const FinalChance = () => {
  return (
    <div
      className={`${""} h-auto  flex items-center justify-center w-full`}
    >
      <div
        className={`${""}  flex items-center justify-center w-[90%] lg:w-[70%] border-[4px] border-dotted border-red-400 flex-col gap-5 lg:gap-10 my-10 lg:my-20 lg:py-20 py-10`}
      >
        <Image
          src="/oto1/FinalChance.png"
          width={500}
          height={130}
          className={`${""} w-full h-auto lg:w-[50vw] px-2 lg:px-0 `}
        />
        <div
          className={`${""}  flex items-center justify-center flex-col w-ful lg:w-[80%] h-auto gap-[5vw] lg:gap-[2.5vw] py-10 text-center px-2`}
        >
          <header className={`${""} text-[5vw] lg:text-[2.5vw] font-bold`}>
            FINAL CHANCE To Get The "My Productify"
          </header>
          <div
            className={`${""} text-[4vw] lg:text-[1.5vw] text-center text-gray-200`}
          >
            Total Price Of Everything If You Bought Each Upgrade One By One =
            <b className={`${""} text-yellow-400 font-bold`}>$241</b> But When
            You Get The My Productify "Bundle License" Right Now, You Get
            Everything AT A Special, Discounted Price...
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalChance;
