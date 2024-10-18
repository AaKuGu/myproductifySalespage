import React from "react";

const OneByOne = () => {
  return (
    <div
      className={`${""}  flex items-center justify-center w-[90%] flex-col font-bold text-white text-center my-10 md:my-20`}
    >
      <div
        className={`${""} text-[14px] 500:text-[20px] md:text-[30px] lg:text-[35px]`}
      >
        Price Of Both The Upgrades If You Bought
      </div>
      <div
        className={`${""} text-[22px] 500:text-[27px] md:text-[34px] lg:text-[40px] tracking-wider font-extrabold`}
      >
        Each Upgrade One By One
      </div>
      <h1
        className={`${""} text-[22px] 500:text-[27px] md:text-[34px] lg:text-[40px] tracking-wider font-extrabold`}
      >
        = <span className={`${""} text-red-500`}>$301</span>
      </h1>
    </div>
  );
};

export default OneByOne;
