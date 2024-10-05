import Image from "next/image";
import React from "react";
import "@/components/authenticated/css/animation.css";

const PurchaseButton = () => {
  return (
    <div className="flex flex-col gap-3 px-5 py-2 items-center justify-center">
      <button className="py-2 sm:py-4 md:py-6 lg:py-8 px-2 sm:px-3 md:px-4 bg-orange-500 text-[16px] sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide rounded-[15px] sm:rounded-[18px] md:rounded-[20px] pulse">
        Click Here To Get My-Productify Today
      </button>
      <Image
        src="/logo/moneyback.png"
        width={300}
        height={20}
        className="sm:w-[350px] md:w-[450px] lg:w-[550px]" // Responsive image sizes
        alt="Money Back Guarantee"
      />
    </div>
  );
};

export default PurchaseButton;
