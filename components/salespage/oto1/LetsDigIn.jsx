import React from "react";

const LetsDigIn = () => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full h-auto `}
      style={{ backgroundColor: "#330080" }}
    >
      <section
        className={`${""} flex items-center justify-center w-[90%]  h-auto text-[20px] 500:text-[30px] md:text-[40px] font-extrabold flex-col text-white gap-5 mt-10 mb-20 text-center`}
      >
        <div>Here's Whats Included With</div>
        <div
          className={`${""} text-[20px] w-[95%] 400:text-[25px] 600:text-[30px] md:text-[40px] md:w-full`}
        >
          My Productify Bundle Upgrade
        </div>
        <div
          className={`${""} rounded-full bg-white text-black px-5 text-[25px] my-5`}
        >
          Let's Dig In
        </div>
      </section>
    </div>
  );
};

export default LetsDigIn;
