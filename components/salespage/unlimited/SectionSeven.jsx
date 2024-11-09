import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";
import React from "react";

const SectionSeven = () => {
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
          <header className="text-[5vw] lg:text-[3vw] font-bold mb-4 underline italic  text-center">
            Imagine the Future of Your Online Business—Without Limits
          </header>
          <div className={`${""} text-[4vw] lg:text-[1.5vw] `}>
            This is your chance to secure a future-proof, scalable platform that
            grows with you. Whether you’re just starting or looking to take your
            business to the next level, My Productify Unlimited has everything
            you need to make it happen.
          </div>
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col gap-[4vw] lg:gap-[1.5vw]`}
        >
          {" "}
          <header className="text-[8vw] lg:text-[4vw] font-bold mb-4 underline italic text-center">
            Don’t Wait! Unlock Unlimited Potential Today!
          </header>
          <div className={`${""} text-[4vw] lg:text-[1.5vw] `}>
            Invest in My Productify Unlimited now and turn your ideas into a
            successful, limitless online business. Click the button below to
            upgrade and make your path to success truly unlimited!
          </div>
        </div>
        {/* <div
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
        </div> */}
        <div
          className={`${""} w-[90%] h-auto flex items-center justify-center `}
        >
          <Image
            src="/logo/banner3.png"
            width={1000} // Original width
            height={500} // Original height
            alt="Description of the image"
            className={`${""} w-full lg:w-[60vw]`}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;

// const unlimitedFeatures = [
//   "Want to reach thousands of students and build a massive email list? Unlimited is for you.",
//   "Want to generate passive income through multiple courses and brands? Unlimited is for you.",
//   "Want to boost sales with limitless access to our most powerful features? Unlimited is for you.",
// ];
