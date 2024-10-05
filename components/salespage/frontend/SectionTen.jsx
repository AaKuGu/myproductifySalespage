import {
  gapScreen,
  leadingH,
  pSmall,
  pxBig,
  textH,
  textS,
} from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionTen = () => {
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
          We provide you with the tools to tap into a $400 Billion market…
        </div>

        <div
          className={`text-[14px] md:text-[18px] flex flex-col items-start md:items-center justify-center gap-5 md:gap-7 w-full `}
        >
          {sectionTenData?.map((d, i) => {
            return <div key={i}>{d}</div>;
          })}
        </div>
        <Image src="/logo/image2.png" width={1000} height={600} />
      </div>
    </div>
  );
};

export default SectionTen;
export const sectionTenData = [
  "Can you imagine… The “online learning” market is HUGE…",
  "It’s worth Billions of dollars…",
  "Imagine what would happen if you could easily create and sell your own courses…",
];
