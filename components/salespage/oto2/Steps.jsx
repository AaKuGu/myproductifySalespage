import React from "react";
import ActualSteps from "./ActualSteps";

const Steps = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div
        className={`${""} w-[90%] md:w-[85%] xl:w-[80%] flex items-center justify-center my-10 flex-col gap-10`}
      >
        <header className="text-xl md:text-2xl lg:text-4xl text-center flex flex-col gap-5">
          <div
            className={`${""} text-[20px] md:text-[27px] xl:text-[34px] font-bold`}
          >
            Setup A Complete Business in 3 Simple Steps
          </div>
          <div className={`${""} text-[16px] md:text-[20px] xl:text-[24px] `}>
            And Earn Over 6 Figure Every Year Selling This Powerful App That
            Almost Everyone Online Craves For…
          </div>
          <div
            className={`${""} text-[20px] md:text-[27px] xl:text-[34px] font-bold`}
          >
            MAKE Easy Profits In{" "}
            <span className={`${""} text-purple-800`}>3 Easy</span>
          </div>
          <div
            className={`${""} text-[20px] md:text-[27px] xl:text-[34px] font-bold`}
          >
            <span className={`${""} text-purple-900`}>Steps</span> Using
            My-Productify Reseller
          </div>
        </header>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 sm:gap-10 items-center justify-center  py-5 w-full">
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
