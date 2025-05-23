// "use client";

// import { handleSmoothScroll } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      className={`${""}  h-auto flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-[3vw] bg-black w-full border-white border-b-[0.3vw] fixed top-0 left-0 z-[100]`}
    >
      <Image
        src="/logo/myProductifyLogo.png"
        width={400}
        height={50}
        className={`${""} w-[50vw] lg:w-[20vw]`}
      />
      <ul
        className={`${""} flex items-center justify-center gap-[10vw] lg:gap-[5vw] text-[3vw] lg:text-[1.1vw] `}
      >
        {headerMenus?.map((d, i) => {
          return (
            <Link
              href={d?.link}
              className={`${''} underline italic`}
              // onClick={(e) => {
              //   if (!d?.newTab) {
              //     handleSmoothScroll(e);
              //   }
              // }}
              target={d?.newTab ? "_blank" : undefined}
            >
              {d?.label}
            </Link>
          );
        })}
      </ul>
      <Link
        href="https://warriorplus.com/aff-offer/o/g886gd"
        target="_blank"
        className={`${""} flex items-center justify-center px-[5vw] py-[2vw] lg:px-[2vw] lg:py-[0.5vw] font-bold text-[5vw] lg:text-[1.5vw] bg-gradient-to-r from-[#000033] to-[#330000] lg:hover:from-[#330000] lg:hover:to-[#000033] duration-600 rounded-lg`}
      >
        Affiliate&nbsp;Link
      </Link>
    </div>
  );
};

export default Header;

const headerMenus = [
  {
    label: "Funnel",
    link: "#funnel",
    newTab: false,
  },
  {
    label: "Prizes",
    link: "#prizes",
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
