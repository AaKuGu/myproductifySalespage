import React from "react";

const OrderNotComplete = () => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full h-auto bg-yellow-800`}
    >
      <div
        className={`${""} w-[95%] md:w-[90%] text-center  text-white font-bold text-lg md:text-xl lg:text-2xl py-3`}
      >
        Your Order Is Not Complete - Don't Close This Page
      </div>
    </div>
  );
};

export default OrderNotComplete;
