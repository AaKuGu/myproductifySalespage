import Image from "next/image";
import React from "react";

const SectionEleven = () => {
  return (
    <div
      className={`${""} w-full h-auto md:min-h-screen flex items-center justify-center`}
      style={{
        backgroundImage: "url('/logo/image3.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${""} flex flex-col-reverse sm:flex-row items-center justify-center w-[90%] sm:w-[95%] gap-10 sm:py-20  py-10 md:py-20`}
      >
        <div className={`${""} w-full  md:w-[50%]`}>
          <Image
            src="/logo/image7.png"
            width={200}
            height={400}
            className={`${""} w-[70%] `}
          />
        </div>

        <div
          className={`${""} flex flex-col gap-10 items-center justify-center text-white text-start w-full md:w-[50%] `}
        >
          <header
            className={`${""} font-extrabold text-[18px] sm:text-[22px] w-full mb-2 font-kaushanScript text-center sm:text-start`}
          >
            Instantly Dominate
          </header>
          <div className={`${""} text-[14px] sm:text-[18px] w-full text-start`}>
            The “Online Learning” market is HUGE…
          </div>
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                className={`${""} w-full text-start text-[14px] sm:text-[18px]`}
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
