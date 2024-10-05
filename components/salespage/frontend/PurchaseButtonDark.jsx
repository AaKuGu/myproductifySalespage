import { textH } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const PurchaseButtonDark = () => {
  return (
    <div
      className={`${""} flex flex-col gap-3 px-2 md:px-3 xl:px-5 py-2 items-center justify-center w-full `}
    >
      <button
        className={`${""} py-5 px-[20px] text-xl md:text-2xl font-bold tracking-wide rounded-[10px] text-white animate-pulse font-notoSans w-full`}
        style={{
          background: "linear-gradient(to top right, blue, red)",
        }}
      >
        Click Here To Get My Productify Today
      </button>
      <div className={`${""} bg-gray-400 px-5 py-1 rounded-lg w-[80%]`}>
        <Image src="/logo/moneyback.png" width={550} height={30} />
      </div>
    </div>
  );
};

export default PurchaseButtonDark;
