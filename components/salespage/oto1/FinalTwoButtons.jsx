"use client";

import React from "react";
import AboutMe from "../frontend/AboutMe";
import Image from "next/image";
import Link from "next/link";
import { handleSmoothScroll } from "@/utils/utils";

const FinalTwoButtons = ({ buttonsData, downsellComp }) => {
  return (
    <div
      className={`${""} h-auto w-full flex items-center justify-center  text-black flex-col  `}
    >
      <div
        className={`${""} flex items-center justify-between px-5 flex-col w-full`}
      >
        <Image
          src="/oto1/ActNow.png"
          width={500}
          height={300}
          className={`${""} w-full h-auto lg:w-[40vw]`}
        />
        <div
          className={`${""} w-full flex items-center justify-center gap-[5vw] lg:gap-[2.5vw] flex-col lg:flex-row text-white`}
        >
          {buttonsData?.map((d, i) => {
            return (
              <Link
                href={downsellComp ? d?.downsellLink : d?.upsellLink}
                target={i == 1 && "_blank"}
                onClick={(e) => {
                  i == 0 ? handleSmoothScroll(e) : null;
                }}
                className={`${
                  d?.color == "green" ? "from-[#600000]" : "from-[#600033]"
                } bg-gradient-to-r to-[#000033] flex items-center justify-center flex-col gap-3 text-[4vw] lg:text-[1.5vw] lg:p-[1vw] p-[2vw]`}
              >
                <div>{d?.label?.title}</div>
                <div>{d?.label?.subTitle}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={`${""}  flex items-center justify-center flex-col gap-10 my-10 lg:my-20 bg-white`}
      >
        <AboutMe hideText={true} />
      </div>
    </div>
  );
};

export default FinalTwoButtons;


