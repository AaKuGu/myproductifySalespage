import React from "react";
import ActualSteps from "./ActualSteps";

const Steps = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div
        className={`${""} w-[90%] lg:w-[85%] xl:w-[80%] flex items-center justify-center my-[10vw] lg:my-[5vw] flex-col gap-[10vw] lg:gap-[5vw]`}
      >
        <header className="text-center flex flex-col leading-[10vw] lg:leading-[5vw] ">
          <div className={`${""} text-[5vw] lg:text-[2.5vw]  font-bold mb-[5vw] lg:mb-[2.5vw] border-[0.5vw] lg:border-[0.25vw] border-black`}>
            Setup A Complete Business in 3 Simple Steps
          </div>
          <div
            className={`${""} text-[4vw] lg:text-[1.5vw] underline italic  mb-[5vw] lg:mb-[2.5vw]`}
          >
            And Earn Over 6 Figure Every Year Selling This Powerful App That
            Almost Everyone Online Craves For…
          </div>
          <div className={`${""} text-[6vw] lg:text-[3.5vw] font-bold`}>
            MAKE Easy Profits In{" "}
            <span className={`${""} text-purple-800`}>3 Easy</span>
          </div>
          <div className={`${""}text-[6vw] lg:text-[3.5vw] font-bold`}>
            <span className={`${""} text-purple-900`}>Steps</span> Using
            My-Productify Reseller license
          </div>
        </header>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[5vw] lg:gap-[3vw] items-center justify-center  py-5 w-full">
          {steps?.map((d, i) => (
            <ActualSteps d={d} key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;

export const steps = [
  {
    id: "step1",
    stepNo: "Step 1",
    title: "Purchase License",
    desc: "Buy the My Productify reseller OTO to unlock 100% commissions on all your sales.",
    image: "/logo/step1.png",
  },
  {
    id: "step2",
    stepNo: "Step 2",
    title: "Set Up & Customize",
    desc: "Use pre-made templates to set up your sales funnel and drive traffic with marketing strategies.",
    image: "/logo/step2.png",
  },
  {
    id: "step3",
    stepNo: "Step 3",
    title: "Earn 100% Commissions",
    desc: "Start earning full commissions on every sale while providing value to your customers.",
    image: "/logo/step3.png",
  },
];
