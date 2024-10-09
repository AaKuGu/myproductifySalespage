import Image from "next/image";
import React from "react";
import FirstImage from "@/public/logo/file.png";
import WebsiteLogo from "@/public/logo/logoTransDark.png";

const SectionOne = () => {
  return (
    <div
      className={`flex flex-col gap-5 min-h-fit w-full items-center justify-start text-white text-center py-2 `}
      style={{ background: 'url("/background/darkbg.png")' }}
    >
      <div className="font-extrabold text-[16px] 400:text-xl sm:text-2xl md:text-3xl my-3 md:my-5 font-montserrat w-[90%] 400:w-[90%] md:w-[80%]  text-center  flex flex-col items-center justify-center gap-10 ">
        <div className={`${""} w-full md:w-[85%] lg:w-[75%] xl:w-[70%]  `}>
          Unlock
          <span className="text-orange-600 font-bold font-lato px-3 rounded-lg md:text-2xl 400:text-xl text-[16px] underline">
            Maximum Brand Impact
          </span>
          <span>with</span>
          <span className="text-orange-600 font-bold font-lato px-3 rounded-lg md:text-2xl 400:text-xl text-[16px] underline">
            My Productify Ultimate
          </span>
        </div>
        <div className="header-text">
          <Image
            src={WebsiteLogo}
            width={400}
            height={200}
            alt="website logo"
          />
        </div>
        <div className="mt-3 400:text-lg sm:text-xl tracking-wider font-bold flex-col flex items-center justify-center gap-10">
          <div
            className={`${""} text-[25px] 400:text-[30px] md:text-[40px]  leading-[40px] md:leading-[60px] font-extrabold`}
          >
            Unlock the Secret to Elevating Your Brand
          </div>
          <div
            className={`${""} text-[16px] 400:text-[20px] md:text-[25px] lg:text-[30px]  leading-[30px] md:leading-[40px] lg:leading-[50px]`}
          >
            Skyrocketing Conversions, and Taking Full Control of Your Online
            Presence! Without My Productify Branding
          </div>
        </div>

        <div className="mt-4 md:mt-3 text-[16px] 400:text-lg tracking-widest font-normal w-[90%] md:w-[80%] lg:w-[70%] leading-[40px]">
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
      {/* <div className="w-full flex items-center justify-center text-[16px] 400:text-[18px] md:text-[22px] rounded-lg border-dashed border-white border-[2px] font-bold font-montserrat tracking-wider px-2 py-2 flex-col leading-[40px] md:leading-[50px]">
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
        className={`${""} font-raleway text-[22px] md:text-[25px] xl:text-[29px] font-bold text-yellow-500 my-5`}
      >
        Keep 100% Profits
      </div> */}

      {/* <div className="bg-orange-200 text-black px-4 sm:px-6 md:px-8 lg:px-10 py-2 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full">
        Unlock Your Potential: Custom Domain, Unlimited Courses, Higher API
        Limits, and No Watermarks with Our Pro Upgrade!
      </div> */}

      <div className={`${""} w-[90%] h-auto flex items-center justify-center `}>
        <Image
          src={FirstImage}
          // width={666} // Original width
          // height={600} // Original height
          alt="Description of the image"
        />
      </div>
    </div>
  );
};

export default SectionOne;
