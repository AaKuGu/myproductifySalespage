import { sectionThreeData } from "@/constant/salespages";
import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 lg:gap-20 w-full min-h-screen items-center justify-center flex-wrap p-5 md:p-10 bg-gradient-to-r `}
      style={{
        background: "linear-gradient(to right, blue, purple)",
        // clipPath: " polygon(0 100%, 50% 50%, 100% 100%);",
      }}
    >
      <div
        className={`${""} w-[90%] lg:w-[80%]  flex flex-col items-center justify-center gap-[5vw]  my-[5vw] `}
      >
        <div
          className={`font-bold text-[4vw] lg:text-[2.5] text-center text-white`}
        >
          My Productify Instantly Generates Your First Profitable Course for
          These High-Demand Niches, Including…
        </div>
        <section
          className={`grid grid-cols-1 lg:grid-cols-3 gap-[5vw] lg:gap-[2vw] w-full`}
        >
          {sectionThreeData?.map((d, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col items-center justify-center gap-[4vw] lg:gap-[2vw] w-full rounded-xl`}
              >
                <Image
                  src={d?.image}
                  width={300}
                  height={120}
                  className={`rounded-xl w-full`}
                />
                <div
                  className={`text-white text-[6vw] lg:text-[2vw] font-slabo13px text-center`}
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
