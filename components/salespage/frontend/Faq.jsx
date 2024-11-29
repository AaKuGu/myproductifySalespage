import React from "react";

const Faq = ({ data, productIsBundleOrReseller = false }) => {
  return (
    <div className="w-full min-h-screen bg-blue-50 text-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[5vw] lg:gap-[2.5vw] w-[90%] lg:w-[80%] my-[10vw] lg:my-[5vw]">
        <header className="font-bold text-[5vw] lg:text-[3vw] text-center">
          <i>
            <u>Check our FAQ below</u>
          </i>
          , or contact us to know more.
        </header>
        <header className="font-bold text-[6vw] lg:text-[3vw] mb-10 text-center">
          Frequently Asked Questions
        </header>
        <div className="flex flex-col items-center justify-center gap-7">
          {productIsBundleOrReseller && (
            <div className="flex flex-col items-start justify-center gap-2 text-start text-[4vw] lg:text-[1.5vw] w-full">
              <div className="text-blue-600 font-bold">
                Q: When will I be approved for affiliation?{" "}
              </div>
              <div>
                {" "}
                You will be approved as an Affiliate only after 15 days of your
                purchase{" "}
              </div>
            </div>
          )}

          {data?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-start justify-center gap-2 text-start text-[4vw] lg:text-[1.5vw] w-full"
            >
              <div className="text-blue-600 font-bold">Q: {d?.q}</div>
              <div>{d?.ans}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

// import React from "react";

// const Faq = () => {
//   return (
//     <div
//       className={`${""} w-full min-h-screen bg-blue-50 flex items-center justify-center `}
//     >
//       <div
//         className={`${""} flex flex-col items-center justify-center gap-5 py-10 w-[900px] `}
//       >
//         <header className={`${""} font-bold text-2xl`}>
//           {" "}
//           <i>
//             <u>Check our FAQ below</u>
//           </i>{" "}
//           , or contact us to know more.
//         </header>
//         <header className={`${""} font-bold text-5xl mb-10`}>
//           Frequently Asked Questions
//         </header>
//         <div
//           className={`${""} flex flex-col items-center justify-center gap-7`}
//         >
//           {data?.map((d, i) => {
//             return (
//               <div
//                 className={`${""} flex flex-col items-start justify-center gap-2 text-start text-2xl`}
//               >
//                 <div className={`${""} text-blue-600 font-bold `}>Q: {d?.q}</div>
//                 <div>{d?.ans}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;

// const data = [
//   {
//     q: "Is SiteCoursePro a cloud-based software?",
//     ans: "Yes, we pride ourselves on being 100% cloud-based & supremely reliable. You can access SiteCoursePro from anywhere and start making MASSIVE commissions selling Courses. Simply select the device of your choice (MAC, Windows, or even your Mobile) and begin. ",
//   },
//   {
//     q: "Is SiteCoursePro a popular software with marketers?",
//     ans: "Oh absolutely, you will be amazed at how many marketers are using and loving SiteCoursePro. We’ve added their feedback to this site, simply scroll up to read it for yourself. ",
//   },
//   {
//     q: "Do we have to pay a monthly subscription fee to access SiteCoursePro?",
//     ans: "Right now… NO! But after this special offer ends, users will have to pay a monthly fee to access SiteCoursePro that they can currently get at a ONE-TIME cost. ",
//   },
//   {
//     q: "What are the minimum experience and skills required to use SiteCoursePro?",
//     ans: "You don’t have to be a seasoned marketer or a technical genius to create your Course Affiliate Website! SiteCoursePro is 100% beginner-friendly. Our automated software does everything for you. You simply profit! ",
//   },
//   {
//     q: "Is training & support included?",
//     ans: "Yes. When you buy SiteCoursePro today, you can also easily access our step-by-step training resources. Our technical experts are available for you 24X7 for any queries that you may have.",
//   },
// ];
