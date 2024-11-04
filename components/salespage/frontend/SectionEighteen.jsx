import Image from "next/image";
import React from "react";

const SectionEighteen = () => {
  return (
    <section className="flex w-screen h-auto lg:min-h-screen items-center justify-center bg-gradient-to-r from-[#100073] to-[#570144]">
      <div className="w-[90%] flex flex-col items-center justify-center my-[10vw] lg:my-[5vw] text-white gap-[5vw] lg:gap-[3vw]">
        <header className="font-bold font-dmSans text-[5vw] lg:text-[3vw]">
          My Productify Works For Everyone
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center w-full">
          {data?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center sm:justify-between gap-0 rounded-xl  md:justify-start w-full  sm:gap-5"
            >
              <div className="flex items-center justify-center relative w-full rounded-xl  px-2">
                <Image
                  src={d?.image}
                  height={200}
                  width={300}
                  className={`${""} w-full md:flex-row rounded-xl border-orange-500 border-[2px]`}
                />
              </div>
              <div className="bg-gradient-to-tr from-purple-900 to-blue-950 rounded-full font-bold text-center px-4 py-2 text-[4vw] lg:text-[1.5vw]">
                {d.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionEighteen;

export const data = [
  {
    id: 1,
    title: "Affiliate Marketers",
    image: "/logo/affiliateMarketing.png",
  },
  {
    id: 2,
    title: "Coaches & Consultants",
    image: "/logo/affiliateMarketing.png",
  },
  {
    id: 3,
    title: "Online Educators",
    image: "/logo/onlineCourses.png",
  },
  {
    id: 4,
    title: "Small Business Owners",
    image: "/logo/BusinessOwners.png",
  },
  {
    id: 5,
    title: "Content Creators",
    image: "/logo/contentCreators.png",
  },
  {
    id: 6,
    title: "Freelancers",
    image: "/logo/freelancers.png",
  },
  {
    id: 7,
    title: "Digital Marketers",
    image: "/logo/digitalMarketing.png",
  },
  {
    id: 8,
    title: "Authors & Writers",
    image: "/logo/authors.png",
  },
  {
    id: 9,
    title: "E-commerce Entrepreneurs",
    image: "/logo/Ecommerce.png",
  },
  {
    id: 10,
    title: "Non-Profit Organizations",
    image: "/logo/nonProfit.png",
  },
  {
    id: 11,
    title: "Event Planners",
    image: "/logo/eventPlanners.png",
  },
  {
    id: 12,
    title: "Fitness Trainers",
    image: "/logo/fitness.png",
  },
];
