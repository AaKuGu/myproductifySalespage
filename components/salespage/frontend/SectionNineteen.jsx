import { sectionWidth } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const SectionNineteen = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className={`${sectionWidth} p-2 my-[5vw] `}>
        <Image
          src="/logo/bigImage.png"
          width={1000}
          height={600}
          // layout="fill"
          // objectFit="contain"
          alt="Logo"
          className={`${""} w-[90%] lg:w-[60vw]  border-[2px] border-blue-700 rounded-lg`}
        />
      </div>
    </div>
  );
};

export default SectionNineteen;
