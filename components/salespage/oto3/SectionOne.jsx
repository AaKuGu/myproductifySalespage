import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div
      className={`flex flex-col gap-5 h-auto w-full items-center justify-start text-white text-center pb-[10vw] lg:pb-[5vw] `}
      style={{
        background: 'url("/background/heroBg.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="font-extrabold text-[5vw] lg:text-[2.5vw] my-[5vw] lg:my-[2.5vw] font-montserrat w-[90%]   text-center  flex flex-col items-center justify-center ">
        <div className="header-text flex items-center justify-center w-[60%] ">
          <Image
            src="/logo/pro.png"
            width={400}
            height={150}
            alt="website logo"
            className={`${""} w-full lg:w-[25vw]`}
          />
        </div>
        <div
          className={`${""} w-full lg:w-[80%] mb-[7vw] lg:mb-[2.5vw] leading-[10vw] lg:leading-[4.5vw] `}
        >
          Unlock{" "}
          <span className="text-orange-600 font-bold font-lato px-3 rounded-lg  underline">
            Maximum Brand Impact{" "}
          </span>
          <span>with</span>{" "}
          <span className="text-orange-600 font-bold font-lato px-3 rounded-lg text-[5vw] lg:text-[2.5vw]  underline">
            My Productify Pro
          </span>
        </div>

        <div className=" text-[4vw] lg:text-[2vw] tracking-wider font-bold flex-col flex items-center justify-center  mb-[7vw] lg:mb-[2.5vw] leading-[10vw] lg:leading-[4.5vw]">
          <div className={`${""} text-[6vw] lg:text-[3.5vw]  font-extrabold`}>
            Unlock the Secret to Elevating Your Brand
          </div>
          <div className={`${""} `}>
            Skyrocketing Conversions, and Taking Full Control of Your Online
            Presence! Without My Productify Branding
          </div>
        </div>

        <div className="mt-4 text-[4vw] lg:text-[2vw]   tracking-widest font-normal w-[90%]  lg:w-[70%] leading-[7vw] lg:leading-[3vw]">
          — Unlock Your Pro Upgrade with{" "}
          <span className={`${""} text-purple-400 underline`}>
            Custom Domain, Create More Courses, Enjoy Increased API Rate Limits,
            and Remove Watermarks
          </span>{" "}
          All with Zero Setup and Keep 100% of Your Profits! —
        </div>
      </div>
      {/* Logo Section */}

      {/* Tagline */}
      {/* <div className="w-full flex items-center justify-center  rounded-lg border-dashed border-white border-[2px] font-bold font-montserrat tracking-wider px-2 py-2 flex-col leading-[40px] lg:leading-[50px]">
        <span>Discover How Our Top Members Are</span>
        <span className={`${""} text-yellow-500 underline`}>
          MAKING $5000- $10,000 Every Week
        </span>
        <span>
          by Reselling{" "}
          <span className={`${""} bg-red-500 px-2 py-2 rounded-full`}>
            My Productify
          </span>{" "}
          Proven Results from Our VIP Reseller Community!
        </span>
      </div>

      <div
        className={`${""} font-raleway text-[5vw] lg:text-[2.5vw] font-bold text-yellow-500 my-5`}
      >
        Keep 100% Profits
      </div> */}

      {/* <div className="bg-orange-200 text-black px-4 sm:px-6 lg:px-8 lg:px-10 py-2 font-bold text-sm sm:text-lg lg:text-xl lg:text-2xl rounded-full">
        Unlock Your Potential: Custom Domain, Unlimited Courses, Higher API
        Limits, and No Watermarks with Our Pro Upgrade!
      </div> */}

      <div
        className={`${""} w-[90%] lg:w-[70%] h-auto flex items-center justify-center `}
      >
        <Image
          src="/logo/banner1.png"
          width={1000}
          height={500}
          // src={FirstImage}
          // width={666} // Original width
          // height={600} // Original height
          alt="Description of the image"
          className={`${""} w-full`}
        />
      </div>
    </div>
  );
};

export default SectionOne;
