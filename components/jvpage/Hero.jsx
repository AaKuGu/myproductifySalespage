"use client";

import React, { useEffect, useState } from "react";
import Features from "./Features";
import WhyPromote from "./WhyPromote";

const Hero = () => {
  const [isMounted, setIsMounted] = useState();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted)
    return (
      <div
        id="details"
        className={`${""} w-[90%]  flex items-center justify-start flex-col my-[10vw] lg:my-[5vw] lg:pt-[5vw] pt-[40vw]`}
      >
        <div
          className={`${""} text-[4vw] lg:text-[2vw] font-normal text-center mb-[5vw] lg:mb-[3vw] relative lg:w-[70%] `}
        >
          <div>
            <span>🚀 Promote: </span> **World's First App** that empowers you to
            effortlessly create, launch, and sell your very own product,
            unlocking your potential as a creator and transforming your ideas
            into reality!
          </div>
        </div>

        <div
          className={`${""} text-[5vw] lg:text-[2.5vw]  font-bold mb-[5vw] lg:mb-[3vw] relative text-center`}
        >
          Launch Goes Live{" "}
          <span className={`${""} underline`}>
            Saturday 7th December @ 10am EST
          </span>
        </div>

        <header
          className={`${""} text-[6vw] lg:text-[3.5vw] mb-[3vw] lg:mb-[1.2vw]`}
        >
          <span className={`${"font-bold "} text-[inherit]`}>
            My Productify
          </span>
        </header>
        <div className={`${""} mb-[5vw] lg:mb-[3vw] lg:w-[70%]`}>
          <p
            className={`${""} font-normal text-[4vw] lg:text-[2vw] leading-[10vw] lg:leading-[5vw] text-center`}
          >
            <i>
              <u
                className={`${"text-yellow-500 font-semibold text-[6vw] lg:text-[2.5vw]"}`}
              >
                My Productify
              </u>
            </i>{" "}
            transforms anyone into a{" "}
            <span
              className={`${""} font-bold text-blue-300 text-[5vw] lg:text-[3vw] underline`}
            >
              Product Creator
            </span>{" "}
            with its intuitive <i>"Drag-and-Drop"</i> builder and customizable
            <div
              className={`${""} rounded-full px-[1vw] py-[0.5vw]  text-white text-[5vw] lg:text-[3vw] mt-[5vw] lg:my-[3vw]`}
              style={{ background: "blue" }}
            >
              Course Pages & Email Optin Pages
            </div>
          </p>
        </div>
        <Features />
        <WhyPromote />
      </div>
    );
};

export default Hero;
