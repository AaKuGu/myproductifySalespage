import DisclaimerCode from "@/components/DisclaimerCode";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WSOUpsellBuyButton = ({ linkUrl, imageLink, children }) => {
  return (
    <Link
      href={linkUrl}
      target="_blank"
      className={`${""} w-[95%] md:w-[80%] rounded-lg h-auto text-black flex items-center justify-center flex-col gap-[6vw] lg:gap-[3vw]`}
      id="WSOUpsellBuyButton"
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

export default WSOUpsellBuyButton;
