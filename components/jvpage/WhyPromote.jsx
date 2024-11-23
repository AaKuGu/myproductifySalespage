import React from "react";
import { CiDollar } from "react-icons/ci";

const WhyPromote = () => {
  return (
    <div
      className={`${""} h-auto flex items-center justify-center flex-col w-[90%] lg:w-[70%] gap-[10vw] lg:gap-[5vw] mt-[10vw] lg:mt-[5vw]`}
    >
      <div
        className={`${""} flex items-center justify-center flex-col gap-[5vw] lg:gap-[1vw] `}
      >
        <header className={`${""} text-[6vw] lg:text-[3.5vw]`}>
          Why Promote This Launch?
        </header>
        <div
          className={`${""} text-[4.5vw] lg:text-[1.6vw] font-normal text-center`}
        >
          We are experienced product launchers and know how to convert in
          addition to putting together fantastic products and softwares for our
          customers.{" "}
        </div>
      </div>
      <div
        className={`${""} flex flex-col lg:flex-row items-center justify-center gap-[5vw] lg:gap-[2vw]`}
      >
        <div
          className={`${""} w-full flex items-start justify-center flex-col gap-[5vw] lg:gap-[1.4vw]  text-[5vw] lg:text-[1.5vw]`}
        >
          {whyToPromoteOne?.map((d, i) => {
            return (
              <div
                key={i}
                className={`${""} flex items-start justify-center gap-[1.5vw] lg:gap-[1vw] `}
              >
                <span className={`${""}lg:text-[3vw] text-[5vw]`}>
                  <CiDollar />
                </span>
                {d}
              </div>
            );
          })}
        </div>
        <div
          className={`${""} w-full flex items-start justify-center flex-col gap-[5vw] lg:gap-[1.4vw]  text-[5vw] lg:text-[1.5vw]`}
        >
          {whyToPromoteTwo?.map((d, i) => {
            return (
              <div
                key={i}
                className={`${""} flex items-start justify-center gap-[1.5vw] lg:gap-[1vw] `}
              >
                <span className={`${""}lg:text-[3vw] text-[5vw]`}>
                  <CiDollar />
                </span>{" "}
                {d}
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WhyPromote;

export const whyToPromoteOne = [
  "Launching on Saturday 7th December @ 10am EST",
  "Earn OVER $400 Per Sale You Bring To The Funnel!",
  "Over $2,500+ In Affiliate Cash Prizes To Be Won",
  "HIGH Converting Sales Copy & VSL Constructed By Industry Experts!",
];

export const whyToPromoteTwo = [
  "High Converting Sales Funnel Guaranteed To Make You Money!",
  "Ethical Software & Training You Can Be Proud To Promote",
  "REGULAR Affiliate Updates & Fantastic Customer Support",
  "Perfect For All Types of Email Lists & Traffic - Send a Quick Blast And See For Yourself!",
];
