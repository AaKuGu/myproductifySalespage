"use client";

import { textH } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PurchaseButtonDark = () => {
  const handleSmoothScroll = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the start of the target element
      });
    }
  };

  return (
    <div
      className={`${""} flex flex-col gap-3 px-2 md:px-3 xl:px-5 py-2 items-center justify-center w-full `}
    >
      <Link
        href="#wsoBuyButton"
        onClick={handleSmoothScroll}
        className={`${""} py-5 px-[20px] text-xl md:text-2xl font-bold tracking-wide rounded-[10px] text-white animate-pulse font-notoSans w-full text-center`}
        style={{
          background: "linear-gradient(to top right, blue, red)",
        }}
      >
        Click Here To Get My Productify Today
      </Link>
      <div className={`${""} bg-gray-400 px-5 py-1 rounded-lg w-[80%]`}>
        <Image src="/logo/moneyback.png" width={550} height={30} />
      </div>
    </div>
  );
};

export default PurchaseButtonDark;
