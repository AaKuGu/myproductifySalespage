import { testimonials } from "@/constant/salespages";
import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[10vw] lg:gap-[4vw] py-[10vw] lg:py-[5vw]`}
    >
      <div
        className={`${""} flex flex-col items-center justify-center gap-[10vw] lg:gap-[4vw] w-[98%] lg:w-full`}
      >
        <header
          className={`font-bold text-[4vw] lg:text-[2.5vw] text-center  font-oswald flex flex-col items-center justify-center w-full py-[3vw]`}
          style={{
            background: 'url("/header/header2.png")',
            // backgroundAttachment: "fixed", // Parallax effect
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>Digital Educators Around The World</div>
          <div className={`${""} text-[6vw] lg:text-[5vw] `}>
            Love My-Productify A Lot
          </div>
        </header>
        <div
          className={`w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-[4vw] p-2 justify-center items-center px-[5vw]
            `}
        >
          
          {testimonials?.map((d, i) => {
            return <TestimonialsCard key={i} data={d} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

// import { testimonials } from "@/constant/salespages";
// import React from "react";
// import TestimonialsCard from "./TestimonialsCard";

// const Testimonials = () => {
//   return (
//     <div
//       className={`flex flex-col items-center justify-center gap-10 px-5 md:px-10 py-10`}
//     >
//       <header
//         className={`font-bold text-xl md:text-2xl lg:text-3xl text-center leading-7 md:leading-9 lg:leading-[55px] max-w-full md:max-w-[80%] lg:max-w-[70%] font-oswald`}
//       >
//         Digital Educators Around The World Love My-Productify A Lot
//       </header>
//       <div
//         className={`w-full h-auto flex flex-col md:flex-row flex-wrap gap-10 md:gap-14 lg:gap-20 px-5 md:px-10 py-5 justify-center items-center `}
//       >
//         {testimonials?.map((d, i) => {
//           return <TestimonialsCard key={i} data={d} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
