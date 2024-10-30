import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="relative min-h-screen w-full flex ">
      <Image
        src="/logo/background2.png"
        layout="fill"
        objectFit="cover lg:object-none"
        // alt="Background"  
      />
      <div className="text-[6vw] z-10 text-black">hallo buddy</div>
    </div>
  );
};

export default Page;
