import Image from "next/image";
import React from "react";

const SectionFive = () => {
  return (
    <div
      className={`flex flex-col gap-8 sm:gap-12 lg:gap-16 p-6 sm:p-10 items-center justify-center text-white bg-black`}
      style={{
        backgroundImage: "linear-gradient(to bottom right, blue, purple)",
      }}
    >
      <header
        className={`text-red-600 text-3xl sm:text-4xl lg:text-5xl font-bold font-kaushanScript`}
      >
        Attention...
      </header>
      <div
        className={`font-bold text-lg sm:text-2xl lg:text-3xl px-3 sm:px-10 lg:px-[100px] text-center leading-[30px] sm:leading-[40px] lg:leading-[50px]`}
      >
        The Global E-Learning Market is projected to surpass $1 trillion by
        2028, presenting a MASSIVE opportunity for business owners to create new
        courses and claim their share of this booming market.
      </div>
      <div
        className={`flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-20 p-4`}
      >
        <div
          className={`flex flex-col items-center justify-center gap-6 sm:gap-8 text-base sm:text-lg lg:text-xl w-full`}
        >
          <span>
            Yes, that’s absolutely true! People are constantly seeking new ways
            to satisfy their learning desires and explore huge untapped
            opportunities.
          </span>
          <span>
            As a result, the demand for business owners to leverage online
            course creation platforms has taken center stage. This trend is
            poised to soar to unprecedented heights for months and years to
            come.
          </span>
          <span>
            Now, just imagine having the power to create your first profitable
            course on trending, red-hot topics and maximize your earnings in a
            cost-effective way.
          </span>
          <span>
            This also opens up an untapped income stream that’s just waiting for
            you to seize it.
          </span>
        </div>
        <div className={`min-w-[60%] sm:min-w-[50%] lg:min-w-[40%]`}>
          <Image
            src="/normal/i20.png"
            width={500}
            height={500}
            alt="E-Learning Market"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;

// import Image from "next/image";
// import React from "react";

// const SectionFive = () => {
//   return (
//     <div
//       className={`${""} flex flex-col gap-16 p-10 items-center justify-center text-white bg-black`}
//       style={{
//         backgroundImage: "linear-gradient(to bottom right, blue, purple)",
//       }}
//     >
//       <header
//         className={`${""} text-red-600 text-5xl font-bold font-kaushanScript`}
//       >
//         Attention...
//       </header>
//       <div
//         className={`${""} font-bold text-3xl px-[100px] text-center leading-[50px]`}
//       >
//         The Global E-Learning Market is projected to surpass $1 trillion by
//         2028, presenting a MASSIVE opportunity for business owners to create new
//         courses and claim their share of this booming market.
//       </div>
//       <div className={`${""} flex items-center justify-between gap-20 p-4 `}>
//         <div
//           className={`${""} flex flex-col items-center justify-center gap-10 text-xl w-full`}
//         >
//           <span>
//             Yes, that’s absolutely true! People are constantly seeking new ways
//             to satisfy their learning desires and explore huge untapped
//             opportunities.
//           </span>
//           <span>
//             As a result, the demand for business owners to leverage online
//             course creation platforms has taken center stage. This trend is
//             poised to soar to unprecedented heights for months and years to
//             come.
//           </span>
//           <span>
//             Now, just imagine having the power to create your first profitable
//             course on trending, red-hot topics and maximize your earnings in a
//             cost-effective way.
//           </span>
//           <span>
//             This also opens up an untapped income stream that’s just waiting for
//             you to seize it.
//           </span>
//         </div>
//         <div className={`${""} min-w-[40%]`}>
//           <Image src="/normal/i20.png" width={500} height={500} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionFive;
