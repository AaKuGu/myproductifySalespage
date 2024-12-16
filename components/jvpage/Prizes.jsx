import Image from "next/image";
import React from "react";

const Prizes = () => {
  return (
    <div
      id="prizes"
      className={`${""} gap-[5vw] lg:gap-[3vw] flex items-center justify-center flex-col  bg-white text-black py-[7vw] lg:py-[4vw] w-full px-[2vw]`}
    >
      <header
        className={`${""} flex items-center justify-center flex-col gap-4 `}
      >
        <h6
          className={`${""} text-black text-[6vw] lg:text-[3vw]font-extrabold mb-[4vw] lg:mb-[2vw]`}
        >
          Win Cash{" "}
          <span
            className={`${""} bg-gradient-to-br from-blue-700 via-green-600 to-green-600 bg-clip-text text-transparent`}
          >
            Prizes!
          </span>
        </h6>
        <div
          className={`${""} rounded-xl bg-teal-800 text-white px-[10vw] py-[4vw] lg:px-[5vw] lg:py-[1vw] text-[4vw] font-extrabold lg:text-[2vw] `}
        >
          SINGLE CONTEST
        </div>
        <p className={`${""} text-[4vw] lg:text-[2vw] text-center`}>
          5th January 2025 @ 11am EST - 10th January 2025 @ 11am EST
        </p>
      </header>
      <div
        className={`${""} flex items-center justify-center flex-col lg:gap-[3vw] gap-[5vw] `}
      >
        <div
          className={`${""} p-3 border-dashed border-[2px] border-blue-400 `}
        >
          <Image src={`/prizes.png`} width={1000} height={500} />
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col font-normal italic text-[3vw] lg:text-[1.5vw] gap-[3vw] lg:gap-[1.5vw]`}
        >
          <p>
            <strong>Important : </strong> You should make commissions equal to
            prize money OR else you'll be moved to the next prize available.
          </p>
          <p>
            No teams allowed. We want the competition to be as fair as possible
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
