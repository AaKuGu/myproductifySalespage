import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const Reciprocation = () => {
  return (
    <div
      className={`${""} min-h-screen w-full flex items-center justify-center flex-col  bg-black`}
      style={{
        background: 'url("/background/two.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${""} flex items-center justify-center flex-col w-[90%] my-[10vw] lg:my-[5vw]`}
      >
        <div className={`${""} text-[6vw] lg:text-[3.5vw] font-normal italic`}>
          Do We Reciprocate
        </div>
        <div
          className={`${""} text-[5vw] lg:text-[2.7vw] font-normal mb-[3vw] italic`}
        >
          YES! Of Course We Do!
        </div>
        <div
          className={`${""} flex items-start justify-center flex-col gap-[3vw] lg:gap-[1vw] text-[3vw] lg:text-[1.8vw] font-normal w-full lg:w-[50%]`}
        >
          <div
            className={`${""} flex items-center justify-center gap-[3vw] lg:gap-[2vw]`}
          >
            <span className={`${""} text-yellow-300`}>
              <FaRegHandPointRight />
            </span>
            <span>If you promote us, we'll promote you back.</span>
          </div>
          <div
            className={`${""} flex items-center justify-center gap-[3vw] lg:gap-[2vw]`}
          >
            <span className={`${""} text-yellow-300`}>
              <FaRegHandPointRight />
            </span>
            If you want us to fire heat to your launch, then please promote this
            launch.
          </div>
          <div
            className={`${""} flex items-center justify-center gap-[3vw] lg:gap-[2vw]`}
          >
            <span className={`${""} text-yellow-300`}>
              <FaRegHandPointRight />
            </span>
            In an attempt to top our leaderboard or generate a huge influx of
            commissions we highly recommend you create bonuses for your clients,
            customers and list. These always help with conversions.
          </div>
          <div
            className={`${""} flex items-center justify-center gap-[3vw] lg:gap-[2vw]`}
          >
            <span className={`${""} text-yellow-300`}>
              <FaRegHandPointRight />
            </span>
            Feel free to reach out to use if you need anything with your promo!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reciprocation;
