import React from "react";

const LetsDigIn = () => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full h-auto `}
      style={{ backgroundColor: "#330080" }}
    >
      <section
        className={`${""} flex items-center justify-center w-[90%]  h-auto text-[6vw] lg:text-[3.5vw] font-extrabold flex-col text-white gap-5 my-[5vw] lg:my-[3vw] text-center`}
      >
        <div>Here's Whats Included With</div>
        <div
          className={`${""}  w-[95%] lg:w-full`}
        >
          My Productify Bundle Upgrade
        </div>
        <div
          className={`${""} rounded-full bg-white text-black px-[3vw] text-[6vw] my-5`}
        >
          Let's Dig In
        </div>
      </section>
    </div>
  );
};

export default LetsDigIn;
