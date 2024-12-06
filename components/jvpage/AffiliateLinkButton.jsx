import Link from "next/link";
import React from "react";
import { MdAdsClick } from "react-icons/md";

const AffiliateLinkButton = () => {
  return (
    <Link
      href="https://warriorplus.com/aff-offer/o/g886gd"
      target="_blank"
      className={`${""} bg-red-600 px-[2vw] py-[1vw] lg:py-[1vw] border-dashed border-[0.3vw] border-red-700 shadow-lg shadow-sky-900 text-white hover:text-[1.4em] duration-200 text-[6vw] lg:text-[3.5vw] lg:hover:text-[4vw]`}
    >
      Click here For Affiliate Link
    </Link>
  );
};

export default AffiliateLinkButton;
