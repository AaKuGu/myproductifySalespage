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
      className={`${""} flex flex-col gap-3 px-2 md:px-3 xl:px-5 py-2 items-center justify-center w-fit text-white`}
    >
      <Link
        href="#wsoBuyButton"
        onClick={handleSmoothScroll}
        className="py-[4vw] px-[2vw] lg:p-[2vw] bg-orange-500 text-[4.5vw] lg:text-[2vw] font-bold tracking-wide rounded-[1vw] pulse text-center italic"
        style={{
          background: "linear-gradient(to bottom,  #0052cc,  #80ffff)",
        }}
      >
        Click Here To Get My Productify Today
      </Link>
    </div>
  );
};

export default PurchaseButtonDark;
