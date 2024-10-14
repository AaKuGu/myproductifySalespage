"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import FirstImage from "@/public/logo/file.png";
import WebsiteLogo from "@/public/logo/logoTransDark.png";

const SectionOne = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }

  const handleImageLoad = (event) => {
    event.target.parentNode.style.opacity = 1; // Adjust opacity after the image loads
  };

  return (
    <div
      className={`flex flex-col gap-5 min-h-fit w-full items-center justify-start text-white px-4 sm:px-6 md:px-8 lg:px-10 text-center pb-10 `}
      style={{ background: 'url("/background/xtraDarkBg.png")' }}
    >
      <div className="font-extrabold text-[16px] 400:text-xl sm:text-2xl md:text-3xl my-5 font-montserrat w-[95%] 400:w-[90%] text-center flex flex-col items-center justify-center gap-10">
        <div className="header-text">
          <Image
            src={WebsiteLogo}
            width={400}
            height={200}
            alt="website logo"
          />
        </div>
        <div className="flex items-center justify-center text-center border-[2px] border-dotted border-white px-5 py-2 text-[16px] 400:text-[18px] md:text-[20px] lg:text-[22px] rounded-full tracking-wider">
          CONGRATULATIONS! Thanks For Investing Into My Productify
        </div>
        <div
          className={`${""} w-full md:w-[90%] text-yellow-300 text-[25px] 600:text-[35px] lg:text-[40px] leading-[40px] md:leading-[50px]`}
        >
          Urgent Special Offer For My Productify Buyers:
          <span className="text-white font-bold font-lato px-3 rounded-lg md:text-2xl 400:text-xl text-[16px] ">
            Get ALL 'My Productify' Upgrades For A MASSIVE <u>72% Discount</u>
          </span>{" "}
        </div>

        <div className="mt-3 400:text-lg sm:text-xl tracking-wider font-bold flex-col flex items-center justify-center gap-10">
          <div
            className={`${""} text-[20px] 400:text-[30px] md:text-[35px] lg:text-[50px] leading-[40px] md:leading-[60px] font-extrabold text-yellow-300`}
          >
            Get My Productify Special Bundle Upgrade
          </div>
          <div
            className={`${""} text-[16px] 400:text-[20px] md:text-[25px] lg:text-[30px] leading-[30px] md:leading-[40px] lg:leading-[50px] w-full md:w-[80%] font-normal  `}
          >
            to Unlock ALL the Upgrades at a <u>MASSIVE Discount</u> to{" "}
            <b>
              <u>Maximize</u>
            </b>{" "}
            Your Results and Get the Best Out of My Productify Starting Today!
          </div>
        </div>

        <div className="mt-4 md:mt-3 text-[16px] md:text-[20px] 400:text-lg tracking-widest font-normal w-[90%] md:w-[80%] leading-[40px] ">
          Get Commercial License + Reseller License + Pro License
        </div>
      </div>
      {/* Logo Section */}
      <div
        className={`${""} w-full md:w-[768px] lg:w-[1000px] flex items-center justify-center`}
      >
        <div className={`${""} w-full h-auto`}>
          <script
            src="https://fast.wistia.com/embed/medias/g8t7huk209.jsonp"
            async
          ></script>
          <script
            src="https://fast.wistia.com/assets/external/E-v1.js"
            async
          ></script>
          <div
            class="wistia_responsive_padding"
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
          >
            <div
              class="wistia_responsive_wrapper"
              style={{
                height: "100%",
                left: "0",
                position: "absolute",
                top: "0",
                width: "100%",
              }}
            >
              <div
                class="wistia_embed wistia_async_g8t7huk209 seo=true videoFoam=true"
                style={{ height: "100%", position: "relative", width: "100%" }}
              >
                <div
                  class="wistia_swatch"
                  style={{
                    height: "100%",
                    left: "0",
                    opacity: 0,
                    overflow: "hidden",
                    position: "absolute",
                    top: "0",
                    transition: "opacity 200ms",
                    width: "100%",
                  }}
                >
                  <img
                    src="https://fast.wistia.com/embed/medias/g8t7huk209/swatch"
                    style={{
                      filter: "blur(5px)",
                      height: "100%",
                      objectFit: "contain",
                      width: "100%",
                    }}
                    alt=""
                    aria-hidden="true"
                    onload="this.parentNode.style.opacity=1;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      {/* <div className="w-full flex items-center justify-center text-[16px] 400:text-[18px] md:text-[22px] rounded-lg border-dashed border-white border-[2px] font-bold font-montserrat tracking-wider px-2 py-2 flex-col leading-[40px] md:leading-[50px]">
        <span>Discover How Our Top Members Are</span>
        <span className={`${""} text-yellow-500 underline`}>
          MAKING $5000- $10,000 Every Week
        </span>
        <span>
          by Reselling{" "}
          <span className={`${""} bg-red-500 px-2 py-2 rounded-full`}>
            My Productify
          </span>{" "}
          Proven Results from Our VIP Reseller Community!
        </span>
      </div>

      <div
        className={`${""} font-raleway text-[22px] md:text-[25px] xl:text-[29px] font-bold text-yellow-500 my-5`}
      >
        Keep 100% Profits
      </div>

      <div className="bg-orange-200 text-black px-4 sm:px-6 md:px-8 lg:px-10 py-2 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full">
        Tap into a Thriving Market and Profit from Reselling a Revolutionary
        Tool
      </div> */}

      {/* <div className={`${""} w-[90%] h-auto flex items-center justify-center `}>
        <Image
          src={FirstImage}
          // width={666} // Original width
          // height={600} // Original height
          alt="Description of the image"
        />
      </div> */}
    </div>
  );
};

export default SectionOne;

// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import FirstImage from "@/public/logo/file.png";
// import WebsiteLogo from "@/public/logo/logoTransDark.png";

// const SectionOne = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null; // Prevent rendering on the server
//   }

//   return (
//     <div
//       className={`flex flex-col gap-5 min-h-fit w-full items-center justify-start text-white px-4 sm:px-6 md:px-8 lg:px-10 text-center py-2 `}
//       style={{ background: 'url("/background/xtraDarkBg.png")' }}
//     >
//       <div className="font-extrabold text-[16px] 400:text-xl sm:text-2xl md:text-3xl my-5 font-montserrat w-[95%] 400:w-[90%] text-center  flex flex-col items-center justify-center gap-10">
//         <div className="header-text">
//           <Image
//             src={WebsiteLogo}
//             width={400}
//             height={200}
//             alt="website logo"
//           />
//         </div>
//         <div className="flex items-center justify-center text-center border-[2px]  border-dotted border-white px-5 py-2 text-[16px] 400:text-[18px] md:text-[20px] lg:text-[22px] rounded-full tracking-wider">
//           CONGRATULATIONS! Thanks For Investing Into My Productify
//         </div>
//         <div
//           className={`${""} w-full md:w-[90%]  text-yellow-300 text-[25px] 600:text-[35px] lg:text-[40px] leading-[40px] md:leading-[50px]`}
//         >
//           Urgent Special Offer For My Productify Buyers:
//           <span className="text-white font-bold font-lato px-3 rounded-lg md:text-2xl 400:text-xl text-[16px] ">
//             Get ALL 'My Productify' Upgrades For A MASSIVE <u>72% Discount</u>
//           </span>{" "}
//         </div>

//         <div className="mt-3 400:text-lg sm:text-xl tracking-wider font-bold flex-col flex items-center justify-center gap-10">
//           <div
//             className={`${""} text-[25px] 400:text-[30px] md:text-[35px] lg:text-[50px] leading-[40px] md:leading-[60px] font-extrabold text-yellow-300`}
//           >
//             Get My Productify Special Bundle Upgrade
//           </div>
//           <div
//             className={`${""} text-[16px] 400:text-[20px] md:text-[25px] lg:text-[30px]  leading-[30px] md:leading-[40px] lg:leading-[50px] w-[80%] font-normal`}
//           >
//             to Unlock ALL the the Upgrades at a <u>MASSIVE Discount</u> to{" "}
//             <b>
//               <u>Maximize</u>
//             </b>{" "}
//             Your Results and Get the Best Out of My Productify Starting Today!
//           </div>
//         </div>

//         <div className="mt-4 md:mt-3 text-[16px] md:text-[20px] 400:text-lg tracking-widest font-normal w-[90%] md:w-[80%] leading-[40px] ">
//           Get Commercial License + Reseller License + Pro License
//         </div>
//       </div>
//       {/* Logo Section */}
//       <div
//         className={`${""} w-full  flex items-center justify-center`}
//       >
//         <>
//           <script
//             src="https://fast.wistia.com/embed/medias/9vdo9ejgwj.jsonp"
//             async
//           ></script>
//           <script
//             src="https://fast.wistia.com/assets/external/E-v1.js"
//             async
//           ></script>
//           <div
//             class="wistia_responsive_padding"
//             style={{ padding: "56.25% 0 0 0", position: "relative" }}
//           >
//             <div
//               class="wistia_responsive_wrapper"
//               style={{
//                 height: "100%",
//                 left: "0",
//                 position: "absolute",
//                 top: "0",
//                 width: "100%",
//               }}
//             >
//               <div
//                 class="wistia_embed wistia_async_9vdo9ejgwj seo=true videoFoam=true"
//                 style={{ height: "100%", position: "relative", width: "100%" }}
//               >
//                 <div
//                   class="wistia_swatch"
//                   style={{
//                     height: "100%",
//                     left: "0",
//                     opacity: 0,
//                     overflow: "hidden",
//                     position: "absolute",
//                     top: "0",
//                     transition: "opacity 200ms",
//                     width: "100%",
//                   }}
//                 >
//                   <img
//                     src="https://fast.wistia.com/embed/medias/9vdo9ejgwj/swatch"
//                     style={{
//                       filter: "blur(5px)",
//                       height: "100%",
//                       objectFit: "contain",
//                       width: "100%",
//                     }}
//                     alt=""
//                     aria-hidden="true"
//                     onload="this.parentNode.style.opacity=1;"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       </div>

//       {/* Tagline */}
//       <div className="w-full flex items-center justify-center text-[16px] 400:text-[18px] md:text-[22px] rounded-lg border-dashed border-white border-[2px] font-bold font-montserrat tracking-wider px-2 py-2 flex-col leading-[40px] md:leading-[50px]">
//         <span>Discover How Our Top Members Are</span>
//         <span className={`${""} text-yellow-500 underline`}>
//           MAKING $5000- $10,000 Every Week
//         </span>
//         <span>
//           by Reselling{" "}
//           <span className={`${""} bg-red-500 px-2 py-2 rounded-full`}>
//             My Productify
//           </span>{" "}
//           Proven Results from Our VIP Reseller Community!
//         </span>
//       </div>

//       <div
//         className={`${""} font-raleway text-[22px] md:text-[25px] xl:text-[29px] font-bold text-yellow-500 my-5`}
//       >
//         Keep 100% Profits
//       </div>

//       <div className="bg-orange-200 text-black px-4 sm:px-6 md:px-8 lg:px-10 py-2 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full">
//         Tap into a Thriving Market and Profit from Reselling a Revolutionary
//         Tool
//       </div>

//       <div className={`${""} w-[90%] h-auto flex items-center justify-center `}>
//         <Image
//           src={FirstImage}
//           // width={666} // Original width
//           // height={600} // Original height
//           alt="Description of the image"
//         />
//       </div>
//     </div>
//   );
// };

// export default SectionOne;
