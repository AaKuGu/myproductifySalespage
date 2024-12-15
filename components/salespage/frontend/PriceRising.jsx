"use client";

import { useState, useEffect } from "react";

const PriceRising = ({ deadlineTimeInSeconds = 1800, isWhiteBg = false }) => {
  const [timeLeft, setTimeLeft] = useState(deadlineTimeInSeconds);

  useEffect(() => {
    setTimeLeft(deadlineTimeInSeconds); // Update timeLeft when deadlineTimeInSeconds changes
  }, [deadlineTimeInSeconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
      days: String(days).padStart(1, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(remainingSeconds).padStart(2, "0"),
    };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  const commonStyles = `rounded-full text-center bg-[#002966] border-[1vw] lg:border-[0.5vw] border-sky-400 w-[16vw] lg:w-[7vw] py-[2vw] lg:py-[1.3vw] font-normal`;
  const timeStyles = `font-bold text-[4vw] lg:text-[1.5vw]`;

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full h-auto bg-transparent">
      <div
        className={`${
          isWhiteBg ? "text-[#000080]" : "text-white"
        } flex flex-col items-center justify-center gap-[1vw] lg:gap-[1vw] py-[5vw] lg:py-[3vw] w-[90%] md:w-[95%] lg:w-[80%]`}
      >
        <h2 className="font-bold text-[5vw] lg:text-[2.5vw]">
          Count Down Timer For Launch
        </h2>
        <div className="bg-transparent flex justify-center space-x-4 mt-4 px-5 py-2 rounded-lg font-bold text-white gap-[2vw] lg:gap-[4vw] text-[3vw] lg:text-[1vw]">
          <div className={commonStyles}>
            <div className={timeStyles}>{days}</div>
            <div>days</div>
          </div>
          <div className={commonStyles}>
            <div className={timeStyles}>{hours}</div>
            <div>hours</div>
          </div>
          <div className={commonStyles}>
            <div className={timeStyles}>{minutes}</div>
            <div>minutes</div>
          </div>
          <div className={commonStyles}>
            <div className={timeStyles}>{seconds}</div>
            <div>seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRising;
