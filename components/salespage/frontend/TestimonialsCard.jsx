import { FaStar } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";

const TestimonialsCard = ({ data }) => {
  const { name, image, desc } = data;

  return (
    <div
      className={`flex flex-col items-center justify-start gap-[3vw] lg:gap-[2vw] p-[4vw] w-full h-auto border-[1vw] lg:border-[0.5vw] border-yellow-500 text-white`}
      style={{
        // boxShadow: "0px 0px 55px 30px #ccd9ff",
        background: "linear-gradient(to right, #5c0099 , #000066)",
      }}
    >
      <div
        className={`w-[50vw] lg:w-[10vw] flex items-center justify-center border-[1vw] lg:border-[0.5vw] rounded-full `}
      >
        <Image
          src={image}
          width={150}
          height={150}
          className={`rounded-full shadow-lg w-[50vw] lg:w-[10vw]`}
        />
      </div>

      <div
        className={`font-extrabold text-[4vw] lg:text-[1.4vw] font-raleway text-white`}
      >
        {name}
      </div>

      <div className={`flex gap-2`}>
        {[1, 2, 3, 4, 5].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={`text-yellow-500 text-[4vw] lg:text-[1.5vw]`}
            />
          );
        })}
      </div>

      <div className={`text-[5vw] lg:text-[1.4vw] mt-3 sm:mt-5 text-center`}>
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
