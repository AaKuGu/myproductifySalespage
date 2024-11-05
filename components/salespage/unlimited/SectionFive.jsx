import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";
import React from "react";

const SectionFive = () => {
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
            Special Offer: Get My Productify Unlimited Today!
          </header>
          <div className={`${""} text-[4vw] lg:text-[1.5vw] `}>
            Right now, we’re offering this Unlimited upgrade at a special launch
            price, but it won’t last forever. As we continue to expand My
            Productify, the demand for Unlimited access will only increase.
            That’s why we encourage you to take advantage of this one-time
            opportunity to unlock the full power of My Productify without
            breaking the bank.
          </div>
        </div>
        <div className="text-[6vw] lg:text-[2.5vw] font-bold mb-4 lg:w-[60%] w-full text-center">
          Upgrade to Unlimited Now and Enjoy:
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col lg:flex-row gap-[5vw] lg:gap-[3vw]`}
        >
          <div className="flex flex-col lg:w-1/2  lg:gap-10 justify-center h-full  ">
            <div className="space-y-4 flex flex-col gap-[5vw] lg:gap-[3vw]">
              {unlimitedFeatures?.map((d, i) => (
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
                    <span className={`${""} font-bold italic`}>
                      {d?.feature}
                    </span>
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

export default SectionFive;

const unlimitedFeatures = [
  {
    feature: "Unlimited Courses",
    description: "Create as many courses as you want, whenever you want.",
  },
  {
    feature: "Unlimited Students and Leads",
    description: "No more limits on your potential reach and revenue.",
  },
  {
    feature: "Unlimited Sales Potential",
    description:
      "The only thing holding back your sales is your marketing, not your platform.",
  },
  {
    feature: "Unlimited Custom Domains",
    description: "Build multiple brands and strengthen your online presence.",
  },
  {
    feature: "Premium Template Access",
    description:
      "Get access to every template we release, designed for maximum conversions.",
  },
];

