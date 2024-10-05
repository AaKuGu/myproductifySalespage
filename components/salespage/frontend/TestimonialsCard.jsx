import { FaStar } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";

const TestimonialsCard = ({ data }) => {
  const { name, image, desc } = data;

  return (
    <div
      className={`flex flex-col items-center justify-start gap-5 px-5 py-8 md:px-8 lg:px-10 lg:py-10 w-full h-auto md:min-h-[900px] lg:min-h-[800px] xl:min-h-[750px] `}
      style={{ boxShadow: "0px 0px 55px 30px #ccd9ff" }}
    >
      <div
        className={`w-full h-[150px] sm:h-[180px] md:h-[200px] flex items-center justify-center`}
      >
        <Image
          src={image}
          width={150}
          height={150}
          className={`rounded-full shadow-lg p-1`}
        />
      </div>

      <div
        className={`font-extrabold text-gray-600 text-xl sm:text-2xl font-raleway`}
      >
        {name}
      </div>

      <div className={`flex gap-2`}>
        {[1, 2, 3, 4, 5].map((_, index) => {
          return <FaStar key={index} size={16} className={`text-yellow-500`} />;
        })}
      </div>

      <div
        className={`text-base sm:text-lg md:text-xl mt-3 sm:mt-5 leading-10 sm:leading-7 md:leading-[40px] text-center`}
      >
        {desc}
      </div>
    </div>
  );
};

export default TestimonialsCard;

// import { FaStar } from "react-icons/fa";
// import Image from "next/image";
// import React from "react";
// // import Testimonials from "./Testimonials";
// import "@/components/authenticated/css/animation.css";

// const TestimonialsCard = ({ data }) => {
//   const { name, image, desc } = data;
//   return (
//     <div
//       className={`${""} flex flex-col items-center justify-start  gap-5 px-10 py-10 button-hover w-[500px]`}
//       style={{ boxShadow: "0px 0px 25px 10px #f1f7fc" }}
//     >
//       <div
//         className={`${""} w-full h-[200px] flex items-center justify-center `}
//       >
//         <Image
//           src={image}
//           width={200}
//           height={200}
//           className={`${""} rounded-full shadow-lg p-1`}
//         />
//       </div>

//       <div
//         className={`${""} font-extrabold text-gray-600 text-2xl font-raleway`}
//       >
//         {name}
//       </div>
//       <div className={`${""} flex gap-2 `}>
//         {[1, 2, 3, 4, 5].map(() => {
//           return (
//             <FaStar
//               size={20}
//               className={`${""}  text-yellow-500 w-[20px] h-[20px]`}
//             />
//           );
//         })}
//       </div>
//       <div className={`${""} text-xl  mt-5 leading-[40px]`}>{desc}</div>
//     </div>
//   );
// };

// export default TestimonialsCard;
