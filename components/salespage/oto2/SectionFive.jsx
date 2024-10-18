import Image from "next/image";
import React from "react";

const SectionFive = () => {
  return (
    <div
      style={{ background: "url('/logo/bg1.png')", backgroundSize: "contain" }}
      className={`${""} w-full h-auto md:min-h-screen flex items-center justify-center`}
    >
      <div
        className={`${""} w-[90%] md:w-[95%] flex flex-col items-center justify-center gap-10 py-10 md:py-20 `}
      >
        <div
          className={`text-[18px] md:text-[22px] w-full text-center font-bold`}
        >
          Software consistently sells because they’re real, tangible products
          that offer solutions to people's problems. Fortunately, we're fully
          prepared to set up this complete sales funnel for you. You have
          absolutely nothing to worry about—just drive traffic to the sales
          website that will be set up for you, and soon enough, you'll be
          smiling all the way to the bank
        </div>

        {/* <div
          className={`text-[14px] md:text-[18px] flex flex-col items-start md:items-center justify-center gap-5 md:gap-7 w-full `}
        >
          {sectionTenData?.map((d, i) => {
            return <div key={i}>{d}</div>;
          })}
        </div> */}
        <Image src="/logo/software.png" width={1000} height={600} />
      </div>
    </div>
  );
};

export default SectionFive;
