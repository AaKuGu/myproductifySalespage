import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";
import React from "react";

const SectionFour = () => {
  return (
    <section
      className="w-full h-auto lg:min-h-screen  flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black text-black"
      style={{
        background: 'url("/background/one.png")',
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
            Is My Productify Unlimited Right for You?
          </header>
          <div className={`${""} text-[4vw] lg:text-[1.5vw] `}>
            If you’re serious about building an income-generating business that
            can evolve and expand with your vision, the answer is a resounding
            YES. The Unlimited upgrade is tailor-made for creators and
            entrepreneurs who see the potential in going beyond the basics.
          </div>
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col lg:flex-row gap-[5vw] lg:gap-[3vw]`}
        >
          <div className="w-full lg:w-[35vw] ">
            <Image
              src="/logo/image9.png"
              width={500}
              height={500}
              className="w-full h-auto"
              alt="Logo"
            />
          </div>
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
                    <span className={`${""} font-bold italic`}>{d}</span>
                  </div>
                </div>
              ))}
            </div>
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

export default SectionFour;

const unlimitedFeatures = [
  "Want to reach thousands of students and build a massive email list? Unlimited is for you.",
  "Want to generate passive income through multiple courses and brands? Unlimited is for you.",
  "Want to boost sales with limitless access to our most powerful features? Unlimited is for you.",
];
