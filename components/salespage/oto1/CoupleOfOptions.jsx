import React from "react";
import UpgradeDetails from "./UpgradeDetails";
import OptionOne from "./OptionOne";
import OptionTwo from "./OptionTwo";
import WSOUpsellBuyButton from "./WSOBuyButton";
import WSODownsellBuyButton from "./WSODownsellBuyButton";

const CoupleOfOptions = ({ downsellComp }) => {
  return (
    <div
      className={`${""} w-full h-auto flex items-center justify-center flex-col text-black bg-white`}
      //   style={{
      //     background: "linear-gradient(to right,#000033, #330033)",
      //   }}
    >
      <div
        className={`${""}  flex items-center justify-center w-[90%] flex-col gap-[10vw] lg:gap-[5vw] my-[10vw] lg:my-[5vw]`}
      >
        <header className={`${""} text-[5vw] lg:text-[2.5vw] font-extrabold`}>
          You have Couple Of Options At This Point...
        </header>
        <section
          className={`${""}  flex items-start justify-center flex-col lg:flex-row gap-[10vw] lg:gap-[2.5vw]`}
        >
          <OptionOne />
          <OptionTwo />
        </section>
        <div
          className={`${""} text-[24px] 400:text-[27px] 500:text-[31px] lg:text-[35px]  text-black text-center my-5 gap-0 flex flex-col items-center justify-center`}
        >
          <div className={`${""} text-[6vw] lg:text-[3.5vw] font-extrabold`}>
            Total Price of The Upgrades
          </div>
          <div className={`${""} text-[6vw] lg:text-[3.5vw]`}>
            If You Bought <b>Each Upgrade</b> One By One
          </div>
          <div className={`${""} mt-5`}>
            <p
              className={`${""} text-red-600 text-[6vw] lg:text-[3.5vw] font-bold`}
            >
              = $241
            </p>
          </div>
          <div
            className={`${""} font-bold text-[6vw] lg:text-[3.5vw] my-5 lg:my-10 underline`}
          >
            But
          </div>
          {downsellComp ? <WSODownsellBuyButton /> : <WSOUpsellBuyButton />}
        </div>
      </div>
    </div>
  );
};

export default CoupleOfOptions;
