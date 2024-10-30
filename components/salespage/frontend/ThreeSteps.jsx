import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";

const ThreeSteps = ({ d, i }) => {
  const { stepNo, title, desc, image } = d;
  return (
    <div
      className={`${
        i % 2 == 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
      } flex items-center justify-center gap-[3vw] lg:gap-[5vw] w-[90%] lg:w-[70vw] p-[2vw]   rounded-2xl button-hover overflow-hidden   `}
      style={{
        // boxShadow: "0px 0px 25px 5px #a366ff",
        background: "linear-gradient(to right, blue,  purple)",
      }}
    >
      <div
        className={`${""} rounded-xl w-full overflow-hidden flex items-center justify-center`}
      >
        <Image
          src={image}
          width={550}
          height={370}
          className={`${""} w-[140%] lg:w-[50vw]  `}
        />
      </div>
      <div
        className={`${""} flex items-end justify-center flex-col gap-3  w-full`}
      >
        <div className={`${""}  font-teko text-[6vw] lg:text-[3vw]`}>
          {stepNo}
        </div>
        <div className={`${""} font-extrabold  text-[6vw] lg:text-[3vw]`}>
          {title}
        </div>
        <p
          className={`${""} mt-5 text-[4vw] lg:text-[1.5vw] font-roboto text-center md:text-start font-bold`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ThreeSteps;

// import Image from "next/image";
// import React from "react";
// import "@/components/authenticated/css/animation.css";

// const ThreeSteps = ({ d, i }) => {
//   const { stepNo, title, desc, image } = d;
//   return (
//     <div
//       className={`${
//         i % 2 == 0 ? "flex-row" : "flex-row-reverse"
//       } flex items-center justify-center gap-5 py-10 w-[90%] h-[350px] text-4xl px-10 rounded-2xl button-hover`}
//       style={{ boxShadow: "0px 0px 25px 2px #d4d4d4" }}
//     >
//       <div className={`${""} rounded-xl`}>
//         <Image
//           src={image}
//           width={550}
//           height={370}
//           className={`${""} max-w-[600px] max-h-[400px]`}
//         />
//       </div>
//       <div className={`${""} flex items-end justify-center flex-col gap-3 `}>
//         <div className={`${""} text-purple-600 font-teko`}>{stepNo}</div>
//         <div className={`${""} font-extrabold text-purple-700`}>{title}</div>
//         <p className={`${""} mt-5 text-2xl `}>{desc}</p>
//       </div>
//     </div>
//   );
// };

// export default ThreeSteps;
