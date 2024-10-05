import { sectionFourData } from "@/constant/salespages";
import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";
import { sectionWidth } from "@/utils/utils";

const SectionFour = () => {
  return (
    <div
      className={`flex flex-col gap-5 sm:gap-8 p-5 sm:p-8 w-full min-h-screen items-center justify-center`}
    >
      <div className={`${sectionWidth} gap-10`}>
        <header
          className={`font-bold text-2xl sm:text-3xl md:text-4xl px-5 sm:px-8 lg:px-12 text-center leading-9 sm:leading-8 md:leading-[50px]  2xl:leading-[60px] text-black`}
        >
          My Productify Creates Profitable Courses In Any Niche Without The
          Hassle of…
        </header>
        <section
          className={`grid grid-cols-1 sm:grid-cols-2  gap-5 md:gap-10  items-center justify-center flex-wrap `}
        >
          {sectionFourData?.map((d, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col gap-4 sm:gap-6 w-full items-center justify-center p-5 h-auto sm:min-h-[630px]`}
                style={{ boxShadow: "0px 0px 55px 30px #ccd9ff" }}
              >
                <Image
                  src={d?.image}
                  width={300}
                  height={300}
                  className="max-w-full h-auto"
                />
                <div
                  className={`px-5 py-2 sm:px-8 sm:py-3 bg-red-700 shadow-lg shadow-red-900 rotate-2 w-full text-center font-bold text-sm sm:text-base md:text-lg text-white subtle-rotate font-montserrat`}
                >
                  {d?.title}
                </div>
                <div
                  className={`text-sm sm:text-base md:text-lg text-center mt-3 sm:mt-4`}
                >
                  {d?.desc}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default SectionFour;

// import { sectionFourData } from "@/constant/salespages";
// import Image from "next/image";
// import React from "react";
// import "@/components/authenticated/css/animation.css";

// const SectionFour = () => {
//   return (
//     <div
//       className={`${""} flex flex-col gap-10 p-10 w-full min-h-screen items-center justify-center`}
//     >
//       <header
//         className={`${""} font-bold text-4xl px-20 text-center leading-[50px] text-black`}
//       >
//         My Productify Creates Profitable Courses In Any Niche Without The Hassle
//         of…
//       </header>
//       <section
//         className={`${""} flex flex-row gap-10 p-10 items-center justify-center flex-wrap`}
//       >
//         {sectionFourData?.map((d, i) => {
//           return (
//             <div
//               className={`${""} flex flex-col gap-5 w-[500px] items-center justify-center p-10`}
//             >
//               <Image src={d?.image} width={400} height={400} />
//               <div
//                 className={`${""} px-10 py-3 bg-red-700 shadow-lg shadow-red-900 rotate-2 w-[350px] h-auto text-center font-bold text-xl text-white subtle-rotate font-montserrat`}
//               >
//                 {d?.title}
//               </div>
//               <div className={`${""} text-xl text-center mt-5`}>{d?.desc}</div>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// };

// export default SectionFour;
