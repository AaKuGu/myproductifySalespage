import Image from "next/image";
import React from "react";

const SectionFive = () => {
  return (
    <div
      style={{ background: "url('/logo/bg1.png')", backgroundSize: "contain" }}
      className={`${""} w-full h-auto lg:min-h-screen flex items-center justify-center`}
    >
      <div
        className={`${""} w-[90%] lg:w-[95%] flex flex-col items-center justify-center gap-10 py-[10vw] lg:py-[5vw] `}
      >
        <div
          className={`text-[5vw] lg:text-[2vw]
 w-full text-center font-bold`}
        >
          Software consistently sells because they’re real, tangible products
          that offer solutions to people's problems. Fortunately, we're fully
          prepared to set up this complete sales funnel for you. You have
          absolutely nothing to worry about—just drive traffic to the sales
          website that will be set up for you, and soon enough, you'll be
          smiling all the way to the bank
        </div>

        {/* <div
          className={`text-[5vw] lg:text-[2.5vw]  flex flex-col items-start lg:items-center justify-center gap-5 lg:gap-7 w-full `}
        >
          {sectionTenData?.map((d, i) => {
            return <div key={i}>{d}</div>;
          })}
        </div> */}
        <Image
          src="/logo/software.png"
          width={1000}
          height={600}
          className={`${""} w-full`}
        />
      </div>
    </div>
  );
};

export default SectionFive;
