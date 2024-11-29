import React from "react";
import PriceRising from "../frontend/PriceRising";
import WSODownsellBuyButton from "../oto1/WSODownsellBuyButton";
import WSOUpsellBuyButton from "../oto1/WSOBuyButton";

const FinalPaymentSection = ({ downsellComp }) => {
  return (
    <div
      className={`${""} min-h-screen w-full flex items-center justify-center flex-col`}
    >
      {/* <a href="https://warriorplus.com/o2/buy/g886gd/vl8vhr/f9988s"><img src="https://warriorplus.com/o2/btn/fn100011011/g886gd/vl8vhr/414103"></a> */}
      {/* https://warriorplus.com/o/nothanks/vl8vhr */}

      {/* <a href="https://warriorplus.com/o2/buy/g886gd/vb0pqq/wk196f"><img src="https://warriorplus.com/o2/btn/fn100011011/g886gd/vb0pqq/414105"></a> */}
      
      <PriceRising isWhiteBg={true} />
    </div>
  );
};

export default FinalPaymentSection;
