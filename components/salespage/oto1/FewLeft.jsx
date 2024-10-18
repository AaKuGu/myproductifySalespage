import React from "react";
import Button from "./Button";

const FewLeft = () => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full min-h-screen`}
      style={{
        background: "url('/oto1/smallBG.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`${""} flex items-center justify-center w-[90%] md:w-[80%] flex-col my-10 `}
      >
        <div
          className={`${""} text-[22px] 500:text-[30px] font-bold font-ptSans flex flex-col items-center justify-center my-5`}
        >
          <div>We Are Limiting THIS Offer To</div>
          <div>50 Spots Available ONLY!</div>
        </div>
        <div
          className={`${""} text-[35px] font-bold font-ptSans text-red-600 my-5`}
        >
          34 Taken (16 left)
        </div>
        <div className={`${""} text-[22px] 500:text-2xl my-2`}>
          Last Updated : 2 minutes ago
        </div>
        <div
          className={`${""} w-full sm:w-[400px] md:w-[500px] h-[40px] bg-black rounded-lg `}
        >
          <div
            className={`${""} bg-red-800 w-[80%] h-full rounded-lg flex items-center justify-center font-bold text-[12px] 400:text-sm text-white`}
          >
            34/50 Sold Already Hurry Act Now
          </div>
        </div>
        <div
          className={`${""} text-[16px] md:text-[20px] lg:text-[22px] mt-5 mb-3`}
        >
          Claim Your Instant Savings Offer $600 Before This Deal Ends Forever
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col gap-1 font-bold text-[20px] md:text-[25px] lg:text-[30px] mb-5 md:mb-10`}
        >
          <div>Click The Button Below Now To Claim</div>
          <div>Your 'Fast Pass' Massive Discount Now</div>
        </div>
        <Button data="Get Instant Access To All My Productify Upgrades" />
        <div
          className={`${""} font-bold text-[16px] md:text-[20px] lg:text-[23px] mb-5 flex flex-col items-center justify-center gap-1`}
        >
          <div>Get ALL My Productify Add-ons And Upgrades, One-Time </div>
          <div>Payment Save 72% | 30 Day Money Back Guarantee</div>
        </div>
        <div
          className={`${""} text-[14px] md:text-[17px] lg:text-[21px] text-center`}
        >
          <b>Warning!</b> This Is An EXCLUSIVE ONE TIME Offer, And If You Close
          This Page And Come Back Later, You Will Miss Out On This
          Highly-Discounted Pricing
        </div>
      </div>
    </div>
  );
};

export default FewLeft;
