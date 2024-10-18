import React from "react";

const Hero = () => {
  return (
    <div
      className={`${""} h-screen w-full flex items-center justify-center `}
      //   style={{ background: "url('/oto1/smallBg.png')" }}
    >
      <header
        className={`${""} flex items-center justify-center flex-col gap-[2vw]`}
      >
        <div className={`${''} text-yellow-400 text-[5vw]`}>Exclusive Product : </div>
      </header>
    </div>
  );
};

export default Hero;
