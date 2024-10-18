import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      className={`${""} w-full h-auto flex flex-col 600:flex-row items-center justify-center gap-5 600:gap-[3vw] `}
    >
      <Image
        src="/logo/logoTransDark.png"
        width={400}
        height={50}
        className={`${""} w-[50vw] 600:w-[30vw]`}
      />
      <ul
        className={`${""} flex items-center justify-center gap-[10vw] 600:gap-[5vw] text-[5vw] 600:text-[1.5vw] `}
      >
        {headerMenus?.map((d, i) => {
          return <li>{d?.label}</li>;
        })}
      </ul>
      <Link
        href="/"
        className={`${""} flex items-center justify-center px-[2vw] py-[0.5vw]  font-bold text-[5vw] 600:text-[1.5vw] bg-gradient-to-r from-[#000033] to-[#330000] 600:hover:from-[#330000] 600:hover:to-[#000033] duration-600`}
      >
        Affiliate&nbsp;Link
      </Link>
    </div>
  );
};

export default Header;

const headerMenus = [
  {
    label: "Prizes",
  },
  {
    label: "Tools",
  },
  {
    label: "JvDoc",
  },
  {
    label: "Support",
  },
];
