import Image from "next/image";
import React from "react";

const SectionEleven = () => {
  return (
    <div
      className={`${""} w-full h-auto flex items-center justify-center`}
      style={{
        backgroundImage: "url('/logo/image3.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${""} flex flex-col-reverse lg:flex-row items-center justify-center w-[90%] sm:w-[95%] gap-[10vw] lg:gap-[5vw] py-[10vw] lg:py-[5vw]`}
      >
        <div className={`${""} w-full lg:w-[50%]`}>
          <Image
            src="/logo/girl1.png"
            width={500}
            height={650}
            className={`${""} w-full`}
          />
        </div>

        <div
          className={`${""} flex flex-col  items-center justify-between text-white text-start w-full lg:w-[50%] gap-[3vw] lg:gap-[1.4vw] `}
        >
          <header
            className={`${""} font-extrabold text-[6vw] lg:text-[2.5vw] w-full  font-kaushanScript text-center sm:text-start mb-[1vw] lg:mb-[3vw]`}
          >
            Instantly Dominate
          </header>
          <div
            className={`${""} text-[4vw] lg:text-[1.5vw] w-full text-start mb-[3.5vw] lg:mb-[2vw]`}
          >
            The “Online Learning” market is HUGE…
          </div>
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`${""} w-full text-start text-[4vw] lg:text-[1.5vw] mb-[3.5vw] lg:mb-[2vw]`}
              >
                {d}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionEleven;

const data = [
  "Create courses effortlessly with our intuitive software...",
  "Access a library of customizable course page templates...",
  "Set up email opt-in pages in minutes...",
  "Easily manage custom domain setups...",
  "Automate your marketing with integrated email autoresponder features...",
  "Generate short links and QR codes seamlessly for better engagement...",
];
