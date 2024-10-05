import { steps } from "@/constant/salespages";
import React from "react";
import ThreeSteps from "./ThreeSteps";

const ThreeStepsComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 px-2 sm:px-3 md:px-4 py-12 sm:py-20 w-full bg-gray-100">
      <header className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
        My Productify Works In{" "}
        <span className="text-pink-900">3 Easy Steps</span>
      </header>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 sm:gap-10 items-center justify-center px-1 sm:px-2 md:px-3 lg:px-5 py-5">
        {steps?.map((d, i) => (
          <ThreeSteps d={d} key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ThreeStepsComponent;

// import { steps } from "@/constant/salespages";
// import React from "react";
// import ThreeSteps from "./ThreeSteps";

// const ThreeStepsComponent = () => {
//   return (
//     <div
//       className={`${""} flex flex-col items-center justify-center gap-10 px-5 py-20  w-full bg-gray-100 `}
//     >
//       <header className={`${""} font-bold text-4xl `}>
//         My Productify Works In{" "}
//         <span className={`${""} text-pink-900`}>3 Easy Steps</span>
//       </header>
//       <div
//         className={`${""} flex flex-col gap-10 items-center justify-center px-5 py-5`}
//       >
//         {steps?.map((d, i) => {
//           return <ThreeSteps d={d} key={i} i={i} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default ThreeStepsComponent;
