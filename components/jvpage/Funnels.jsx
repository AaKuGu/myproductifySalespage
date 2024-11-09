import Image from "next/image";
import React from "react";

const Funnels = () => {
  return (
    <div
      className={`${""} h-auto w-full flex items-center justify-center bg-white py-[10vw] lg:py-[5vw] flex-col text-black gap-[10vw] lg:gap-[5vw]`}
    >
      <h1 className={`${''} font-bold text-[4vw] lg:text-[2vw]`}>Earn 50% Comission Through Entire Funnel</h1>
      <Image src="/logo/myProductifyFunnel.png" width={1000} height={600} className={`${''} w-full lg:w-[70vw]`} />
    </div>
  );
};

export default Funnels;
