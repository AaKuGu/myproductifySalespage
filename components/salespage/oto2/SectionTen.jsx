import Image from "next/image";
import React from "react";

const SectionTen = () => {
  return (
    <div
      className={`flex items-center justify-center w-full h-auto lg:mih-h-screen  text-white`}
      style={{
        background: "linear-gradient(to right,#000033, #330033)",
      }}
    >
      <div
        className={`${""} w-[90%] lg:w-[95%] lg:w-[80%] flex items-start justify-center flex-col lg:flex-row gap-[10vw] lg:gap-[5vw] p-[5vw] lg:p-[2.5vw] my-[10vw] lg:my-[5vw]`}
      >
        <Image
          src="/logo/badNews.png"
          width={400}
          height={200}
          className={`${""} w-full lg:w-[30vw]`}
        />
        <div
          className={`${""} flex flex-col gap-[5vw] lg:gap-[2.5vw] items-center justify-center w-full`}
        >
          <header
            className={`text-[6vw] lg:text-[3.5vw] font-bold text-start w-full font-lato underline`}
          >
            Some Bad News
          </header>
          {data?.map((item, i) => {
            return (
              <div
                key={i}
                className={`text-[4vw] lg:text-[1.5vw] text-start w-full`}
              >
                <div className="font-bold text-yellow-300">{item.title}</div>
                <div>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionTen;

const data = [
  {
    title: "**Limited Time Offer**",
    desc: "We only have **50 reseller licenses** available at this special rate. Once they're gone, this opportunity will close, and you don't want to miss out on the chance to keep 100% of your profits!",
  },
  {
    title: "**Exclusive Launch Pricing**",
    desc: "This is a **one-time launch offer**! After this initial period, prices will go up, and you won’t find such an attractive commission structure anywhere else. Act fast to secure your spot!",
  },
  {
    title: "**Time-Sensitive Bonuses**",
    desc: "Sign up today to receive exclusive bonuses, including additional marketing resources and training modules that will not be available after the launch period. Don’t let these valuable tools slip away!",
  },
  {
    title: "**Join Before the Spots Fill Up**",
    desc: "With our growing community of resellers, spots are filling up quickly. We’re already down to **37 licenses** left. Take action now to ensure you’re part of this thriving opportunity!",
  },
  {
    title: "**Secure Your Future Now**",
    desc: "The longer you wait, the more you risk missing out on this lucrative reselling opportunity. Start your journey towards financial freedom today before this chance passes you by!",
  },
];
