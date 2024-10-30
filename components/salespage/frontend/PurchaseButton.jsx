import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";
import Link from "next/link";
import { handleSmoothScroll } from "@/utils/utils";

const PurchaseButton = () => {
  return (
    <div className="flex flex-col gap-3 px-[1vw] py-2 items-center justify-center ">
      <Link
        href="#wsoBuyButton"
        onClick={handleSmoothScroll} // Attach the smooth scroll handler
        className="py-[4vw] px-[2vw] lg:p-[2vw] bg-orange-500 text-[4.5vw] lg:text-[2vw] font-bold tracking-wide rounded-[1vw] pulse text-center italic"
        style={{
          background: "linear-gradient(to bottom,  #0052cc,  #80ffff)",
        }}
      >
        Click Here To Get My-Productify Today
      </Link>
      <Image
        src="/logo/smallMoneyBack.png"
        width={300}
        height={20}
        className="w-[50vw] md:w-[40vw]" // Responsive image sizes
        alt="Money Back Guarantee"
      />
    </div>
  );
};

export default PurchaseButton;
