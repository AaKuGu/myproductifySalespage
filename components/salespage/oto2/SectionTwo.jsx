import { bigDiv, pSmall, sectionWidth, textH, textS } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  return (
    <div
      className={` flex items-center justify-center w-full h-auto md:mih-h-screen bg-black text-white`}
    >
      <div
        className={`${""} w-[90%] md:w-[95%] lg:w-[80%] flex items-center justify-center flex-col gap-10 py-10 md:py-20`}
      >
        <div
          className={`${""} flex flex-col gap-10 items-center justify-center w-full`}
        >
          <header
            className={`text-[22px] md:text-[18px] lg:text-[26px] font-bold text-start w-full font-lato underline`}
          >
            Here’s the Real Truth That Nobody Else Will Share With You.
          </header>
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`text-[18px] md:text-[16px] lg:text-[22px] text-start w-full`}
              >
                {d}
              </div>
            );
          })}
        </div>

        <Image
          src="/logo/money.png"
          width={600}
          height={200}
          // className={`${""} w-full`}
        />
      </div>
    </div>
  );
};

export default SectionTwo;

const data = [
  "There are two types of people online: Buyers and Sellers.",

  "Buyers constantly chase after shiny objects and keep purchasing.",

  "Sellers consistently attract new leads, generate sales, and reap profits.",
  "That’s why, For the first time ever, we’re offering you the chance to become a VIP Reseller of My Productify. With this license, you’ll have everything you need to start selling immediately on the WarriorPlus Marketplace—100% Done for You, No Tech Skills Needed!",

  "If you’re not selling or promoting anything online that generates an exchange of cash or value, you won’t make money online. Period. To earn online, you need to sell something.",

  "It’s time to stop chasing shiny objects and start selling a real, profitable product! Get your VIP Reseller License for My Productify today and start making money online—no experience required!",
];
