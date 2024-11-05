import FinalPaymentSection from "@/components/salespage/unlimited/FinalPaymentSection";
import SectionFive from "@/components/salespage/unlimited/SectionFive";
import SectionFour from "@/components/salespage/unlimited/SectionFour";
import SectionOne from "@/components/salespage/unlimited/SectionOne";
import SectionSeven from "@/components/salespage/unlimited/SectionSeven";
import SectionSix from "@/components/salespage/unlimited/SectionSix";
import SectionThree from "@/components/salespage/unlimited/SectionThree";
import SectionTwo from "@/components/salespage/unlimited/SectionTwo";
import React from "react";

const page = () => {
  return (
    <div
      className={`${""} w-[100vw] flex flex-col items-center justify-center`}
    >
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <FinalPaymentSection />
    </div>
  );
};

export default page;
