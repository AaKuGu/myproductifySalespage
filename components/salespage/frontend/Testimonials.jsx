import { testimonials } from "@/constant/salespages";
import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 px-5 md:px-10 py-10 `}
    >
      <div
        className={`${""}  350:max-w-[335px] 400:max-w-[385px] 450:max-w-[435px] 500:max-w-[485px] 550:max-w-[535px] 600:max-w-[585px] 650:max-w-[635px] 700:max-w-[685px] 750:max-w-[735px] 800:max-w-[885px] lg:max-w-[1000px] max-w-7xl flex flex-col items-center justify-center gap-10 `}
      >
        <header
          className={`font-bold text-xl md:text-2xl lg:text-3xl text-center leading-7 md:leading-9 lg:leading-[55px] max-w-full md:max-w-[80%] lg:max-w-[70%] font-oswald`}
        >
          Digital Educators Around The World Love My-Productify A Lot
        </header>
        <div
          className={`w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-2 justify-center items-center 
            
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
