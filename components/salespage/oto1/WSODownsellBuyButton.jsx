import DisclaimerCode from "@/components/DisclaimerCode";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WSODownsellBuyButton = ({ linkUrl, imageLink, children }) => {
  return (
    <Link
      href={linkUrl}
      target="_blank"
      className={`${""} w-auto rounded-lg h-auto text-black flex items-center justify-center`}
      id="WSODownsellBuyButton"
    >
      <Image
        src={imageLink}
        width={500}
        height={500}
        className={`${""} w-full lg:w-[40vw]`}
      />
      <DisclaimerCode />
      {children}
    </Link>
  );
};

export default WSODownsellBuyButton;
