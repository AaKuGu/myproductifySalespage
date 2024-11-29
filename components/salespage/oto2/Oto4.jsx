import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import FewLeft from "./FewLeft";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import Steps from "./Steps";
import SectionSeven from "./SectionSeven";
import SectionTweleve from "./SectionTwelve";
import TotalValue from "./TotalValue";
import SectionNine from "./SectionNine";
import MoneyBackGuarantee from "./MoneyBackGuarantee";
import SectionTen from "./SectionTen";
import SectionEleven from "./SectionEleven";
import Faq from "../frontend/Faq";
import MainFooter from "../frontend/MainFooter";
import OrderNotComplete from "../OrderNotComplete";
import DownsellComponent from "../DownsellComponent";
// import SectionTweleve from "../frontend/SectionTweleve";

const Oto4 = ({ downsellComp }) => {
  const resellerUpgradeDownsellData = {
    subTitle: "Get the Reseller Upgrade for just:",
    lowerPrice: 137,
    cutPrice: 157,
    buttonData: {
      link: "#WSODownsellBuyButton",
      title: "Get Instant Access To My Productify Reseller",
    },
  };

  return (
    <div
      className={`${""} w-full min-h-screen flex items-center justify-center flex-col `}
    >
      {/* res up */}

      {/* res <div className={`${}`}></div> */}
      <OrderNotComplete />
      {downsellComp && <DownsellComponent data={resellerUpgradeDownsellData} />}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <div
        className={`${""} w-full min-h-[100vh] flex flex-col items-center justify-center gap-[2vw] text-black py-[10vw] lg:py-[5vw] font-bold `}
        // style={{ backgroundImage: "url('/background/bg1.png')" }}
        style={{
          backgroundImage: "url('/background/bg1.png')",
          backgroundAttachment: "fixed", // Parallax effect
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <header
          className={`${""}  flex flex-col items-center justify-center w-[95%] 400:w-[90%]  `}
        >
          <div
            className={`${""} font-bold lg:font-normal text-[6vw] lg:text-[3.5vw]
 text-center  `}
          >
            To Make SERIOUS Money Selling Software
          </div>
          <div
            className={`${""}  font-bold text-[6vw] lg:text-[3.5vw]
text-purple-900 mt-5 `}
          >
            You Need 3 Things
          </div>
        </header>
        {mainFeaturesData?.map((d, i) => {
          return <SectionTweleve data={d} index={i} key={i} />;
        })}
      </div>
      <SectionSix />
      <Steps />
      <SectionSeven />
      <SectionEleven />
      <MoneyBackGuarantee />
      <TotalValue />
      <SectionTen />
      <FewLeft downsellComp={downsellComp} />
      <Faq data={faqData} productIsBundleOrReseller={true} />
      <MainFooter />
    </div>
  );
};

export default Oto4;

const mainFeaturesData = [
  {
    header: "High-Demand Product",
    arrayOfData: [
      "A product designed to solve genuine market needs",
      "Taps into a proven demand, making it easier to sell",
      "Addresses real customer pain points for better sales conversion",
    ],
    imageLink: "/logo/highDemand.png",
    width: 500,
    height: 500,
  },
  {
    header: "Innovative Technology or Unique Selling Point",
    arrayOfData: [
      "Offer something fresh that hasn’t been seen before",
      "Leverage cutting-edge technology or a distinctive advantage",
      "Stand out from competitors with a unique point of difference",
    ],
    imageLink: "/logo/innovative.png",
    width: 350,
    height: 350,
  },
  {
    header: "Proven Marketing and Branding",
    arrayOfData: [
      "Access ready-to-use, high-converting marketing materials",
      "Benefit from built-in branding strategies for higher buyer trust",
      "Increase conversion rates with pre-validated marketing resources",
    ],
    imageLink: "/logo/branding.png",
    width: 350,
    height: 350,
  },
];

export const faqData = [
  {
    q: "Do users need any software or app to download?",
    ans: "No, My Productify is a completely browser-based platform, allowing users to access it directly through their browser without needing to download anything.",
  },
  {
    q: "Are there any monthly or ongoing fees to use the software?",
    ans: "My Productify is available for a one-time payment during this special launch period. After this promotion, the pricing may shift to a monthly subscription without notice. When you purchase My Productify during this launch week, you will be grandfathered in at the one-time price.",
  },
  {
    q: "Does My Productify work on PC or Mac?",
    ans: "My Productify is designed as a SaaS (Software as a Service) application and is cloud-based. This makes it accessible on all browsers and devices, as long as you have an internet connection!",
  },
  {
    q: "What is the link to your support desk?",
    ans: "If you have any questions or issues, you can contact us on our company's email aadarsh@aigodam.com",
  },
  {
    q: "Does My Productify come with a commercial license?",
    ans: "Yes! With the commercial license, you will be able to create course pages, email opt-in pages, links, QR codes, and more for your clients using My Productify.",
  },
];
