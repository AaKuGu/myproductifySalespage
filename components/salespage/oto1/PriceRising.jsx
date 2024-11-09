"use client";

import { useState, useEffect } from "react";

const PriceRising = ({ isWhiteBg = true }) => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

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

  return (
    <div
      className="flex flex-col items-center justify-center gap-[10vw] lg:gap-[5vw] lg:flex-col w-full h-auto"
      style={{
        backgroundColor: isWhiteBg ? "white" : "red",
        color: isWhiteBg ? "red" : "white",
      }}
    >
      <div
        className={`${""} flex flex-col items-center justify-center lg:flex-row gap-[10vw] lg:gap-[5vw] py-5 w-[90%] lg:w-[80%]`}
      >
        <h2 className={`${""} text-[5vw] lg:text-[2vw] font-bold`}>
          Hurry! Price rising in:
        </h2>
        <div
          className={`${
            isWhiteBg && "bg-red-100"
          } flex justify-center space-x-4 p-[2vw] lg:p-[1vw] rounded-lg text-[5vw] lg:text-[2vw] font-bold`}
        >
          <div className="text-center">
            <div>{days}</div>
            <div>days</div>
          </div>
          <span>:</span>
          <div className="text-center">
            <div>{hours}</div>
            <div>hours</div>
          </div>
          <span>:</span>
          <div className="text-center">
            <div>{minutes}</div>
            <div>minutes</div>
          </div>
          <span>:</span>
          <div className="text-center">
            <div>{seconds}</div>
            <div>seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRising;
