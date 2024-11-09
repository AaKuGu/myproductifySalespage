import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";
import React from "react";

const SectionTwo = () => {
  return (
    <section
      className="w-full h-auto lg:min-h-screen  flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black text-black"
      style={{
        background: 'url("/background/one.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center lg:items-center my-[7vw] lg:my-[3vw] w-[90%] justify-center lg:justify-between gap-[5vw] lg:gap-[3vw] h-full">
        <div
          className={`${""} flex items-center justify-center flex-col gap-[4vw] lg:gap-[1.5vw]`}
        >
          {" "}
          <header className="text-[10vw] lg:text-[4.5vw] font-bold mb-4 underline italic">
            Why Upgrade to Unlimited?
          </header>
          <div className={`${""} text-[4vw] lg:text-[1.5vw] `}>
            If you’re serious about growing your online business and making My
            Productify a true revenue-generating machine, the Unlimited upgrade
            is essential. The standard version is fantastic, but with Unlimited,
            you have an unstoppable version of My Productify that gives you the
            freedom to launch, scale, and sell without ever hitting a ceiling.
          </div>
        </div>
        <div className="text-[6vw] lg:text-[2.5vw] font-bold mb-4">
          Here’s exactly what you get when you go Unlimited:
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col lg:flex-row gap-[5vw] lg:gap-[3vw]`}
        >
          <div className="flex flex-col lg:w-1/2  lg:gap-10 justify-center h-full  ">
            <div className="space-y-4 flex flex-col gap-[5vw] lg:gap-[3vw]">
              {unlimitedFeatures1?.map((d, i) => (
                <div
                  key={i}
                  className="text-start w-full text-[4vw] lg:text-[1.5vw] flex items-start justify-center flex-col"
                >
                  <div
                    className={`${""} flex items-center justify-center gap-[2vw] lg:gap-[1vw]`}
                  >
                    <span className={`${""} text-sky-400`}>
                      <FaHandPointRight />
                    </span>
                    <span className={`${""} font-bold italic`}>{d?.title}</span>
                  </div>
                  <div>{d?.description}</div>
                  <div>{d?.benefit}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[35vw] ">
            <Image
              src="/logo/sideImage3.png"
              width={500}
              height={500}
              className="w-full h-auto"
              alt="Logo"
            />
          </div>
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col-reverse lg:flex-row gap-[5vw] lg:gap-[3vw]`}
        >
          <div className="w-full lg:w-[35vw] ">
            <Image
              src="/logo/man2.png"
              width={500}
              height={500}
              className="w-full h-auto"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col lg:w-1/2  lg:gap-10 justify-center h-full  ">
            <div className="space-y-4 flex flex-col gap-[5vw] lg:gap-[3vw]">
              {unlimitedFeatures2?.map((d, i) => (
                <div
                  key={i}
                  className="text-start w-full text-[4vw] lg:text-[1.5vw] flex items-center justify-center flex-col"
                >
                  <div
                    className={`${""} flex items-center justify-start gap-[2vw] lg:gap-[1vw] w-full`}
                  >
                    <span className={`${""} text-sky-400`}>
                      <FaHandPointRight />
                    </span>
                    <span className={`${""} font-bold italic`}>{d?.title}</span>
                  </div>
                  <div>{d?.description}</div>
                  <div>{d?.benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

const unlimitedFeatures1 = [
  {
    title: "Unlimited Course Creation",
    description:
      "Create as many courses as you want! Whether it’s 5 or 500, My Productify Unlimited has you covered. Each new course is an opportunity to reach a new audience, expand your brand, and increase your earnings.",
    benefit:
      "Ideal for entrepreneurs, educators, and business owners who have a wide range of content they want to monetize.",
  },
  {
    title: "Unlimited Leads & Student Enrollments",
    description:
      "Don’t let a cap on student enrollments or email signups restrict your business growth. With Unlimited, you’ll have the capacity to reach an unlimited audience, build a bigger list, and maximize engagement and revenue.",
    benefit:
      "No restrictions on student enrollments or lead capture—the more, the merrier!",
  },
  {
    title: "Unlimited Sales Opportunities",
    description:
      "The only thing better than one sale? Unlimited sales! Imagine being able to attract as many customers as possible without hitting a limit on earnings. With Unlimited, your potential is boundless.",
    benefit:
      "Reach more people, generate more sales, and scale up to earn more daily.",
  },
];
const unlimitedFeatures2 = [
  {
    title: "Unlimited Custom Domains",
    description:
      "Want to build out an entire network of courses or create niche-specific brands? With Unlimited, you can add as many custom domains as you need, giving each course or brand a professional, branded touch.",
    benefit:
      "Perfect for building credibility and launching multiple branded courses under different domains.",
  },
  {
    title: "Enhanced Performance for Heavy Traffic",
    description:
      "With Unlimited, you can confidently handle high-traffic days and big launches without worrying about speed or performance. We’ve optimized My Productify Unlimited for the highest efficiency.",
    benefit:
      "Say goodbye to delays and hello to smooth, seamless performance—even with large-scale audiences.",
  },
  {
    title: "Unlimited Access to Premium Templates",
    description:
      "Get exclusive access to our entire collection of high-converting course templates, optimized opt-in pages, and stunning design options.",
    benefit:
      "New designs added frequently—you’ll have endless customization options to keep your pages fresh and engaging.",
  },
];

// import Image from "next/image";
// import React from "react";

// const SectionFourteen = () => {
//   return (
//     <div
//       className={`${""} flex flex-col-reverse lg:flex-row w-full h-auto lg:min-h-screen items-center justify-center md:gap-5 bg-gray-900 text-white px-[16px] py-2 sm:px-[18px] sm:py-[6px] md:px-[20px] md:py-[8px] lg:px-[10px] lg:py-[30px] xl:px-[12px] xl:py-[40px] gap-5`}
//     >
//       <div
//         className={`${""} flex flex-col items-center justify-center gap-10 `}
//       >
//         <header
//           className={`${""} font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-[30px] sm:leading-[38px] md:leading-[45px] lg:leading-[53px] xl:leading-[60px] 2xl:leading-[70px] font-spaceGrotesk text-center lg:text-start`}
//         >
//           We Made It Incredibly Easy For ANYONE…
//         </header>
//         <div
//           className={`${""} flex flex-col justify-start items-center gap-14 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[27px] xl:text-[30px] 2xl:text-[34px] text-start w-full `}
//         >
//           {data?.map((d, i) => {
//             return (
//               <div key={i} className={`${""} text-start w-full`}>
//                 {d}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <Image src="/logo/image11.png" width={700} height={700} />
//     </div>
//   );
// };

// export default SectionFourteen;

// const data = [
//   "This powerful technology will give you everything at your fingertips…",
//   "Leaving only one thing for you to do… ",
//   "Profit… ",
//   "Let me show you in detail what it can do for you…",
// ];
