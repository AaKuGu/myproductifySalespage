import Image from "next/image";
import Link from "next/link";
import React from "react";

const WSODownsellBuyButton = () => {
  return (
    <Link
      href="https://warriorplus.com/o2/buy/g886gd/q593vd/k3px4m"
      target="_blank"
      className={`${""} w-full rounded-lg h-auto text-black flex items-center justify-center`}
      id="WSODownsellBuyButton"
    >
      <Image
        src={"/logo/bundleDownsellBuyButton.png"}
        width={500}
        height={500}
        className={`${""} w-full lg:w-[40vw]`}
      />
    </Link>
  );
};

export default WSODownsellBuyButton;
