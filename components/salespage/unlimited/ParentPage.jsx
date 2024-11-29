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
import FinalTwoButtons from "../oto1/FinalTwoButtons";
import WSODownsellBuyButton from "../oto1/WSODownsellBuyButton";
import WSOUpsellBuyButton from "../oto1/WSOBuyButton";
import PriceRising from "../frontend/PriceRising";

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
      <div className={`${""} w-full h-auto flex items-center justify-center `}>
        {downsellComp ? (
          <WSODownsellBuyButton
            linkUrl="https://warriorplus.com/o2/buy/g886gd/vb0pqq/wk196f"
            imageLink="/buyButtons/proDownsell.png"
          >
            <img
              src="https://warriorplus.com/o2/btn/fn100011011/g886gd/vb0pqq/414105"
              className="hidden"
            />
          </WSODownsellBuyButton>
        ) : (
          <WSOUpsellBuyButton
            linkUrl="https://warriorplus.com/o2/buy/g886gd/vl8vhr/f9988s"
            imageLink="/buyButtons/unlimitedUpsell.png"
          >
            <img
              src="https://warriorplus.com/o2/btn/fn100011011/g886gd/vl8vhr/414103"
              className="hidden"
            />
          </WSOUpsellBuyButton>
        )}
      </div>
      <PriceRising isWhiteBg={true} />

      {/* <FinalPaymentSection /> */}
      <FinalTwoButtons downsellComp={downsellComp} buttonsData={buttonsData} />

      <Faq data={faqData} />
      <MainFooter />
    </div>
  );
};

export default ParentPage;

const buttonsData = [
  {
    label: {
      title: "Yes Give Me 'Unlimited Upgrade'",
      subTitle: "Yes Help Me Skip All The Guesswork",
    },
    upsellLink: "#WSOUpsellBuyButton",
    downsellLink: "#WSODownsellBuyButton",
    color: "green",
  },
  {
    label: {
      title: "No Thanks",
      subTitle: "NO I Dont Want Any Work Easy Money",
    },
    upsellLink: "https://warriorplus.com/o/nothanks/vl8vhr",
    downsellLink: "https://warriorplus.com/o/nothanks/vb0pqq",
    color: "red",
  },
];
