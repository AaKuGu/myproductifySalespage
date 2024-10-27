import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div
      className={`flex flex-col min-h-fit w-full items-center justify-start text-white text-center py-5 `}
      style={{
        background: 'url("/background/heroBg.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${""} w-[95%] h-auto flex flex-col items-center justify-start  `}
      >
        {/* Logo Section */}
        <div className="header-text mb-3">
          <Image
            src="/logo/myProductifyLogo.png"
            height={100}
            width={400}
            alt="website logo"
          />
        </div>

        {/* Tagline */}
        {/* <div className="flex px-4 sm:px-6 md:px-8 lg:px-10 py-2  text-white rounded-full text-sm sm:text-lg md:text-xl lg:text-2xl font-roboto border-purple-500 border-[2px] mb-3">
        Launch Your Course Product with Ease: Introducing My Productify
      </div> */}

        <div className="flex justify-center py-2 text-white rounded-full text-[3vw] lg:text-[2vw] font-roboto border-purple-500 border-[2px] mb-3 w-full lg:w-auto text-center lg:px-5">
          Launch Your Course Product with Ease: Introducing My Productify
        </div>

        {/* Main Heading */}
        <div className="font-bold  my-5 gap-[2vw] lg:gap-2 flex flex-col tracking-wider w-full">
          <div className={`${""} text-[4vw] lg:text-[3vw]`}>
            Revolutionary Tool Instantly Crafts Stunning,{" "}
          </div>
          <div className={`${""} text-[4vw] lg:text-[2.8vw]`}>
            <span className="text-[#ff80ff] font-bold font-lato px-3 rounded-lg  underline">
              Pro-Level Courses
            </span>
            in Hot Niches with{" "}
          </div>
          <div className="text-[#33ffff] font-bold font-lato px-3 rounded-lg py-1 md:py-2 underline text-[4vw] lg:text-[2.8vw]">
            Ready-to-Use Templates{" "}
          </div>{" "}
          <div className="italic bounce my-[3vw] lg:my-[2vw] text-[5vw] lg:text-[3vw] ">
            Launch in Just 30 Seconds!
          </div>
        </div>

        {/* Description */}
        <div className="text-base sm:text-lg md:text-xl leading-[28px] sm:leading-[32px] md:leading-[36px] px-4 sm:px-12 md:px-20 lg:px-32 xl:px-40 2xl:px-60 my-5">
          <span className="font-bold ">
            No Course Creation or Design Skills or Coding Skills Needed
          </span>{" "}
          – Save Time and Money While Creating Eye-Catching Course Products That
          Attract 10X More Attention!
        </div>

        {/* Call to Action Button */}
        <div className="bg-orange-200 text-black px-4 sm:px-6 md:px-8 lg:px-10 py-2 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full my-5">
          Launch Your Course Selling Business in Just 3 Clicks!
        </div>

        {/* Benefits Statement */}
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-5">
          <b>No</b> Course Creation! <b>No</b> Research! <b>No</b> Audience
          Selection! <b>No</b> Hassle!
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

// import Image from "next/image";
// import React from "react";

// const SectionOne = () => {
//   return (
//     <div
//       className={`${""}flex flex-col gap-5 min-h-screen w-full items-center justify-start  text-white px-[0px] text-center py-5 `}
//       style={{ background: 'url("/background/darkbg.png")' }}
//     >
//       <div className={`${""} header-text`}>
//         <Image
//           src="/logo/logoTransDark.png"
//           height={200}
//           width={400}
//           alt="website logo"
//         />
//       </div>
//       <div
//         className={`${""} flex px-2 sm:px-3 md:px-4 lg:px-5 py-[1px] md:py-1 bg-white text-black rounded-full text-xl font-slabo13px`}
//       >
//         Launch Your Course Product with Ease: Introducing My Productify
//       </div>
//       <div className={`${""} font-extrabold text-4xl leading-[70px] my-5`}>
//         Revolutionary Tool Instantly Crafts Stunning,{" "}
//         <span className={`${""} bg-orange-600 px-3  rounded-lg`}>
//           {" "}
//           Pro-Level Courses
//         </span>{" "}
//         in Hot Niches with{" "}
//         <span className={`${""} bg-orange-600 px-3 rounded-lg py-2 pulse`}>
//           {" "}
//           Ready-to-Use Templates
//         </span>{" "}
//         <div className={`${""} bounce`}>Launch in Just 30 Seconds!</div>
//       </div>
//       <div className={`${""} text-xl leading-[30px] px-[80px] `}>
//         <span className={`${""} font-bold`}>
//           No Course Creation or Design Skills or Coding Skills Needed
//         </span>{" "}
//         – Save Time and Money While Creating Eye-Catching Course Products That
//         Attract 10X More Attention!
//       </div>
//       <div
//         className={`${""} bg-orange-500 text-black px-5 py-2 font-bold text-lg rounded-full`}
//       >
//         Launch Your Course Selling Business in Just 3 Clicks!
//       </div>
//       <div className={`${""} text-2xl `}>
//         <b>No</b> Course Creation! <b>No</b> Research! <b>No</b> Audience
//         Selection! <b>No</b> Hassle!
//       </div>
//     </div>
//   );
// };

// export default SectionOne;
