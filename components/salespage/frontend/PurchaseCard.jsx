import Image from "next/image";
import React from "react";
import PurchaseButtonDark from "./PurchaseButtonDark";
import { sectionWidth } from "@/utils/utils";
import PriceRising from "./PriceRising";

const PurchaseCard = ({ orange = false }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-between p-2 sm:p-3 md:p-10 bg-blue-800 relative"
      
    >
      <div className="absolute inset-0">
        <Image
          src="/logo/dotBg.png"
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </div>
      <div className="w-[95%] lg:w-[70%] flex flex-col items-center justify-center font-extrabold font-raleway my-[5vw] lg:my-[3vw] text-white relative">
        <div className="text-[5vw] lg:text-[2.5vw] rounded-lg text-center font-bold">
          Just Pay Once Instead Of Monthly
        </div>
        <header className="text-[4.5vw] lg:text-[2vw] font-bold text-center mb-[2vw]">
          <span className="font-bold rounded-lg">Get My Productify </span>
          <span>& Save $978/M Now</span>
        </header>
        <PurchaseButtonDark />
        <Image
          src={"/logo/smallMoneyBack.png"}
          width={500}
          height={50}
          className="w-[50vw] lg:w-[20vw] mt-[2vw]"
          alt="Small Money Back"
        />
        {/* <PriceRising /> */}
      </div>
    </div>
  );
};

export default PurchaseCard;

// import Image from "next/image";
// import React from "react";
// import PurchaseButtonDark from "./PurchaseButtonDark";

// const PurchaseCard = ({ orange = false }) => {
//   return (
//     <div
//       className={`${
//         orange
//           ? "bg-gradient-to-b from-orange-700 to-yellow-300 text-white"
//           : "bg-white text-black"
//       } flex items-center justify-between p-10`}
//     >
//       <Image src="/logo/file.png" width={500} height={500} />
//       <div
//         className={`${""} flex flex-col gap-5 items-center justify-center px-5 py-5`}
//       >
//         <header className={`${""} text-[32px] font-bold text-center font-openSans`}>
//           <span
//             className={`${
//               !orange && "bg-yellow-100"
//             } font-bold px-2 rounded-lg py-2 `}
//           >
//             Get My Productify
//           </span>
//           {/* {!orange && " "} */}
//           <span className={`${""} `}>& Save $968 Now</span>
//         </header>
//         <div className={`${""} text-2xl`}>Just Pay Once Instead Of Monthly</div>
//         <PurchaseButtonDark />
//       </div>
//     </div>
//   );
// };

// export default PurchaseCard;
