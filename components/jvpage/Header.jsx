"use client";

import { handleSmoothScroll } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      className={`${""}  h-auto flex flex-col 600:flex-row items-center justify-center gap-5 600:gap-[3vw] bg-black w-full border-white border-b-[0.3vw] fixed top-0 left-0 z-[100]`}
    >
      <Image
        src="/logo/myProductifyLogo.png"
        width={400}
        height={50}
        className={`${""} w-[50vw] 600:w-[20vw]`}
      />
      <ul
        className={`${""} flex items-center justify-center gap-[10vw] 600:gap-[5vw] text-[4vw] 600:text-[1.5vw] `}
      >
        {headerMenus?.map((d, i) => {
          return (
            <Link
              href={d?.link}
              onClick={(e) => {
                if (!d?.newTab) {
                  handleSmoothScroll(e);
                }
              }}
              target={d?.newTab ? "_blank" : undefined}
            >
              {d?.label}
            </Link>
          );
        })}
      </ul>
      <Link
        href="/"
        className={`${""} flex items-center justify-center px-[5vw] py-[2vw] lg:px-[2vw] lg:py-[0.5vw] font-bold text-[5vw] 600:text-[1.5vw] bg-gradient-to-r from-[#000033] to-[#330000] 600:hover:from-[#330000] 600:hover:to-[#000033] duration-600 rounded-lg`}
      >
        Affiliate&nbsp;Link
      </Link>
    </div>
  );
};

export default Header;

const headerMenus = [
  {
    label: "Details",
    link: "#details",
    newTab: false,
  },
  {
    label: "Sales Page",
    link: "https://live.myproductify.site",
    newTab: true,
  },
  {
    label: "JvDoc",
    link: "https://docs.google.com/document/d/1MrN7UAESMIHQIEUktWN-owNA0-hfaWHjitB6pa4fYB0/edit?usp=sharing",
    newTab: true,
  },
  {
    label: "Support",
    link: "#support",
    newTab: false,
  },
];
