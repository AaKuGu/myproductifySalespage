"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdAdsClick } from "react-icons/md";
import PriceRising from "../salespage/frontend/PriceRising";
import JvUpdatesSignUp from "./JvUpdatesSignUp";
import AffiliateLinkButton from "./AffiliateLinkButton";

const WPSection = () => {
  const targetDate = new Date("2025-01-05T11:00:00-05:00");
  // const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showJvUpdatesSignupPageModel, setshowJvUpdatesSignupPageModel] =
    useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      const totalSeconds = Math.floor(distance / 1000);

      if (totalSeconds < 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  const totalSeconds = Math.floor((targetDate - new Date()) / 1000);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (isMounted)
  return (
    <div
      className={`h-auto bg-black flex items-center justify-center flex-col relative w-full`}
      style={{
        background: 'url("/background/two.png")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {showJvUpdatesSignupPageModel && (
        <>
          <div className="absolute w-full h-full flex items-center justify-center bg-black opacity-70 z-[50]"></div>
          <div className="flex items-center justify-center h-full absolute inset-0 z-[51] w-full">
            <JvUpdatesSignUp
              onClose={() => setshowJvUpdatesSignupPageModel(false)}
            />
          </div>
        </>
      )}

      <div
        className={`min-h-auto my-[5vw] lg:my-[2.5vw] flex items-center justify-center flex-col gap-[10vw] lg:gap-[5vw]`}
      >
        <Image
          src="/logo/warrior-plus.png"
          width={400}
          height={200}
          className={`w-full lg:w-[30vw]`}
        />
        <AffiliateLinkButton />

        <div
          className={`flex items-center justify-center gap-[10vw] lg:gap-[5vw] text-[5vw] lg:text-[2vw] flex-col lg:flex-row w-full`}
        >
          <div className={`flex items-center justify-center flex-col`}>
            <div>Going Live On</div>
            <div>Sunday 5th January</div>
            <div>@ 11am EST</div>
            <PriceRising deadlineTimeInSeconds={totalSeconds} />
          </div>
          <div
            aria-label="jvSubscribe"
            className={`flex flex-col items-center justify-center gap-[3vw] lg:gap-[1.5vw] relative p-[3vw]`}
          >
            <div className="absolute inset-0 bg-white backdrop-blur-md opacity-10 rounded-lg"></div>
            <div className="relative z-10">5 Day Launch</div>
            <div className="relative z-10">Sign Up For JV Updates:</div>
            <button
              onClick={() => setshowJvUpdatesSignupPageModel(true)}
              className={`relative z-10 px-[5vw] py-[3vw] lg:px-[2vw] lg:py-[0.7vw] bg-green-700 italic`}
            >
              Sign Up For JV Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WPSection;
