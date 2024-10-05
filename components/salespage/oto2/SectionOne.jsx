import Image from "next/image";
import React from "react";
import FirstImage from "@/public/logo/file.png";
import WebsiteLogo from "@/public/logo/logoTransDark.png";

const SectionOne = () => {
  return (
    <div
      className={`flex flex-col gap-5 min-h-fit w-full items-center justify-start text-white px-4 sm:px-6 md:px-8 lg:px-10 text-center py-2 `}
      style={{ background: 'url("/background/darkbg.png")' }}
    >
      <div className="font-extrabold text-[16px] 400:text-xl sm:text-2xl md:text-3xl my-5 font-montserrat w-[95%] 400:w-[90%] md:w-[75%]  text-center  flex flex-col items-center justify-center gap-10">
        <div className={`${""} w-full md:w-[85%] lg:w-[75%] xl:w-[70%] `}>
          Unlock Your Success:
          <span className="text-orange-600 font-bold font-lato px-3 rounded-lg md:text-2xl 400:text-xl text-[16px] underline">
            Get Full Reseller Rights to sell My Productify and Keep 100% of the
            Profits!
          </span>
        </div>

        <div className="mt-3 text-[16px] 400:text-lg sm:text-xl tracking-wider font-bold">
          Save Time and Eliminate Effort with Ready-to-Sell Course Pages,
          Templates, and Marketing Materials!
        </div>
        <div className="header-text">
          <Image
            src={WebsiteLogo}
            width={400}
            height={200}
            alt="website logo"
          />
        </div>
        <div className="mt-4 md:mt-3 text-[16px] 400:text-lg tracking-widest font-normal w-[90%] md:w-[80%] lg:w-[70%]">
          Start Earning in the{" "}
          <span className={`${""} text-purple-400 underline`}>
            Next 30 Seconds
          </span>{" "}
          —Sell My Productify With{" "}
          <span className={`${""} text-purple-400 underline`}>Zero Setup</span>{" "}
          and{" "}
          <span className={`${""} text-purple-400 underline`}>
            Keep All the Profits!
          </span>
        </div>
      </div>
      {/* Logo Section */}

      {/* Tagline */}
      <div className="w-full flex items-center justify-center text-[16px] 400:text-[18px] md:text-[22px] rounded-lg border-dashed border-white border-[2px] font-bold font-montserrat tracking-wider px-2 py-2 flex-col leading-[40px] md:leading-[50px]">
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
      </div>

      <div className="bg-orange-200 text-black px-4 sm:px-6 md:px-8 lg:px-10 py-2 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full">
        Tap into a Thriving Market and Profit from Reselling a Revolutionary
        Tool
      </div>

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
