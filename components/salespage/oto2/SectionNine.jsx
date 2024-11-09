import Image from "next/image";
import React from "react";

const SectionNine = () => {
  return (
    <div
      className={` flex items-center justify-center w-full h-auto md:mih-h-screen bg-purple-900 text-white`}
    >
      <div
        className={`${""} w-[90%] md:w-[95%] lg:w-[80%] flex items-center justify-center flex-col md:flex-row gap-10 py-10 md:py-20`}
      >
        <Image src="/logo/image9.png" width={600} height={200} />
        <div
          className={`${""} flex flex-col gap-10 items-center justify-center w-full`}
        >
          <header
            className={`text-[4vw] lg:text-[1.5vw] font-bold text-start w-full font-lato underline`}
          >
            The Biggest Problem Is
          </header>
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`v text-start w-full`}
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

export default SectionNine;

const data = [
  "Most people don’t even realize how incredibly lucrative the reselling business can be. While you’re focused on buying and consuming products, others are quietly making thousands by simply reselling those same tools.",

  "You might think the market is saturated, but the reality is that there’s an enormous, untapped opportunity in reselling digital products like software. Most people overlook this goldmine because they’re too busy chasing the next shiny object.",

  "The biggest reason you’re not making the money you see others making? You don’t yet understand how profitable it can be to leverage done-for-you products and resell them. The people making serious money online know this secret—and now, you can too.",

  "The problem isn’t that reselling is difficult or inaccessible. The problem is that most people don’t even know how easy it is to get started and start making profits, especially with a system that’s already built for you.",

  "You’re leaving money on the table by not stepping into the reselling world. The only reason others are making those big $$$ while you’re not is because they’ve tapped into this business model—and it’s time you do the same",
];
