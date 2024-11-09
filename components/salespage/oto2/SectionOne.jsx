import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div
      className={`flex flex-col gap-[5vw] lg:gap-[3vw] min-h-fit w-full items-center justify-start text-white p-[2vw] lg:p-[1vw] text-center `}
      style={{
        background: 'url("/background/heroBg.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="header-text w-full flex items-center justify-center ">
        <Image
          src="/logo/Reseller.png"
          width={700}
          height={150}
          alt="website logo"
          className={`${""} w-full lg:w-[40vw]`}
        />
      </div>
      <div
        className="font-extrabold text-[5vw] lg:text-[2.5vw]
-xl sm:text-2xl lg:text-3xl my-5 font-montserrat w-[95%] 400:w-[90%] lg:w-[80%]  text-center  flex flex-col items-center justify-center gap-[10vw] lg:gap-[5vw]"
      >
        <div
          className={`${""} w-full lg:w-[70%] leading-[7vw] lg:leading-[5vw] text-[6vw] lg:text-[3.5vw]`}
        >
          Unlock Your Success:
          <span className="text-orange-600 font-bold font-lato px-3 rounded-lg text-[5vw] lg:text-[2.7vw] underline">
            Get Full Reseller Rights to sell My Productify and Keep 100% of the
            Profits!
          </span>
        </div>

        <div className="mt-3 400:text-lg sm:text-xl tracking-wider font-bold flex-col flex items-center justify-center gap-[5vw] lg:gap-[2vw]">
          <div className={`${""} text-[6vw] lg:text-[3.5vw] font-extrabold`}>
            Save Time and Eliminate Effort
          </div>
          <div
            className={`${""} text-[5vw] lg:text-[2vw] leading-[6vw] lg:leading-[3vw]`}
          >
            with Ready-to-Sell Course Pages, Templates, and Marketing Materials!
          </div>
        </div>

        <div
          className="mt-4 lg:mt-3 text-[5vw] lg:text-[2vw]
  tracking-widest font-normal w-[90%] lg:w-[80%] leading-[10vw] lg:leading-[5vw]"
        >
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
      <div
        className="w-full flex items-center justify-center text-[5vw] lg:text-[2.5vw]
 rounded-lg border-dashed border-white border-[1vw] lg:border-[0.5vw] font-bold font-montserrat tracking-wider p-[1vw] lg:p-[0.5vw] flex-col leading-[10vw] lg:leading-[5vw]"
      >
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
        className={`${""} font-raleway text-[4vw] lg:text-[1.5vw]
font-bold text-yellow-500 my-5`}
      >
        Keep 100% Profits
      </div>

      <div
        className="bg-orange-200 text-black px-[5vw] lg:px-[2vw] py-[1vw] lg:py-[0.5vw] font-bold text-[4vw] lg:text-[1.5vw]
 rounded-full"
      >
        Tap into a Thriving Market and Profit from Reselling a Revolutionary
        Tool
      </div>

      <div className={`${""} w-[90%] h-auto flex items-center justify-center `}>
        <Image
          src="/logo/banner3.png"
          width={1000} // Original width
          height={500} // Original height
          alt="Description of the image"
          className={`${""} w-full lg:w-[60vw]`}
        />
      </div>
    </div>
  );
};

export default SectionOne;
