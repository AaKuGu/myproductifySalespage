import React from "react";

const OneByOne = () => {
  return (
    <div
      className={`${""}  flex items-center justify-center w-[90%] flex-col font-bold text-white text-center my-[5vw] lg:my-[2.5vw]`}
    >
      <div className={`${""} text-[5vw] lg:text-[2.5vw]`}>
        Price Of Both The Upgrades If You Bought
      </div>
      <div
        className={`${""} text-[6vw] lg:text-[3.5vw] tracking-wider font-extrabold`}
      >
        Each Upgrade One By One
      </div>
      <h1
        className={`${""} text-[6vw] lg:text-[3.5vw] tracking-wider font-extrabold`}
      >
        = <span className={`${""} text-red-500`}>$241</span>
      </h1>
    </div>
  );
};

export default OneByOne;
