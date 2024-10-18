import { sectionSixData } from "@/constant/salespages";
import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";
import { sectionWidth } from "@/utils/utils";

const SectionEleven = () => {
  return (
    <div
      className={`flex flex-col gap-10 p-5 sm:p-8 md:p-10 lg:p-16 items-center justify-center w-full bg`}
    >
      <div className={`${sectionWidth} gap-10`}>
        {/* Heading */}
        {/* Subheading */}
        <div
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center leading-tight md:leading-[50px] px-5 sm:px-10 md:px-20 lg:px-40`}
        >
          With Reseller License Of 'My Productify', You Don't Have To Hassle
          With
        </div>

        {/* Cards Section */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2  gap-10 items-center justify-center w-full `}
        >
          {whatYouDontHaveToHassleWithPoints?.map((d, i) => {
            return <Card key={i} d={d} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionEleven;

const Card = ({ d }) => {
  return (
    <div
      className={`flex flex-col gap-4 w-full min-h-[200px] items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 to-purple-700 text-white text-lg  rotate-2 pulse px-5 py-3 `}
    >
      {/* Icon/Image Section */}
      <div className={` flex items-center justify-center`}>
        <Image src={d?.icon} width={50} height={50} alt="stat icon" />
      </div>

      {/* Description Section */}
      <div className={`${""} text-[22px] md:text-[26px] font-bold`}>
        {d?.title}
      </div>
      <div className={`${""} text-[18px] md:text-[22px]`}>{d?.desc}</div>
    </div>
  );
};

export const whatYouDontHaveToHassleWithPoints = [
  {
    title: "Product Creation",
    desc: "Say goodbye to the daunting process of creating your own products from scratch. With *My Productify*, you’re reselling a proven solution, so you can skip the hassle of product development.",
    icon: "/logo/productIcon.png", // Update the icon path as needed
  },
  {
    title: "Technical Setup",
    desc: "Forget about complex technical setups or website building. We provide a fully functional sales funnel that’s ready to go, allowing you to focus on driving traffic and making sales instead.",
    icon: "/logo/settingsIcon.png", // Update the icon path as needed
  },
  {
    title: "Marketing Materials",
    desc: "No need to spend hours creating marketing materials or sales pages. You’ll receive professionally designed templates and resources, streamlining your marketing efforts without the extra effort.",
    icon: "/logo/marketingIcon.png", // Update the icon path as needed
  },
  {
    title: "Customer Support",
    desc: "You won’t have to manage customer inquiries or support issues. Our team handles customer support for you, allowing you to concentrate on growing your reselling business.",
    icon: "/logo/supportIcon.png", // Update the icon path as needed
  },
  {
    title: "Hidden Fees and Costs",
    desc: "Unlike other programs, there are no hidden fees or unexpected costs associated with reselling. What you see is what you get, ensuring full transparency and maximizing your profits.",
    icon: "/logo/noFeesIcon.png", // Update the icon path as needed
  },
];
