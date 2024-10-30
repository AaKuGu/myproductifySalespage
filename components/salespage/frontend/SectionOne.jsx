import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <div
      className={`flex flex-col min-h-fit w-full items-center justify-start text-white text-center py-[2vw]`}
      // style={{
      // background: 'url("/background/heroBg.png")',
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      style={{
        background: 'url("/background/heroBg.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${""} w-[95%] h-auto flex flex-col items-center justify-start  `}
      >
        {/* Logo Section */}
        <div className="header-text mb-[2vw] lg:mb-[0.2vw]">
          <Image
            src="/logo/myProductifyLogo.png"
            height={100}
            width={400}
            alt="website logo"
            className="w-[50vw] lg:w-[25vw] "
          />
        </div>

        {/* Tagline */}
        {/* <div className="flex px-4 sm:px-6 md:px-8 lg:px-10 py-2  text-white rounded-full text-sm sm:text-lg md:text-xl lg:text-2xl font-roboto border-purple-500 border-[2px] mb-3">
        Launch Your Course Product with Ease: Introducing My Productify
      </div> */}

        <div className="flex justify-center py-[2vw] lg:py-[0.5vw] text-white rounded-full text-[3vw] lg:text-[2vw] font-roboto border-purple-500 border-[0.2vw] mb-[1vw] lg:mb-[0.2vw] w-full lg:w-auto text-center lg:px-[1vw] bg-gray-900">
          Launch Your Course Product with Ease: Introducing My Productify
        </div>

        {/* Main Heading */}
        <div className="font-bold  my-5 gap-[2vw] lg:gap-[0.2vw] flex flex-col tracking-wider w-full items-center justify-center">
          <div className={`${""} text-[4vw] lg:text-[3vw]`}>
            Revolutionary Tool Instantly Crafts Stunning,{" "}
          </div>
          <div className={`${""} text-[4vw] lg:text-[2.8vw]`}>
            <span className="text-[#ff80ff] font-bold font-lato px-3 rounded-lg  underline">
              Pro-Level Courses
            </span>
            in Hot Niches with{" "}
          </div>
          <div
            className="text-[#33ffff] font-bold font-lato  rounded-lg px-[5vw] underline text-[4vw] h-full lg:text-[2.8vw] my-[3vw] lg:my-[1vw]"
            // style={{
            //   background: 'url("/logo/glitchBg.png")',
            //   backgroundPosition: "center",
            //   backgroundSize: "cover",
            // }}
          >
            {/* <div>Ready-to-Use Templates </div> */}
            <Image
              src={"/logo/heroImageGlitch.png"}
              width={400}
              height={50}
              className={`${""}  w-[40vw] `}
            />
          </div>{" "}
          <div className="italic bounce my-[3vw] lg:my-[2vw] text-[5vw] lg:text-[3vw] ">
            Launch in Just 30 Seconds!
          </div>
        </div>

        {/* Description */}
        <div className="text-[4vw] lg:text-[2vw] lg:w-[60%] mb-[6vw] lg:mb-[3vw]">
          <span className="font-bold ">
            No Course Creation or Design Skills or Coding Skills Needed
          </span>{" "}
          – Save Time and Money While Creating Eye-Catching Course Products That
          Attract 10X More Attention!
        </div>

        {/* Call to Action Button */}
        <div className=" border-dotted border-white border-[0.2vw] px-[3vw] lg:px-[5vw] rounded-full bg-blue-700 py-[1.7vw] lg:py-[0.7vw] text-[3vw] lg:text-[1.5vw] mb-[6vw] lg:mb-[3vw]">
          <strong>
            {" "}
            <i>Launch</i>
          </strong>{" "}
          Your Course Selling Business in Just 3 Clicks!
        </div>

        {/* Benefits Statement */}
        <div className="text-[4vw] lg:text-[2vw]">
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
