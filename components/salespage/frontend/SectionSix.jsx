import { sectionSixData } from "@/constant/salespages";
import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";
import { sectionWidth } from "@/utils/utils";

const SectionSix = () => {
  return (
    <div
      className={`flex flex-col gap-10 p-5 sm:p-8 md:p-10 lg:p-16 items-center justify-center w-full bg`}
    >
      <div className={`${sectionWidth} gap-10`}>
        {/* Heading */}
        <div
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center `}
        >
          Just To Take It Further…
        </div>

        {/* Subheading */}
        <div
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center leading-tight md:leading-[50px] px-5 sm:px-10 md:px-20 lg:px-40`}
        >
          Check Out These Stats That Make Creating & Selling Courses a RED HOT
          Business Opportunity!
        </div>

        {/* Cards Section */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2  gap-10 items-center justify-center w-full `}
        >
          {sectionSixData?.map((d, i) => {
            return <Card key={i} d={d} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;

const Card = ({ d }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 w-full min-h-[200px] items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 to-purple-700 text-white text-lg  rotate-2 pulse px-5 py-3 `}
    >
      {/* Icon/Image Section */}
      <div className={` flex items-center justify-center`}>
        <Image src={d?.icon} width={200} height={200} alt="stat icon" />
      </div>

      {/* Description Section */}
      <div className={`text-center sm:text-left font-lato`}>{d.desc}</div>
    </div>
  );
};
