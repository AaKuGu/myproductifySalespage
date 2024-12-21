// "use client";

// import React, { useEffect, useRef } from "react";
// import Plyr from "plyr";
// import "plyr/dist/plyr.css"; // Import Plyr's CSS
// import { courseFeatures } from "@/constant/salespages";
// import { PlusIcon } from "lucide-react";
// import PurchaseButton from "./PurchaseButton";

// const SectionTwo = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const player = new Plyr(videoRef.current, {
//       youtube: {
//         rel: 0, // Disable related videos
//         modestbranding: 1, // Hide YouTube logo
//         showinfo: 0, // Hide video info
//       },
//     });

//     return () => {
//       if (player) {
//         player.destroy(); // Clean up the player when the component unmounts
//       }
//     };
//   }, []);

//   return (
//     <div
//       className="flex flex-col lg:flex-row gap-3 py-4 px-2 items-center justify-center w-full min-h-screen bg-black text-white"
//       style={{ background: 'url("/background/darkbg.png")' }}
//     >
//       <div className="w-full lg:w-[60%] flex flex-col gap-5">
//         <header className="text-center text-3xl font-bold mb-4">
//           Starting Your Own “Online Education” Business Has Never Been Easier…
//         </header>

//         {/* Plyr Video Component */}
//         <div className="w-full h-0 pb-[56.25%] relative overflow-hidden rounded-lg shadow-lg">
//           <video
//             ref={videoRef}
//             className="absolute top-0 left-0 w-full h-full"
//             playsInline
//             controls
//             data-poster="/path/to/poster.jpg" // Optional: add a video thumbnail
//           >
//             <source
//               src="https://www.youtube.com/watch?v=QJSeGOVBxmI"
//               type="video/youtube"
//             />
//           </video>
//         </div>

//         <div className="flex flex-col items-center justify-center py-3 px-[20px] text-center gap-7">
//           <div className="text-2xl mx-auto leading-[30px]">
//             Creating Your First Profitable Course Product Just Got Faster &
//             Easier
//           </div>
//           <div className="font-bold text-3xl">
//             Get My Productify & Save $949 Monthly
//           </div>
//           <div className="text-2xl">
//             Real Price- $978/M Get It Today For Only $19/M
//           </div>
//           <PurchaseButton />
//         </div>
//       </div>

//       <div className="w-full lg:w-[30%] flex flex-col gap-5 text-lg font-ptSans">
//         {courseFeatures?.map((d, i) => (
//           <div key={i} className="flex gap-5 items-center justify-center">
//             <div className="w-[20px] h-[20px] rounded-full">
//               <PlusIcon className="text-orange-700" size={20} />
//             </div>
//             <span className="font-semibold tracking-wide leading-[25px]">
//               {d}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionTwo;

// "use client";

// import { courseFeatures } from "@/constant/salespages";
// import { PlusIcon } from "lucide-react";
// import React from "react";
// import PurchaseButton from "./PurchaseButton";

// const SectionTwo = () => {
//   return (
//     <div
//       className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-5 py-10 px-2 md:px-4 items-start justify-center w-full min-h-screen  text-white"
//       style={{ background: 'url("/background/darkbg.png")' }}
//     >
//       <div className="w-full lg:w-[60%] flex flex-col gap-5">
//         <header className="text-center text-3xl font-bold mb-4 leading-[60px]">
//           Starting Your Own “Online Education” Business Has Never Been Easier…
//         </header>

//         {/* Wistia embed */}
//         <script
//           src="https://fast.wistia.com/embed/medias/vb05cxnt44.jsonp"
//           async
//         ></script>
//         <script
//           src="https://fast.wistia.com/assets/external/E-v1.js"
//           async
//         ></script>
//         <div
//           className="border-[2px] border-white"
//           style={{ padding: "56.25% 0 0 0", position: "relative" }}
//         >
//           <div
//             className="wistia_responsive_wrapper"
//             style={{
//               height: "100%",
//               left: "0",
//               position: "absolute",
//               top: "0",
//               width: "100%",
//             }}
//           >
//             <div
//               className="wistia_embed wistia_async_vb05cxnt44 seo=true videoFoam=true"
//               style={{ height: "100%", position: "relative", width: "100%" }}
//             >
//               <div
//                 className="wistia_swatch"
//                 style={{
//                   height: "100%",
//                   left: "0",
//                   opacity: 0,
//                   overflow: "hidden",
//                   position: "absolute",
//                   top: "0",
//                   transition: "opacity 200ms",
//                   width: "100%",
//                 }}
//               >
//                 <Image
//                   src="https://fast.wistia.com/embed/medias/vb05cxnt44/swatch"
//                   style={{
//                     filter: "blur(5px)",
//                     height: "100%",
//                     objectFit: "contain",
//                     width: "100%",
//                   }}
//                   alt=""
//                   aria-hidden="true"
//                   onLoad={(e) => (e.target.parentNode.style.opacity = 1)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center justify-center py-10 px-[20px] text-center gap-7">
//           <div className="text-2xl mx-auto leading-[30px]">
//             Creating Your First Profitable Course Product Just Got Faster &
//             Easier
//           </div>
//           <div className="font-bold text-3xl">
//             Get My Productify & Save $949 Monthly
//           </div>
//           <div className="text-2xl">
//             Real Price- $978/M Get It Today For Only $19/M
//           </div>
//           <PurchaseButton />
//         </div>
//       </div>

//       <div className="w-full lg:w-[40%] flex flex-col gap-5 text-lg font-ptSans  items-start justify-center">
//         {courseFeatures?.map((d, i) => (
//           <div key={i} className="flex gap-5 items-center justify-center">
//             <div className="w-[20px] h-[20px] rounded-full">
//               <PlusIcon className="text-orange-500" size={20} />
//             </div>
//             <span className="font-semibold tracking-wide leading-[25px]">
//               {d}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionTwo;

"use client";

import { courseFeatures } from "@/constant/salespages";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import PurchaseButton from "./PurchaseButton";
import WistiaCode from "./WistiaCode";

const SectionTwo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }

  return (
    <div
      className="flex flex-col lg:flex-row gap-[2vw] py-[5vw] px-2 md:px-4 w-full min-h-screen text-white items-center justify-center lg:items-start"
      style={{
        background: 'url("/background/two.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Your content goes here */}

      {/* Left Section */}
      <div className="w-full lg:w-[50%] flex flex-col gap-[10vw] lg:gap-[4vw]  ">
        <header className="text-center  border-[1vw] border-dashed border-white text-white p-[2vw] lg:p-[1vw] flex flex-col gap-0 bg-gray-900">
          <div className={`${""} text-[3vw] lg:text-[2vw] `}>
            It Has Never Been{" "}
            <i>
              <u>Easier</u>
            </i>{" "}
            to Start Your Own{" "}
          </div>
          <div
            className={`${""} italic text-[#ffff4d] font-bold text-[5vw] lg:text-[3vw]`}
          >
            Online Education Business
          </div>{" "}
        </header>

        {/* Wistia embed */}
        <WistiaCode />

        {/* Center Section */}
        <div className="flex flex-col items-center justify-center py-10 px-[10px] sm:px-[20px] text-center gap-[4vw] lg:gap-[2vw] ">
          <div className="text-[5vw] lg:text-[2vw] border-white border-dotted border-[1vw] lg:border-[0.2vw]  px-[5vw] py-[1vw] rounded-lg ">
            <div>Creating Your First Profitable</div>
            <div>Course Product Just Got Faster & Easier</div>
          </div>
          <div className="font-bold text-xl sm:text-2xl md:text-3xl text-[5vw] lg:text-[2vw]">
            Get My Productify & Save $200+ Monthly
          </div>
          <div
            className="text-[5vw] lg:text-[2vw] px-[1vw] py-[0.5vw] rounded-[0.5vw] font-bold"
            style={{
              background: "linear-gradient(to bottom, purple , blue)",
            }}
          >
            Real Price- $90/M Get It Today For Only $17
          </div>
          <PurchaseButton />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[40%] flex flex-col gap-[4vw] lg:gap-[1.5vw] text-[5vw] lg:text-[1.5vw] items-start justify-center ">
        {courseFeatures?.map((d, i) => (
          <div key={i} className="flex gap-5 items-center justify-start">
            <div className=" flex items-center justify-center  rounded-full ">
              <PlusIcon className="text-orange-500 h-[4vw] w-[4vw] lg:h-[2vw] lg:w-[2vw]  " />
            </div>
            <div className="font-semibold ">{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
