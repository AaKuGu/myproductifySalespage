import Image from "next/image";
import React from "react";
import PurchaseButtonDark from "./PurchaseButtonDark";
import { sectionWidth } from "@/utils/utils";

const PurchaseCard = ({ orange = false }) => {
  return (
    <div
      className={`${
        orange
          ? "bg-gradient-to-b from-orange-700 to-yellow-300 text-white"
          : "bg-white text-black"
      } w-full flex flex-col items-center justify-between p-2 sm:p-3 md:p-10`}
    >
      <div className={`${sectionWidth}  `}>
        <Image
          src="/logo/file.png"
          width={300}
          height={300}
          className="w-full h-auto "
        />
        <div className="flex flex-col gap-5 items-center justify-center font-extrabold font-raleway w-full">
          <div className="text-lg bg-blue-700 px-5 py-2 rounded-lg lg:bg-transparent text-center font-bold text-white lg:text-black w-[95%] sm:w-[80%] md:w-[70%] ">
            Just Pay Once Instead Of Monthly
          </div>
          <header className="text-lg md:text-xl  font-bold text-center ">
            <span
              className={`${
                !orange && "bg-yellow-100"
              } font-bold px-2 rounded-lg py-2 `}
            >
              Get My Productify
            </span>
            <span>& Save $3976 Now</span>
          </header>

          <PurchaseButtonDark />
        </div>
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
