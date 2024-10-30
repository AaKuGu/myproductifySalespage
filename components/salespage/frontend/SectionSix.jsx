import { sectionSixData } from "@/constant/salespages";
import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";
import { sectionWidth } from "@/utils/utils";

const SectionSix = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between p-2 sm:p-3 md:p-10  relative">
      {/* <div className="absolute inset-0 "> */}
        {/* <Image
          src="/logo/background2.png"
          layout="fill"
          // objectFit="cover lg:object-none"
          className="lg:object-none object-cover " // Cover on medium and larger screens, none on smaller
          alt="Background"
        /> */}
      {/* </div> */}
      <div
        className={`w-[90%] lg:w-[80%] flex items-center justify-center flex-col gap-[5vw] lg:gap-[3vw] my-[5vw] lg:my-[3vw] z-10 relative`}
      >
        {/* Heading */}
        <div className={`text-[6vw] lg:text-[2vw] font-bold text-center `}>
          Just To Take It Further…
        </div>

        {/* Subheading */}
        <div
          className={`text-center text-[4vw] lg:text-[1.5vw] px-5 sm:px-10 md:px-20 lg:px-40`}
        >
          Check Out These Stats That Make Creating & Selling Courses a RED HOT
          Business Opportunity!
        </div>

        {/* Cards Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-[5vw] lg:gap-[3vw] items-center justify-center w-full `}
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
      className={`flex flex-col sm:flex-row gap-4 w-full min-h-[200px] items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 to-purple-700 text-white text-[4vw] lg:text-[2vw] rotate-2 pulse p-[2vw]`}
    >
      {/* Icon/Image Section */}
      <div className={` flex items-center justify-center`}>
        <Image
          src={d?.icon}
          width={200}
          height={200}
          alt="stat icon"
          className={`${""} w-[15vw] lg:w-[20vw]`}
        />
      </div>

      {/* Description Section */}
      <div className={`text-center sm:text-left font-lato`}>{d.desc}</div>
    </div>
  );
};
