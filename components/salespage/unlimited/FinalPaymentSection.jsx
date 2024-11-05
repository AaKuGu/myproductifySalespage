import React from "react";
import PriceRising from "../frontend/PriceRising";

const FinalPaymentSection = () => {
  return (
    <div
      className={`${""} min-h-screen w-full flex items-center justify-center flex-col`}
    >
      <div>W+ Button</div>
      <PriceRising isWhiteBg={true} />
    </div>
  );
};

export default FinalPaymentSection;
