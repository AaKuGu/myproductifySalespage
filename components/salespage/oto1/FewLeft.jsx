import React from "react";
import Button from "./Button";

const FewLeft = ({ downsellComp }) => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full h-auto`}
      style={{
        background: "url('/oto1/smallBG.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`${""} flex items-center justify-center w-[90%] lg:w-[80%] flex-col my-[10vw] lg:my-[5vw] gap-[3vw] lg:gap-[1vw]`}
      >
        <div
          className={`${""} text-[5vw] lg:text-[2.5vw] font-bold font-ptSans flex flex-col items-center justify-center my-5`}
        >
          <div>We Are Limiting THIS Offer To</div>
          <div>50 Spots Available ONLY!</div>
        </div>
        <div
          className={`${""}text-[5vw] lg:text-[2.5vw] font-bold font-ptSans text-red-600 my-5`}
        >
          34 Taken (16 left)
        </div>
        <div className={`${""} text-[4vw] lg:text-[1.5vw] my-2`}>
          Last Updated : 2 minutes ago
        </div>
        <div className={`${""} w-full h-auto lg:w-[60%] bg-black rounded-lg `}>
          <div
            className={`${""} bg-red-800 w-[80%] h-full rounded-lg flex items-center justify-center font-bold text-[4vw] lg:text-[2vw] text-white p-[0.7vw]`}
          >
            34/50 Sold Already Hurry Act Now
          </div>
        </div>
        <div
          className={`${""} text-[5vw] lg:text-[2.5vw] mt-5 mb-3 text-center`}
        >
          Claim Your Instant Savings Offer $600 Before This Deal Ends Forever
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col gap-1 font-bold text-[4vw] lg:text-[1.5vw] mb-5 lg:mb-10`}
        >
          <div>Click The Button Below Now To Claim</div>
          <div>Your 'Bundle Pass' Massive Discount Now</div>
        </div>
        {/* {JSON.stringify(downsellComp)} */}
        <Button
          data={{
            title: "Get Instant Access To All My Productify Upgrades",
            link: downsellComp
              ? "#WSODownsellBuyButton"
              : "#WSOUpsellBuyButton",
          }}
        />
        <div
          className={`${""} font-bold text-[4vw] lg:text-[1.5vw] mb-5 flex flex-col items-center justify-center gap-1`}
        >
          <div>Get ALL My Productify Add-ons And Upgrades, One-Time </div>
          <div>Payment Save 37% | 30 Day Money Back Guarantee</div>
        </div>
        <div className={`${""}text-[4vw] lg:text-[1.5vw] text-center`}>
          <b className={`${""} text-red-500`}>Warning!</b> This Is An EXCLUSIVE
          ONE TIME Offer, And If You Close This Page And Come Back Later, You
          Will Miss Out On This Highly-Discounted Pricing
        </div>
      </div>
    </div>
  );
};

export default FewLeft;
