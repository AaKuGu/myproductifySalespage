import { bigDiv, pSmall, sectionWidth, textH, textS } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionFour = () => {
  return (
    <div
      className={` flex items-center justify-center w-full h-auto lg:mih-h-screen text-white`}
      style={{
        background: "linear-gradient(to right,#000033, #330033)",
      }}
    >
      <div
        className={`${""} w-[90%] lg:w-[95%] lg:w-[80%] flex items-start justify-center flex-col-reverse lg:flex-row gap-[5vw] lg:gap-[2.5vw] my-[10vw] lg:my-[5vw]`}
      >
        <Image src="/logo/biggestProblem.png" width={500} height={700}
        className={`${''} w-full lg:w-[40vw]`}
        />
        <div
          className={`${""} flex flex-col gap-[5vw] lg:gap-[2.5vw] items-center justify-center w-full`}
        >
          <header
            className={`text-[6vw] lg:text-[3vw]
 font-bold text-start w-full font-lato underline`}
          >
            The Biggest Problem Is
          </header>
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`text-[4vw] lg:text-[2vw]
 text-start w-full`}
              >
                {d}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;

const data = [
  "Most people don’t even realize how incredibly lucrative the reselling business can be. While you’re focused on buying and consuming products, others are quietly making thousands by simply reselling those same tools.",

  "You might think the market is saturated, but the reality is that there’s an enormous, untapped opportunity in reselling digital products like software. Most people overlook this goldmine because they’re too busy chasing the next shiny object.",

  "The biggest reason you’re not making the money you see others making? You don’t yet understand how profitable it can be to leverage done-for-you products and resell them. The people making serious money online know this secret—and now, you can too.",

  "The problem isn’t that reselling is difficult or inaccessible. The problem is that most people don’t even know how easy it is to get started and start making profits, especially with a system that’s already built for you.",

  "You’re leaving money on the table by not stepping into the reselling world. The only reason others are making those big $$$ while you’re not is because they’ve tapped into this business model—and it’s time you do the same",
];
