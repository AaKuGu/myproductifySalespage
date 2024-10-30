import { sectionWidth } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionNineteen = () => {
  return (
    <div className="w-full md:min-h-screen h-auto flex items-center justify-center">
      <div className={`${sectionWidth} p-2 my-[5vw] `}>
        <Image
          src="/logo/image21.webp"
          width={1250}
          height={800}
          // layout="fill"
          // objectFit="contain"
          alt="Logo"
          className={`${""} w-[90%] lg:w-[90vw]  border-[2px] border-blue-700 rounded-lg`}
        />
      </div>
    </div>
  );
};

export default SectionNineteen;
