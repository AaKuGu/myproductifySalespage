import React from "react";
import UpgradeDetails from "./UpgradeDetails";
import OptionOne from "./OptionOne";
import OptionTwo from "./OptionTwo";

const CoupleOfOptions = () => {
  return (
    <div
      className={`${""} w-full min-h-screen flex items-center justify-center flex-col text-black bg-white`}
      //   style={{
      //     background: "linear-gradient(to right,#000033, #330033)",
      //   }}
    >
      <div
        className={`${""}  flex items-center justify-center w-[90%] flex-col gap-10 my-10 500:my-15 lg:my-20`}
      >
        <header
          className={`${""} text-[20px] 400:text-[23px] 500:text-[25px] md:text-[30px] lg:text-[40px] font-extrabold`}
        >
          You have Couple Of Options At This Point...
        </header>
        <section
          className={`${""}  flex items-start justify-center flex-col md:flex-row gap-5 md:gap-3 lg:gap-5`}
        >
          <OptionOne />
          <OptionTwo />
        </section>
        <div
          className={`${""} text-[24px] 400:text-[27px] 500:text-[31px] md:text-[35px] lg:text-[45px] text-black text-center my-5 gap-0 flex flex-col items-center justify-center`}
        >
          <div className={`${""} font-extrabold`}>
            Total Price of The Upgrades
          </div>
          <div
            className={`${""}  text-[18px] 400:text-[20px] 500:text-[23px] md:text-[25px] lg:text-[30px]`}
          >
            If You Bought <b>Each Upgrade</b>One By One
          </div>
          <div className={`${""} mt-5`}>
            <p className={`${""} text-red-600 text-[50px] font-bold`}>
              = $301
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleOfOptions;
