import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div
      className={`flex flex-col gap-5 min-h-fit w-full items-center justify-start text-white px-4 sm:px-6 md:px-8 lg:px-10 text-center py-5 `}
      style={{ background: 'url("/background/darkbg.png")' }}
    >
      {/* Logo Section */}
      <div className="header-text">
        <Image
          src="/logo/logoTransDark.png"
          height={200}
          width={400}
          alt="website logo"
          className="w-[400px] h-auto"
        />
      </div>

      {/* Tagline */}
      <div className="flex px-4 sm:px-6 md:px-8 lg:px-10 py-1 bg-white text-black rounded-full text-sm sm:text-lg md:text-xl lg:text-2xl font-roboto">
        Launch Your Course Product with Ease: Introducing My Productify
      </div>

      {/* Main Heading */}
      <div className="font-extrabold text-xl sm:text-2xl md:text-3xl leading-[40px] sm:leading-[60px] md:leading-[70px] my-5 font-montserrat  w-[90%] md:w-[75%] ">
        Revolutionary Tool Instantly Crafts Stunning,{" "}
        <span className="text-orange-600 font-bold font-lato px-3 rounded-lg md:text-2xl text-xl underline">
          Pro-Level Courses
        </span>{" "}
        in Hot Niches with{" "}
        <span className="text-orange-600 font-bold font-lato px-3 rounded-lg md:text-2xl text-xl py-1 md:py-2 underline">
          Ready-to-Use Templates{" "}
        </span>{" "}
        <div className="bounce mt-4 md:mt-3">Launch in Just 30 Seconds!</div>
      </div>

      {/* Description */}
      <div className="text-base sm:text-lg md:text-xl leading-[28px] sm:leading-[32px] md:leading-[36px] px-4 sm:px-12 md:px-20 lg:px-32 xl:px-40 2xl:px-60">
        <span className="font-bold">
          No Course Creation or Design Skills or Coding Skills Needed
        </span>{" "}
        – Save Time and Money While Creating Eye-Catching Course Products That
        Attract 10X More Attention!
      </div>

      {/* Call to Action Button */}
      <div className="bg-orange-200 text-black px-4 sm:px-6 md:px-8 lg:px-10 py-2 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full">
        Launch Your Course Selling Business in Just 3 Clicks!
      </div>

      {/* Benefits Statement */}
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
        <b>No</b> Course Creation! <b>No</b> Research! <b>No</b> Audience
        Selection! <b>No</b> Hassle!
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
