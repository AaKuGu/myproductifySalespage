import Image from "next/image";
import React from "react";
import { FaRegCircleRight } from "react-icons/fa6";
const SectionTweleve = ({ data, index }) => {
  const { header, arrayOfData, imageLink, width, height } = data;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 py-10 w-[90%]  text-white `}
    >
      <header
        className={`font-bold text-[7vw] lg:text-[4vw] font-ubuntu italic underline text-center mb-[5vw] `}
       
      >
        {header}
      </header>
      <div
        className={`${
          index % 2 == 0
            ? "flex-col lg:flex-row"
            : "flex-col lg:flex-row-reverse"
        } flex items-start justify-center gap-[10vw]  lg:gap-[5vw] text-[5vw] lg:text-[2vw] w-full`}
      >
        <div
          className={`flex flex-col items-start justify-center gap-[5vw] md:gap-10 text-start text-[4vw] lg:text-[1.8vw] font-normal`}
        >
          {arrayOfData?.map((d, i) => {
            return (
              <div
                key={i}
                className={`text-start w-full flex items-center justify-start gap-[2vw] lg:gap-[1vw] `}
              >
                <span className={`${""} text-yellow-400`}>
                  <FaRegCircleRight />
                </span>
                {d}
              </div>
            );
          })}
        </div>
        <div
          className={`flex items-center justify-center w-full lg:w-[50%] subtle-rotate`}
        >
          <Image
            src={imageLink}
            width={350}
            height={height}
            className={`p-[6px] border-[1vw] lg:border-[0.5vw] border-white w-full lg:w-[30vw] h-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTweleve;

// import Image from "next/image";
// import React from "react";

// const SectionTweleve = ({ data, index }) => {
//   const { header, arrayOfData, imageLink, width, height } = data;
//   return (
//     <div
//       className={`${""} flex flex-col items-center justify-center gap-20 py-10 w-full px-[40px]  bg-black text-white`}
//     >
//       <header
//         className={`${""} font-bold text-5xl font-ubuntu italic underline`}
//       >
//         {/* Get Everything Done For You… */}
//         {header}
//       </header>
//       <div
//         className={`${
//           index % 2 == 0 ? "flex-row" : "flex-row-reverse"
//         } flex items-center justify-center gap-10 w-full  px-10`}
//       >
//         <div
//           className={`${""} flex flex-col items-center justify-center text-2xl gap-10 text-start  `}
//         >
//           {arrayOfData?.map((d, i) => {
//             return (
//               <div key={i} className={`${""} text-start w-full`}>
//                 {d}
//               </div>
//             );
//           })}
//         </div>
//         <div
//           className={`${""} flex items-center justify-center w-[50%] subtle-rotate`}
//         >
//           <Image
//             src={imageLink}
//             width={width}
//             height={height}
//             className={`${""} p-[6px] border-[3px]  border-gray-700  `}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionTweleve;
