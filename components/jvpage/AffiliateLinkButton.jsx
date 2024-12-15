import Link from "next/link";
import React from "react";
import { MdAdsClick } from "react-icons/md";

const AffiliateLinkButton = () => {
  return (
    <Link
      href="https://warriorplus.com/aff-offer/o/g886gd"
      target="_blank"
      className={`${""} bg-red-600 px-[2vw] py-[1vw] lg:py-[1vw] border-dashed border-[0.3vw] border-red-700 shadow-lg shadow-sky-900 text-white lg:hover:text-[4vw] duration-300 text-[6vw] lg:text-[3.5vw] flex items-center justify-center gap-[4vw] lg:gap-[1.5vw]`}
    >
      Click here For Affiliate Link <MdAdsClick />
      {/* <div className={`${""} flex items-center justify-center gap-3 w-full`}>
        Click here For Affiliate Link <MdAdsClick />
      </div> */}
    </Link>
  );
};

export default AffiliateLinkButton;
