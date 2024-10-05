import Image from "next/image";
import React from "react";

const SectionThirteen = () => {
  return (
    <section className="flex items-center justify-center w-screen h-auto lg:min-h-screen p-4 md:p-8 lg:p-12">
      <div className="flex flex-col items-center justify-center w-full gap-5 lg:gap-10">
        <header className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
          Even Traffic And Sales
        </header>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <Image
            src="/logo/image9.png"
            width={500}
            height={700}
            className="w-full lg:w-auto h-auto"
            alt="Image"
          />
          <div className="flex flex-col gap-5 lg:gap-10 mt-8 lg:mt-0 lg:ml-8 text-base md:text-lg lg:text-xl">
            {data?.map((d, i) => (
              <div key={i}>{d}</div>
            ))}
            <div>And guaranteed to turn into sales for us…</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThirteen;

const data = [
  "I’m gonna be honest with you… I suck at sales…",
  "It’s just not my thing… But with AI Beam",
  "You don’t have to worry about it… ",
  "Because it will automatically drive thousands of hungry buyers to your courses… ",
  "And sell them “your” course on your behalf… For 100% free… ",
  "It's tested over and over… ",
];

// import Image from "next/image";
// import React from "react";

// const SectionThirteen = () => {
//   return (
//     <div
//       className={`${""} flex flex-col gap-10 items-center justify-center bg-gray-50 px-2 py-2 sm:px-[6px] sm:py-[6px] md:px-[8px] md:py-[8px] lg:px-[10px] lg:py-[30px] xl:px-[12px] xl:py-[40px]`}
//     >
//       <header
//         className={`${""} text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-bold text-black font-ubuntu`}
//       >
//         Even Traffic And Sales
//       </header>
//       <div
//         className={`${""} flex flex-col lg:flex-row gap-10 items-center justify-center lg:px-20 `}
//       >
//         <Image src="/logo/image9.png" width={500} height={700} />
//         <div
//           className={`${""} flex flex-col gap-10 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[30px] 2xl:text-[34px] items-start justify-center text-start lg:w-[60%] `}
//         >
//           {data?.map((d, i) => {
//             return <div>{d}</div>;
//           })}

//           <div className={`${""} `}>
//             And guaranteed to turn into sales for us…
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionThirteen;

// const data = [
//   "I’m gonna be honest with you… I suck at sales…",
//   "It’s just not my thing… But with AI Beam",
//   "You don’t have to worry about it… ",
//   "Because it will automatically drive thousands of hungry buyers to your courses… ",
//   "And sell them “your” course on your behalf… For 100% free… ",
//   "It's tested over and over… ",
// ];
