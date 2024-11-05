import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";
import React from "react";

const SectionThree = () => {
  return (
    <section
      className="w-full h-auto lg:min-h-screen  flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black text-white"
      style={{
        background: 'url("/background/two.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center lg:items-center my-[7vw] lg:my-[3vw] w-[90%] justify-center lg:justify-between gap-[5vw] lg:gap-[3vw] h-full">
        <div
          className={`${""} flex items-center justify-center flex-col gap-[4vw] lg:gap-[1.5vw]`}
        >
          {" "}
          <header className="text-[8vw] lg:text-[4vw] font-bold mb-4 underline italic">
            Here’s What My Productify Unlimited Means for You
          </header>
          <div className={`${""} text-[4vw] lg:text-[1.5vw] `}>
            With Unlimited, you have a platform that scales with you, letting
            you grow without ever worrying about caps or restrictions. This is
            especially powerful if you’re an ambitious course creator, digital
            marketer, or anyone with big plans for building a profitable online
            business.
          </div>
        </div>
        <div className="text-[6vw] lg:text-[2.5vw] font-bold mb-4 lg:w-[60%] w-full text-center">
          In short, My Productify Unlimited is designed for creators who want:
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col lg:flex-row gap-[5vw] lg:gap-[3vw]`}
        >
          <div className="flex flex-col lg:w-1/2  lg:gap-10 justify-center h-full  ">
            <div className="space-y-4 flex flex-col gap-[5vw] lg:gap-[3vw]">
              {unlimitedBenefits?.map((d, i) => (
                <div
                  key={i}
                  className="text-start w-full text-[4vw] lg:text-[1.5vw] flex items-start justify-center flex-col"
                >
                  <div
                    className={`${""} flex items-center justify-center gap-[2vw] lg:gap-[1vw]`}
                  >
                    <span className={`${""} text-sky-400`}>
                      <FaHandPointRight />
                    </span>
                    <span className={`${""} font-bold italic`}>{d?.title}</span>
                  </div>
                  <div>{d?.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[35vw] ">
            <Image
              src="/logo/girl1.png"
              width={500}
              height={500}
              className="w-full h-auto"
              alt="Logo"
            />
          </div>
        </div>
        {/* <div
          className={`${""} flex items-center justify-center flex-col lg:flex-row gap-[5vw] lg:gap-[3vw]`}
        >
          <div className="w-full lg:w-[35vw] ">
            <Image
              src="/logo/man2.png"
              width={500}
              height={500}
              className="w-full h-auto"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col lg:w-1/2  lg:gap-10 justify-center h-full  ">
            <div className="space-y-4 flex flex-col gap-[5vw] lg:gap-[3vw]">
              {unlimitedFeatures2?.map((d, i) => (
                <div
                  key={i}
                  className="text-start w-full text-[4vw] lg:text-[1.5vw] flex items-center justify-center flex-col"
                >
                  <div
                    className={`${""} flex items-center justify-center gap-[2vw] lg:gap-[1vw]`}
                  >
                    <span className={`${""} text-sky-400`}>
                      <FaHandPointRight />
                    </span>
                    <span className={`${""} font-bold italic`}>{d?.title}</span>
                  </div>
                  <div>{d?.description}</div>
                  <div>{d?.benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SectionThree;

const unlimitedBenefits = [
  {
    title: "Complete Freedom to Scale",
    description:
      "Go big with unlimited everything—courses, leads, domains, students, and more!",
  },
  {
    title: "Zero Limits on Creativity and Earnings",
    description:
      "The sky is truly the limit with unlimited resources at your fingertips.",
  },
  {
    title: "Room to Experiment & Expand",
    description:
      "Try out new ideas, experiment with niche courses, or expand your offerings—My Productify Unlimited grows with you.",
  },
];
