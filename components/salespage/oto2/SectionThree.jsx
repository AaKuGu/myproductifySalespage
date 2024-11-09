import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <div
      className={` flex items-center justify-center w-full h-auto lg:mih-h-screen bg-white text-black`}
    >
      <div
        className={`${""} w-[90%] lg:w-[95%] lg:w-[80%] flex items-center justify-center flex-col lg:flex-row gap-[10vw] lg:gap-[5vw] my-[10vw] lg:my-[5vw]`}
      >
        <div
          className={`${""} flex flex-col gap-[5vw] lg:gap-[2.5vw] items-center justify-center w-full`}
        >
          <header
            className={`text-[4vw] lg:text-[1.5vw]
 font-bold text-start w-full font-lato underline`}
          >
            Why does it feel like everyone else is successfully reselling and
            making money, but I can’t seem to break into the market? Am I
            missing the opportunity that others are capitalizing on?",
          </header>
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`text-[4vw] lg:text-[1.5vw]
 text-start w-full`}
              >
                {d}
              </div>
            );
          })}
        </div>

        <Image
          src="/logo/missing.png"
          width={500}
          height={700}
          className={`${""} w-full lg:w-[40vw]`}
        />
      </div>
    </div>
  );
};

export default SectionThree;

const data = [
  "I’ve tried promoting other products and reselling tools, but none have given me the results I was promised. I just need something proven that I can rely on to actually sell and generate profits.",

  "What’s the real secret behind those making $5,000 - $10,000 from reselling? The gurus never talk about the done-for-you solutions that are practically guaranteed to succeed—what am I not being told?",

  "I’ve poured time and money into affiliate marketing and other reseller programs, but it always feels like I’m on the outside looking in. Why aren’t these programs delivering the sales I need to see?",

  "I keep hearing about successful resellers making thousands, but whenever I try, I’m left with little to show for it. Is there finally a tool or system that will give me real profits without all the hidden barriers?",
];
