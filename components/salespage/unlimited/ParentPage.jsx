import FinalPaymentSection from "@/components/salespage/unlimited/FinalPaymentSection";
import SectionFive from "@/components/salespage/unlimited/SectionFive";
import SectionFour from "@/components/salespage/unlimited/SectionFour";
import SectionOne from "@/components/salespage/unlimited/SectionOne";
import SectionSeven from "@/components/salespage/unlimited/SectionSeven";
import SectionSix from "@/components/salespage/unlimited/SectionSix";
import SectionThree from "@/components/salespage/unlimited/SectionThree";
import SectionTwo from "@/components/salespage/unlimited/SectionTwo";
import React from "react";
import DownsellComponent from "../DownsellComponent";
import { faqData } from "../oto2/Oto4";
import Faq from "../frontend/Faq";
import MainFooter from "../frontend/MainFooter";

const ParentPage = ({ downsellComp }) => {
  const proUpgradeDownsellData = {
    subTitle: "Get the Unlimited Upgrade for just:",
    lowerPrice: 37,
    cutPrice: 47,
    buttonData: {
      link: "#WSODownsellBuyButton",
      title: "Get Instant Access To All My Productify Unlimited",
    },
  };
  return (
    <div
      className={`${""} w-[100vw] flex flex-col items-center justify-center`}
    >
      {downsellComp && <DownsellComponent data={proUpgradeDownsellData} />}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* <SectionSix /> */}
      <SectionSeven />
      <FinalPaymentSection />
      <Faq data={faqData} />
      <MainFooter />
    </div>
  );
};

export default ParentPage;
