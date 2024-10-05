import { sectionThreeData } from "@/constant/salespages";
import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 lg:gap-20 w-full min-h-screen items-center justify-center flex-wrap p-5 md:p-10 bg-gradient-to-r from-blue-900 to-purple-700`}
    >
      <div
        className={`${""}  350:max-w-[335px] 400:max-w-[385px] 450:max-w-[435px] 500:max-w-[485px] 550:max-w-[535px] 600:max-w-[585px] 650:max-w-[635px] 700:max-w-[685px] 750:max-w-[735px] 800:max-w-[885px] lg:max-w-[1000px] max-w-7xl flex flex-col items-center justify-center gap-10 `}
      >
        <div
          className={`font-bold text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] leading-[30px] md:leading-[40px] text-center text-white`}
        >
          My Productify Instantly Generates Your First Profitable Course for
          These High-Demand Niches, Including…
        </div>
        <section
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full`}
        >
          {sectionThreeData?.map((d, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col items-center justify-center gap-3 sm:gap-5 w-full rounded-xl`}
              >
                <Image
                  src={d?.image}
                  width={300}
                  height={120}
                  className={`rounded-xl w-full`}
                />
                <div
                  className={`text-white text-lg sm:text-xl font-slabo13px text-center`}
                >
                  {d.title}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default SectionThree;

// import { sectionThreeData } from "@/constant/salespages";
// import Image from "next/image";
// import React from "react";

// const SectionThree = ({}) => {
//   return (
//     <div
//       className={`${""} flex gap-20 w-full min-h-screen items-center justify-center flex-wrap p-10  bg-gradient-to-r from-blue-900 to-purple-700 `}
//     >
//       <header
//         className={`${""} font-bold text-4xl px-20 text-center leading-[50px] text-white`}
//       >
//         My Productify Instantly Generates Your First Profitable Course for These
//         High-Demand Niches, Including…
//       </header>
//       <section
//         className={`${""} flex gap-20 flex-wrap items-center justify-center p-10`}
//       >
//         {sectionThreeData?.map((d, i) => {
//           return (
//             <div
//               className={`${""} flex flex-col items-center justify-center gap-5  rounded-xl`}
//             >
//               <Image
//                 src={d?.image}
//                 key={i}
//                 width={300}
//                 height={170}
//                 className={`${""}  rounded-xl`}
//               />
//               <div className={`${""} text-white text-xl font-slabo13px`}>
//                 {d.title}
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// };

// export default SectionThree;
