import Image from "next/image";
import Link from "next/link";
import React from "react";

const WSOUpsellBuyButton = () => {
  return (
    <Link
      href={"https://warriorplus.com/o2/buy/g886gd/r1wc27/rqhzg3"}
      target="_blank"
      className={`${""} w-auto rounded-lg h-auto text-black flex items-center justify-center `}
      id="WSOUpsellBuyButton"
    >
      <Image
        src={"/buyButtons/bundleUpsell.png"}
        width={500}
        height={500}
        className={`${""} w-full lg:w-[40vw]`}
      />
      <img
        src="https://warriorplus.com/o2/btn/fn100011001/g886gd/r1wc27/411410"
        className={`${""} hidden`}
      ></img>
    </Link>
  );
};

export default WSOUpsellBuyButton;
