import Image from "next/image";
import React from "react";

const SectionFifteen = () => {
  return (
    <section className="flex items-center justify-center w-screen h-auto lg:min-h-screen bg-gray-100">
      <div className="flex flex-col gap-5 lg:gap-10 my-10 px-4 md:px-8 lg:px-16 ">
        <div className="flex flex-col gap-5 lg:gap-10">
          <header className="text-red-900 font-dancingScript text-2xl md:text-3xl lg:text-4xl">
            The Ultimate Tool for Creating ‘Online Learning’ Hubs…
          </header>
          <header className="text-lg md:text-xl lg:text-2xl font-bold">
            And Fill It With Hundreds Of High-Quality Courses…
          </header>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          {AllStepsData?.map((d, i) => {
            return <AllStepsComp d={d} i={i + 1} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionFifteen;

const AllStepsComp = ({ d, i }) => {
  const { image, title, desc } = d;
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full bg-red-50 p-4 md:p-8 lg:p-16">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 italic font-kaushanScript">
        Step : {i}
      </div>
      <Image src={image} width={1900} height={1000} className="w-full h-auto" />
      <div className="text-lg md:text-xl lg:text-2xl">{title}</div>
    </div>
  );
};

const AllStepsData = [
  {
    image: "/logo/one.png",
    title: "Generate Course Pages Quickly ",
    desc: [""],
  },
  {
    image: "/logo/two.png",
    title: "Choose From Wide Range Of Beautiful Templates",
  },
  {
    image: "/logo/three.png",
    title: "Customize Course Page Templates Block By Block",
    desc: [""],
  },
  {
    image: "/logo/four.png",
    title: "Generate Email Optin Pages Quickly ",
  },
  {
    image: "/logo/five.png",
    title: "Choose From Wide Range Of Beautiful Templates",
    desc: [""],
  },
  {
    image: "/logo/six.png",
    title: "Customize Email Optin Page Templates Block By Block",
  },
  {
    image: "/logo/seven.png",
    title: "Connect Your Favourite Email Autoresponder ",
    desc: [""],
  },
  {
    image: "/logo/eight.png",
    title: "Link Your Email Page And Course Page And Make Final Product",
  },
  {
    image: "/logo/nine.png",
    title: "Generate Qr Code For Your Products ",
    desc: [""],
  },
  {
    image: "/logo/ten.png",
    title: "Generate Short Urls For Your Products",
  },
  {
    image: "/logo/eleven.png",
    title: "Generate Important Data Insights",
  },
];

// import Image from "next/image";
// import React from "react";

// const SectionFifteen = () => {
//   return (
//     <div
//       className={`${""} px-20 flex flex-col gap-10 items-center justify-center py-10 text-center min-h-screen bg-gray-100`}
//     >
//       <header className={`${""} text-4xl text-red-900 font-dancingScript`}>
//         World’s First AI App That Allows Us To Create “Online Learning” Hubs…
//       </header>
//       <header
//         className={`${""} px-[100px] text-4xl font-extrabold text-center`}
//       >
//         And Fill It With Hundreds Of High-Quality Courses…
//       </header>

//       <div
//         className={`${""} w-full min-h-screen flex flex-col items-center justify-center p-5 h-auto gap-10`}
//       >
//         {AllStepsData?.map((d, i) => {
//           return <AllStepsComp d={d} i={i + 1} key={i} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default SectionFifteen;

// const AllStepsComp = ({ d, i }) => {
//   const { image, title, desc } = d;
//   return (
//     <div
//       // className={`${
//       //   i % 2 == 0 ? "flex-row-reverse" : "flex-row"
//       // } flex gap-10 items-center justify-center px-10`}
//       className={`w-full bg-red-50 p-5 rounded-lg flex flex-col gap-10 items-center justify-center px-10`}
//     >
//       <div
//         className={`${""} flex flex-col items-center justify-center gap-10 w-full`}
//       >
//         <div
//           className={`${""} text-3xl font-bold text-orange-600 italic font-kaushanScript`}
//         >
//           Step : {i}
//         </div>
//         <Image
//           src={image}
//           width={500}
//           height={600}
//           className={`${""} min-w-full`}
//         />
//       </div>

//       <div
//         className={`${""} flex flex-col gap-10 items-center justify-center   text-black rounded-lg shadow-lg shadow-orange-100 border py-10 px-5  w-full bg-white`}
//       >
//         <div
//           className={`${""} py-5 px-4 text-center bg-orange-500 text-white rounded-full text-2xl w-[90%] font-bold `}
//         >
//           {title}
//         </div>
//         {/* <div
//           className={`${""} flex flex-col gap-5 items-center justify-center w-[90%] text-start`}
//         >
//           {desc?.map((d, i) => {
//             return (
//               <div key={i} className={`${""} w-full text-start text-xl`}>
//                 * {d}
//               </div>
//             );
//           })}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// const AllStepsData = [
//   {
//     image: "/logo/one.png",
//     title: "Generate Course Pages Quickly ",
//     desc: [""],
//   },
//   {
//     image: "/logo/two.png",
//     title: "Choose From Wide Range Of Beautiful Templates",
//   },
//   {
//     image: "/logo/three.png",
//     title: "Customize Course Page Templates Block By Block",
//     desc: [""],
//   },
//   {
//     image: "/logo/four.png",
//     title: "Generate Email Optin Pages Quickly ",
//   },
//   {
//     image: "/logo/five.png",
//     title: "Choose From Wide Range Of Beautiful Templates",
//     desc: [""],
//   },
//   {
//     image: "/logo/six.png",
//     title: "Customize Email Optin Page Templates Block By Block",
//   },
//   {
//     image: "/logo/seven.png",
//     title: "Connect Your Favourite Email Autoresponder ",
//     desc: [""],
//   },
//   {
//     image: "/logo/eight.png",
//     title: "Link Your Email Page And Course Page And Make Final Product",
//   },
//   {
//     image: "/logo/nine.png",
//     title: "Generate Qr Code For Your Products ",
//     desc: [""],
//   },
//   {
//     image: "/logo/ten.png",
//     title: "Generate Short Urls For Your Products",
//   },
// ];
