// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const GraphicsAndSwipes = () => {
//   return (
//     <div
//       className={`${""} h-auto w-full flex items-center justify-center flex-col gap-[10vw] lg:gap-[5vw] text-black`}
//       style={{
//         background: 'url("/background/one.png")',
//         backgroundAttachment: "fixed", // Parallax effect
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div
//         className={`${""} flex items-center justify-center flex-col gap-[5vw] lg:gap-[2vw] my-[10vw] lg:my-[5vw] w-[90%]`}
//       >
//         <div
//           className={`${""} flex items-center justify-center flex-col gap-[7vw] lg:gap-[3vw]`}
//         >
//           <header className={`${""} font-bold text-[6vw] lg:text-[3vw] italic`}>
//             Demo Video
//           </header>
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/6GEaOwd7ckw"
//             frameborder="0"
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//           <div>You can use this video for promotion of this product</div>
//         </div>
//         <div className={`${""} text-[6vw] lg:text-[3.4vw]`}>
//           Your High Converting Email Swipes
//         </div>
//         <div className={`${""} font-normal text-[4vw] lg:text-[2vw]`}>
//           Click the link below to access the email swipe file!
//         </div>
//         <Link
//           href="https://docs.google.com/document/d/1U3AqUWp_WhwDM6gJ59-g55DCz40aZyws58ZiYZy08wc/edit?usp=sharing"
//           target="_blank"
//           className={`${""} bg-red-600 px-[4vw] py-[1vw] lg:px-[2vw] lg:py-[0.5vw] border-dashed border-[0.3vw] border-red-700 shadow-lg shadow-sky-200 text-white text-[5.5vw] lg:text-[3.5vw] lg:hover:text-[4vw] duration-300`}
//         >
//           Click Here To Get Your Swipes
//         </Link>
//         <div className={`${""} text-[6vw] lg:text-[3.4vw] mt-[5vw]`}>
//           Product Graphics
//         </div>
//         <div
//           className={`${""} h-auto w-full flex items-center justify-center flex-col lg:flex-row gap-[5vw] lg:gap-[2.5vw]`}
//         >
//           {productGraphics?.map((d, i) => {
//             return (
//               <div className={`${""} w-full `}>
//                 <Image
//                   src={d}
//                   width={1000}
//                   height={500}
//                   className={`${""} w-full lg:w-[30vw]`}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GraphicsAndSwipes;

// const productGraphics = [
//   "/logo/banner1.png",
//   "/logo/banner2.png",
//   "/logo/banner3.png",
// ];

import Image from "next/image";
import Link from "next/link";
import React from "react";

const GraphicsAndSwipes = () => {
  return (
    <div
      className={`${""} h-auto w-full flex items-center justify-center flex-col gap-[10vw] lg:gap-[5vw] text-black`}
      style={{
        background: 'url("/background/one.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${""} flex items-center justify-center flex-col gap-[5vw] lg:gap-[2vw] my-[10vw] lg:my-[5vw] w-[90%] `}
      >
        <div
          className={`${""} flex items-center justify-center flex-col gap-[7vw] lg:gap-[3vw] mb-[2vw]`}
        >
          <header className={`${""} font-bold text-[6vw] lg:text-[3vw] italic`}>
            Demo Video
          </header>

          {/* Wrapper for responsive video */}
          <div
            className="relative w-full  border-[0.5vw] border-black p-[1vw]"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/6GEaOwd7ckw"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video description */}
          <div className="text-[4vw] lg:text-[2vw] mt-[2vw] text-gray-600 italic">
            You can use this video for promotion of this product
          </div>
        </div>

        <div className={`${""} text-[6vw] lg:text-[3.4vw]`}>
          Your High Converting Email Swipes
        </div>

        <div className={`${""} font-normal text-[4vw] lg:text-[2vw]`}>
          Click the link below to access the email swipe file!
        </div>

        {/* Link to email swipe file */}
        <Link
          href="https://docs.google.com/document/d/1U3AqUWp_WhwDM6gJ59-g55DCz40aZyws58ZiYZy08wc/edit?usp=sharing"
          target="_blank"
          className={`${""} bg-red-600 px-[4vw] py-[1vw] lg:px-[2vw] lg:py-[0.5vw] border-dashed border-[0.3vw] border-red-700 shadow-lg shadow-sky-200 text-white text-[5.5vw] lg:text-[3.5vw] lg:hover:text-[4vw] duration-300`}
        >
          Click Here To Get Your Swipes
        </Link>

        <div className={`${""} text-[6vw] lg:text-[3.4vw] mt-[5vw]`}>
          Product Graphics
        </div>

        {/* Display product graphics */}
        <div
          className={`${""} h-auto w-full flex items-center justify-center flex-col lg:flex-row gap-[5vw] lg:gap-[2.5vw]`}
        >
          {productGraphics?.map((d, i) => {
            return (
              <div className={`${""} w-full`} key={i}>
                <Image
                  src={d}
                  width={1000}
                  height={500}
                  className={`${""} w-full lg:w-[30vw]`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GraphicsAndSwipes;

const productGraphics = [
  "/logo/banner1.png",
  "/logo/banner2.png",
  "/logo/banner3.png",
];
