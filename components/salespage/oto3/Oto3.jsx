import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import TotalValue from "./TotalValue";
import PurchaseCard from "./PurchaseCard";
import Faq from "../frontend/Faq";
import { faqData } from "../oto2/Oto4";
import MoneyBackGuarantee from "../oto2/MoneyBackGuarantee";
import DownsellComponent from "../DownsellComponent";
import OrderNotComplete from "../OrderNotComplete";
import MainFooter from "../frontend/MainFooter";
import WSODownsellBuyButton from "../oto1/WSODownsellBuyButton";
import WSOUpsellBuyButton from "../oto1/WSOBuyButton";
import FinalTwoButtons from "../oto1/FinalTwoButtons";
// import SectionOne from "./SectionOne";
// import SectionTwo from "./SectionTwo";
// import FewLeft from "./FewLeft";
// import SectionThree from "./SectionThree";
// import SectionFour from "./SectionFour";
// import SectionFive from "./SectionFive";
// import SectionSix from "./SectionSix";
// import Steps from "./Steps";
// import SectionSeven from "./SectionSeven";
// import SectionTweleve from "./SectionTwelve";
// import TotalValue from "./TotalValue";
// import SectionNine from "./SectionNine";
// import MoneyBackGuarantee from "./MoneyBackGuarantee";
// import SectionTen from "./SectionTen";
// import SectionEleven from "./SectionEleven";
// import Faq from "../frontend/Faq";
// import MainFooter from "../frontend/MainFooter";
// import SectionTweleve from "../frontend/SectionTweleve";

const proUpgradeDownsellData = {
  subTitle: "Get the Pro Upgrade for just:",
  lowerPrice: 27,
  cutPrice: 37,
  buttonData: {
    link: "#WSODownsellBuyButton",
    title: "Get Instant Access To All My Productify Pro",
  },
};
const Oto3 = ({ downsellComp }) => {
  return (
    <div
      className={`${""} w-full min-h-screen flex items-center justify-center flex-col `}
    >
      <OrderNotComplete />
      {downsellComp && <DownsellComponent data={proUpgradeDownsellData} />}
      <SectionOne />
      <SectionTwo
        header1="Add the Power of a Custom Domain for Your Courses!"
        header2="Not Just Custom Route , Add Custom Domain As Well"
        img="/logo/customDomain.png"
      >
        <div>
          Adding a custom domain to your <strong>My Productify</strong> course
          pages offers several benefits that significantly enhance your brand
          presence and credibility
        </div>
        <div>
          <strong>Brand Recognition:</strong> A custom domain instantly makes
          your course site more recognizable and memorable. It strengthens your
          brand identity, making it easier for your audience to recall and
          return to your offerings.
        </div>
        <div>
          <strong>Professionalism: </strong> With a custom domain, you project
          professionalism and credibility. It demonstrates to your audience that
          you take your brand seriously, instilling greater confidence for
          potential students to engage with your courses.
        </div>
        <div>
          <strong>SEO Benefits: </strong> Custom domains often receive higher
          rankings in search engines compared to generic ones. This can improve
          your site's visibility, attracting more visitors and potential
          students.
        </div>
        <div>
          <strong>Trust and Security: </strong> Internet users are cautious
          about unfamiliar sites. A custom domain fosters trust and security,
          encouraging more interactions and boosting conversions for your
          courses.
        </div>
        <div>
          <strong>Consistent Branding Across Platforms: </strong> Using the same
          custom domain across your website, email, and other platforms creates
          a cohesive brand experience for your audience, reinforcing your
          identity.
        </div>
        <div>
          With <strong>My Productify, </strong> adding a custom domain to your
          course pages is a simple yet powerful way to maximize these benefits
          and enhance your online presence!
        </div>
      </SectionTwo>
      <SectionTwo
        header1="Use Your Own Custom Footer"
        header2="Direct Every Page Visitor to Your Branding Website"
        reverse={true}
        img="/logo/removeWatermark.png"
        bgBlue={true}
      >
        <div>
          With <strong>My Productify Pro</strong>, you gain complete control
          over your branding, down to the finest details. Remove any default
          branding elements from your course pages, ensuring they are uniquely
          yours and free from distractions that could confuse your audience.
        </div>
        <div>
          <strong>Linking your footer back to your main website:</strong>{" "}
          creates a seamless navigation experience for your visitors, enhancing
          their journey without negatively impacting your conversions. Elevate
          your course branding and keep your focus on what matters most—your
          content and your students!
        </div>
      </SectionTwo>
      <SectionTwo
        header1="Unlock the Power of 50 Additional Courses!"
        header2="More Courses || More Earnings"
        img="/logo/moreCourses.png"
      >
        <div>
          Imagine the possibilities with the ability to create{" "}
          <strong>50 more courses</strong> using My Productify Pro! This
          incredible feature empowers you to diversify your offerings, catering
          to various interests and learning styles.
        </div>
        <div>
          Expand your expertise and showcase your knowledge across multiple
          subjects, attracting a broader audience and increasing your revenue
          potential. With each new course, you enhance your{" "}
          <strong>brand’s visibility</strong> , positioning yourself as a
          trusted authority in your niche. Plus, the flexibility to launch
          numerous courses allows you to experiment with different topics and
          formats, ensuring you meet the evolving needs of your students.
        </div>
        <div>
          <strong>Don’t just limit</strong> your impact—embrace the opportunity
          to educate, inspire, and connect with more learners than ever before!
        </div>
      </SectionTwo>
      <SectionTwo
        header1="SuperCharge with 1,500 Visits"
        header2="Scaling Will Never Be A Problem"
        reverse={true}
        img="/logo/Scaling.png"
        bgBlue={true}
      >
        <div>
          With My <strong>Productify Pro</strong>, you'll receive{" "}
          <strong>1,500 visits</strong> per month, providing the essential
          resources you need to effectively launch and manage your courses.
        </div>
        <div>
          This generous limit allows for seamless user registrations, easy
          access to course content, and efficient tracking of engagement,
          ensuring your users have a smooth experience from the start. As your
          audience grows, you can easily upgrade for just $20 to boost your
          limit to 3,000 visits per month.
        </div>
        <div>
          This flexibility ensures that you can{" "}
          <strong>accommodate increased traffic</strong>
          and interaction without interruptions. Experience the freedom to
          innovate and engage your audience, all while taking your courses to
          the next level with our robust support!
        </div>
      </SectionTwo>

      <TotalValue />
      <MoneyBackGuarantee />
      <PurchaseCard />
      {/* <a href="https://warriorplus.com/o2/buy/g886gd/fp25t5/z7mcqg"><img src="https://warriorplus.com/o2/btn/fn100011011/g886gd/fp25t5/411493"></a> */}
      {/* <a href="https://warriorplus.com/o/nothanks/fp25t5">No Thanks</a> */}
      <div className={`${""} w-full h-auto flex items-center justify-center `}>
        {downsellComp ? (
          <WSODownsellBuyButton
            linkUrl="https://warriorplus.com/o2/buy/g886gd/qbxt0y/xs673s"
            imageLink="/buyButtons/proDownsell.png"
          >
            <img
              src="https://warriorplus.com/o2/btn/fn100011011/g886gd/qbxt0y/411494"
              className="hidden"
            />
          </WSODownsellBuyButton>
        ) : (
          <WSOUpsellBuyButton
            linkUrl="https://warriorplus.com/o2/buy/g886gd/fp25t5/z7mcqg"
            imageLink="/buyButtons/proUpsell.png"
          >
            <img
              src="https://warriorplus.com/o2/btn/fn100011011/g886gd/fp25t5/411493"
              className="hidden"
            />
          </WSOUpsellBuyButton>
        )}
      </div>
      {/* <a href="https://warriorplus.com/o2/buy/g886gd/qbxt0y/xs673s"><img src="https://warriorplus.com/o2/btn/fn100011011/g886gd/qbxt0y/411494"></a> */}
      <FinalTwoButtons downsellComp={downsellComp} buttonsData={buttonsData} />
      
      <Faq data={faqData} />
      <MainFooter />
      {/* <SectionTwo /> */}
      {/* <SectionThree /> */}
      {/* <SectionFour /> */}
      {/* <SectionFive /> */}
      {/* <div
        className={`${""} w-full min-h-[100vh] flex flex-col items-center justify-center gap-[2vw] text-black py-10 font-bold `}
        style={{ backgroundImage: "url('/background/bg1.png')" }}
      >
        <header
          className={`${""}  flex flex-col items-center justify-center w-[95%] 400:w-[90%] `}
        >
          <div
            className={`${""} font-bold md:font-normal text-[16px] 400:text-[18px] md:text-[22px] xl:text-[26px] text-center  `}
          >
            To Make SERIOUS Money Selling Software
          </div>
          <div
            className={`${""} text-[22px] font-bold md:text-[29px] xl:text-[38px] text-purple-900 mt-5`}
          >
            You Need 3 Things
          </div>
        </header>
        {mainFeaturesData?.map((d, i) => {
          return <SectionTweleve data={d} index={i} key={i} />;
        })}
      </div> */}
      {/* <SectionSix /> */}
      {/* <Steps /> */}
      {/* <SectionSeven /> */}
      {/* <SectionEleven /> */}
      {/* <MoneyBackGuarantee /> */}
      {/* <TotalValue /> */}
      {/* <SectionTen /> */}
      {/* <FewLeft /> */}
      {/* <Faq data={faqData} /> */}
      {/* <MainFooter /> */}
    </div>
  );
};

export default Oto3;

const buttonsData = [
  {
    label: {
      title: "Yes Give Me 'Pro Upgrade'",
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
    upsellLink: "https://warriorplus.com/o/nothanks/fp25t5",
    downsellLink: "https://warriorplus.com/o/nothanks/qbxt0y",
    color: "red",
  },
];
