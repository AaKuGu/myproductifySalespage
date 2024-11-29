import Image from "next/image";
import Link from "next/link";
import React from "react";

const WSOUpsellBuyButton = ({ linkUrl, imageLink, children }) => {
  return (
    <Link
      href={linkUrl}
      target="_blank"
      className={`${""} w-auto rounded-lg h-auto text-black flex items-center justify-center `}
      id="WSOUpsellBuyButton"
    >
      
      <Image
        src={imageLink}
        width={500}
        height={500}
        className={`${""} w-full lg:w-[40vw]`}
      />
      {children}
    </Link>
  );
};

export default WSOUpsellBuyButton;
