import { bigDiv, pSmall, sectionWidth, textH, textS } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionSix = () => {
  return (
    <div
      className={` flex items-center justify-center w-full h-auto lg:mih-h-screen  text-white`}
      style={{ background: "linear-gradient(to right , purple, blue " }}
    >
      <div
        className={`${""} w-[90%] lg:w-[95%] lg:w-[80%] flex items-center justify-center flex-col lg:flex-row gap-10 py-[10vw] lg:py-[5vw]`}
      >
        <Image
          src="/logo/goodNews.png"
          width={600}
          height={200}
          className={`${""} w-full lg:w-[40vw]`}
        />
        <div
          className={`${""} flex flex-col gap-[5vw] lg:gap-[2.5vw] items-center justify-center w-full`}
        >
          <header
            className={`text-[5vw] lg:text-[2.5vw]  font-bold text-start w-full font-lato underline`}
          > 
            Good News : The Perfact Solution
          </header>
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`text-[4vw] lg:text-[1.5vw]  text-start w-full`}
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

export default SectionSix;

const data = [
  "Introducing *My Productify*—the ultimate solution for anyone looking to break into the reselling market effortlessly. Unlike white-labeling or creating your own product, which can take months of development and countless resources, our ready-made sales funnel gets you started in minutes.",

  "Why spend time and money on developing a product from scratch when you can leverage existing, proven products? With *My Productify*, you eliminate the long trial-and-error process, allowing you to focus on driving traffic and making sales right away.",

  "While other business models require hefty investments and extensive marketing strategies, our system provides everything you need upfront. From pre-made templates to marketing materials, you’ll have a fully equipped platform that requires minimal effort to set up.",

  "With traditional models like white-labeling, you often face hidden fees and complicated agreements. *My Productify* offers a transparent and straightforward solution, ensuring you keep more of your hard-earned profits without unnecessary headaches.",

  "Join the ranks of successful resellers who are already profiting from this booming market. With *My Productify*, you get the best of both worlds—an easy, effective solution that saves you time, money, and effort, putting you on the fast track to success",
];
