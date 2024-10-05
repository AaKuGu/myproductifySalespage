import Image from "next/image";

import React from "react";

const SectionFourteen = () => {
  return (
    <section className="w-full h-auto lg:h-screen bg-black flex items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start my-10 lg:my-0 ">
        <div className="flex flex-col lg:w-1/2 text-white lg:gap-10">
          <header className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            We Made It Incredibly Easy For ANYONE…
          </header>
          <div className="space-y-4">
            {data?.map((d, i) => (
              <div
                key={i}
                className="text-start w-full text-base md:text-lg lg:text-xl"
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2">
          <Image
            src="/logo/image11.png"
            width={700}
            height={700}
            className="w-full h-auto"
            alt="Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFourteen;

const data = [
  "This powerful technology will give you everything at your fingertips…",
  "Leaving only one thing for you to do… ",
  "Profit… ",
  "Let me show you in detail what it can do for you…",
];

// import Image from "next/image";
// import React from "react";

// const SectionFourteen = () => {
//   return (
//     <div
//       className={`${""} flex flex-col-reverse lg:flex-row w-full h-auto lg:min-h-screen items-center justify-center md:gap-5 bg-gray-900 text-white px-[16px] py-2 sm:px-[18px] sm:py-[6px] md:px-[20px] md:py-[8px] lg:px-[10px] lg:py-[30px] xl:px-[12px] xl:py-[40px] gap-5`}
//     >
//       <div
//         className={`${""} flex flex-col items-center justify-center gap-10 `}
//       >
//         <header
//           className={`${""} font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-[30px] sm:leading-[38px] md:leading-[45px] lg:leading-[53px] xl:leading-[60px] 2xl:leading-[70px] font-spaceGrotesk text-center lg:text-start`}
//         >
//           We Made It Incredibly Easy For ANYONE…
//         </header>
//         <div
//           className={`${""} flex flex-col justify-start items-center gap-14 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[30px] 2xl:text-[34px] text-start w-full `}
//         >
//           {data?.map((d, i) => {
//             return (
//               <div key={i} className={`${""} text-start w-full`}>
//                 {d}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <Image src="/logo/image11.png" width={700} height={700} />
//     </div>
//   );
// };

// export default SectionFourteen;

// const data = [
//   "This powerful technology will give you everything at your fingertips…",
//   "Leaving only one thing for you to do… ",
//   "Profit… ",
//   "Let me show you in detail what it can do for you…",
// ];
