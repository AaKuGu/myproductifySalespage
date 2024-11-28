import Image from "next/image";
import React from "react";

const WSOBuyJButton = () => {
  return (
    <div id="wsoBuyButton" className={`${""} w-[40%] bg-red-500`}>
      <a
        href="https://warriorplus.com/o2/buy/g886gd/zjd7fx/pqgrbs"
        className={`${""} w-full h-full`}
      >
        <Image
          src="/buyButtons/frontend.png"
          alt="Buy Now Button"
          width={485} // You can adjust this width
          height={244} // Adjust the height as needed
          layout="intrinsic" // or "responsive" for a flexible layout
          className={`${""} w-full`}
        />
      </a>
    </div>
  );
};

export default WSOBuyJButton;
