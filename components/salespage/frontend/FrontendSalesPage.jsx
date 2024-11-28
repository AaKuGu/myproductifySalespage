"use client";

import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import PriceRising from "./PriceRising";
import ThreeStepsComponent from "./ThreeStepsComponent";
import Testimonials from "./Testimonials";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import PurchaseCard from "./PurchaseCard";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";
import SectionTen from "./SectionTen";
import SectionEleven from "./SectionEleven";
import SectionTweleve from "./SectionTweleve";
import SectionThirteen from "./SectionThirteen";
import SectionFourteen from "./SectionFourteen";
import SectionFifteen from "./SectionFifteen";
import SectionSixteen from "./SectionSixteen";
import SectionSeventeen from "./SectionSeventeen";
import SectionEighteen from "./SectionEighteen";
import AboutMe from "./AboutMe";
import SectionNineteen from "./SectionNineteen";
import TotalValue from "./TotalValue";
import ScrollButtons from "@/components/authenticated/ScrollButtons";
import Faq from "./Faq";
import MainFooter from "./MainFooter";
import VendorBonuses from "./VendorBonuses";
import "@/components/authenticated/css/animation.css";
import Script from "next/script";
// import WSOBuyJButton from "./WSOBuyJButton";

const FrontendSalesPage = () => {
  return (
    <div
      className={`${""} w-[100vw] flex flex-col items-center justify-center`}
    >
      <SectionOne />
      <SectionTwo />
      <PriceRising isWhiteBg={true} deadlineTimeInSeconds={1800} />
      <ThreeStepsComponent />
      <div
        className={`${""} w-[100vw] min-h-[100vh] flex flex-col items-center justify-center gap-[2vw] bg-black py-[3vw]`}
        style={{
          background: 'url("/background/bg2.png")',
          backgroundAttachment: "fixed", // Parallax effect
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {mainFeaturesData?.map((d, i) => {
          return <SectionTweleve data={d} index={i} key={i} />;
        })}
      </div>
      <Testimonials />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <PurchaseCard />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      {/*  */}
      <SectionFourteen />
      <SectionFifteen />
      <PurchaseCard orange={true} />
      <ThreeStepsComponent />
      <SectionSixteen />
      <SectionSeventeen />
      <SectionEighteen />
      <SectionNineteen />
      {/* <VendorBonuses /> */}
      <TotalValue />
      <AboutMe />
      <Faq data={faqData} />
      <MainFooter />
      <Script
        src="https://warriorplus.com/o2/disclaimer/g886gd"
        type="text/javascript"
        defer
        onLoad={() => {
          alert("Script loaded successfully");
        }}
      />
      {/* <ScrollButtons /> */}
    </div>
  );
};

export default FrontendSalesPage;

const mainFeaturesData = [
  {
    header: "Custom Domain",
    arrayOfData: [
      "Brand your courses with your own custom domain name",
      "Enhance credibility and trust by using a professional domain",
      "Easily connect your domain without needing technical skills",
      "Maintain full control over your brand's online presence",
    ],
    imageLink: "/logo/customDomain.png",
    width: 350,
    height: 350,
  },
  {
    header: "Email Autoresponder Integration",
    arrayOfData: [
      "Automate your email marketing with seamless autoresponder integration",
      "Connect with top autoresponders like Mailchimp, Getresponse, and more",
      "Build and nurture your subscriber list effortlessly",
      "Send targeted email campaigns to increase course sales",
      "Keep your audience engaged with scheduled email sequences",
      "Track and analyze your email marketing performance",
      "Boost conversions with personalized email follow-ups",
    ],
    imageLink: "/features/emailAutoresponder.png",
    width: 350,
    height: 350,
  },
  {
    header: "QR Codes Generation",
    arrayOfData: [
      "Instantly generate QR codes for easy course access",
      "Boost course discoverability with scannable QR codes",
      "Share QR codes on social media, flyers, and more",
      "Enhance user experience with quick mobile access to courses",
      "Track and analyze QR code scans for better marketing insights",
      "Customize your QR codes to match your branding",
      "Use QR codes to direct users to specific course modules or offers",
    ],
    imageLink: "/features/qrCodes.png",
    width: 350,
    height: 350,
  },
  {
    header: "Short Links Generator",
    arrayOfData: [
      "Create easy-to-share, shortened URLs for your course pages",
      "Enhance your marketing efforts with branded short links",
      "Track link performance with detailed analytics",
      "Simplify course promotions with memorable short links",
      "Increase click-through rates with clean, concise URLs",
      "Easily share your course links across multiple platforms",
      "Boost engagement by making your links more accessible",
    ],
    imageLink: "/features/shortLinks.png",
    width: 350,
    height: 350,
  },
];

const faqData = [
  {
    q: "Is My Productify a cloud-based software?",
    ans: "Absolutely! My Productify is fully cloud-based, ensuring you can access it from anywhere. Start creating and selling your courses on any device, whether it's a Mac, Windows, or even your mobile device.",
  },
  {
    q: "Is My Productify popular among course creators?",
    ans: "Definitely! Many course creators are actively using and enjoying My Productify. Check out the positive feedback on our site to see for yourself!",
  },
  {
    q: "Will there be a monthly subscription fee for My Productify?",
    ans: "Not at the moment! Right now, you can secure My Productify for a ONE-TIME payment. However, this special offer won't last forever, and a monthly fee may apply in the future.",
  },
  {
    q: "What skills or experience do I need to use My Productify?",
    ans: "You don't need to be an expert or a tech whiz! My Productify is designed to be completely beginner-friendly. Our software handles the heavy lifting, allowing you to focus on profiting.",
  },
  {
    q: "Is training and support included?",
    ans: "Yes, it is! When you purchase My Productify, you gain access to comprehensive step-by-step training materials. Plus, our dedicated support team is available 24/7 to assist you with any questions.",
  },
];
