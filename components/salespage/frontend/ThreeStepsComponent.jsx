import { steps } from "@/constant/salespages";
import React from "react";
import ThreeSteps from "./ThreeSteps";

const ThreeStepsComponent = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[7vw] lg:gap-[4vw] py-[10vw] lg:py-[4vw] w-full bg-gray-100"
      style={{
        background: 'url("/background/one.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header className="font-bold text-[5vw] lg:text-[3vw]  text-center">
        My Productify Works In{" "}
        <span className="text-pink-900">3 Easy Steps</span>
      </header>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[10vw] lg:gap-[5vw] items-center justify-center px-[2vw] py-[2vw] text-white">
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
