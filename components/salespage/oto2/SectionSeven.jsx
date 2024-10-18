import { sectionFourData } from "@/constant/salespages";
import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";
import { sectionWidth } from "@/utils/utils";

const SectionSeven = () => {
  return (
    <div
      className={`flex flex-col gap-5 sm:gap-8 p-5 sm:p-8 w-full min-h-screen items-center justify-center`}
    >
      <div className={`${sectionWidth} gap-10`}>
        <header
          className={`font-bold text-2xl sm:text-3xl md:text-4xl px-5 sm:px-8 lg:px-12 text-center leading-9 sm:leading-8 md:leading-[50px]  2xl:leading-[60px] text-black`}
        >
          Unlock Your Reselling Potential with a Proven System and Powerful
          Tools
        </header>
        <section
          className={`grid grid-cols-1 sm:grid-cols-2  gap-5 md:gap-10  items-center justify-center flex-wrap `}
        >
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col gap-10 font-bold sm:gap-6 w-full items-center justify-center p-5 h-auto sm:min-h-[630px]`}
                style={{ boxShadow: "0px 0px 55px 30px #ccd9ff" }}
              >
                <Image
                  src={d?.image}
                  width={300}
                  height={300}
                  className="max-w-full h-auto"
                />
                <div
                  className={`px-5 py-2 sm:px-8 sm:py-3 bg-red-700 shadow-lg shadow-red-900 rotate-2 w-full text-center font-bold text-sm sm:text-base md:text-lg text-white subtle-rotate font-montserrat`}
                >
                  {d?.title}
                </div>
                <div
                  className={`text-[16px] 400:text-[18px] md:text-[22px] text-center mt-3 sm:mt-4`}
                >
                  {d?.desc}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default SectionSeven;

export const data = [
  {
    id: 1,
    title: "Proven System",
    image: "/logo/system.png",
    desc: "The foundation of your reselling journey is built on a tested and proven system that has already helped countless users achieve success. You’re not starting from scratch; you’re standing on the shoulders of those who have come before you.",
  },
  {
    id: 2,
    title: "Ready-Made Tools",
    image: "/logo/tools.png",
    desc: "With My Productify, you receive access to a complete suite of ready-made tools designed specifically for reselling. From customizable sales pages to marketing materials, everything you need is provided, saving you time and effort.",
  },
  {
    id: 3,
    title: "Comprehensive Support",
    image: "/logo/support.png",
    desc: "Our dedicated support team is here to help you every step of the way. Whether you have questions about setting up your funnel or need marketing tips, we’re committed to your success.",
  },
  {
    id: 4,
    title: "Community of Like-Minded Resellers",
    image: "/logo/resellers.png",
    desc: "Join a vibrant community of fellow resellers who are eager to share tips, strategies, and support. Networking with others in the industry can provide valuable insights and encouragement as you embark on your reselling journey.",
  },
  {
    id: 5,
    title: "Ongoing Updates and Improvements",
    image: "/logo/updates.png",
    desc: "The digital landscape is always changing, and so are we. By being part of the My Productify family, you’ll benefit from ongoing updates and improvements to the system, ensuring you always have the latest tools and features to maximize your success.",
  },
];
