import React from "react";

const OrderNotComplete = () => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full h-auto bg-yellow-800`}
    >
      <div
        className={`${""} w-[95%] md:w-[90%] text-center  text-white font-bold text-[4.5vw] lg:text-[2vw] py-[2vw] lg:py-[1vw] `}
      >
        Your Order Is Not Complete - Don't Close This Page
      </div>
    </div>
  );
};

export default OrderNotComplete;
