import Image from "next/image";
import Link from "next/link";
import React from "react";

const WSOUpsellBuyButton = () => {
  return (
    <Link
      href={"https://warriorplus.com/o2/buy/g886gd/r1wc27/rqhzg3"}
      target="_blank"
      className={`${""} w-full rounded-lg h-auto text-black flex items-center justify-center`}
      id="WSOUpsellBuyButton"
    >
      <Image src={"/logo/bundleUpsellBuyButton.png"} width={500} height={500} />
    </Link>
  );
};

export default WSOUpsellBuyButton;
