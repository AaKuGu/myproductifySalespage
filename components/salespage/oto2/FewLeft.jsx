import Image from "next/image";
import React from "react";
import WSODownsellBuyButton from "../oto1/WSODownsellBuyButton";
import WSOUpsellBuyButton from "../oto1/WSOBuyButton";

const FewLeft = ({ downsellComp }) => {
  return (
    <div className={`${""} flex items-center justify-center w-full h-auto`}>
      <div
        className={`${""} flex items-center justify-center w-[90%] lg:w-[90%] flex-col my-[10vw] lg:my-[5vw] gap-[3.5vw] lg:gap-[2.5vw] `}
      >
        <div
          className={`${""} text-[5vw] lg:text-[3vw]
 font-bold font-ptSans flex flex-col items-center justify-center my-5`}
        >
          <div>We Are Limiting THIS Offer To</div>
          <div>50 Spots Available ONLY!</div>
        </div>
        <div
          className={`${""}text-[6vw] lg:text-[3.5vw]
 font-bold font-ptSans text-red-600 my-5`}
        >
          34 Taken (16 left)
        </div>
        <div
          className={`${""} text-[6vw] lg:text-[3.5vw]
 500:text-2xl my-2`}
        >
          Last Updated : 2 minutes ago
        </div>
        <div className={`${""} w-full lg:w-[90%] bg-black rounded-lg  `}>
          <div
            className={`${""} bg-red-800 w-[80%] h-full rounded-lg flex items-center justify-center font-bold text-[4vw] lg:text-[2.5vw]
 text-white py-[1vw] lg:py-[0.5vw]`}
          >
            34/50 Sold Already Hurry Act Now
          </div>
        </div>
        <div
          className={`${""} w-full h-auto flex items-center justify-center `}
        >
          {downsellComp ? (
            <WSODownsellBuyButton
              linkUrl="https://warriorplus.com/o2/buy/g886gd/z7k1n9/s9x5qn"
              imageLink="/buyButtons/resellerDownsell.png"
            >
              <img
                src="https://warriorplus.com/o2/btn/fn100011011/g886gd/z7k1n9/412817"
                className="hidden"
              />
            </WSODownsellBuyButton>
          ) : (
            <WSOUpsellBuyButton
              linkUrl="https://warriorplus.com/o2/buy/g886gd/cf8m83/zmk87k"
              imageLink="/buyButtons/resellerUpsell.png"
            >
              <img
                src="https://warriorplus.com/o2/btn/fn100011001/g886gd/cf8m83/411453"
                className="hidden"
              />
            </WSOUpsellBuyButton>
          )}
          {/* {resellerPurchaseCards?.map((d, i) => {
            return (
              <div
                className={`${""} w-full lg:w-auto flex flex-col items-center justify-center gap-5 border-[2px] border-dotted p-2 border-gray-600`}
              >
                <Image
                  src={d?.image}
                  width={300}
                  height={400}
                  className={`${""} w-full`}
                />
                <div
                  className={`${""} w-full font-bold text-[5vw] lg:text-[2vw] text-center`}
                >
                  {d?.desc}
                </div>
                <div
                  className={`${""} w-full h-[200px] lg:w-[300px] lg:h-[200px] bg-gray-100 `}
                >
                  Button Link
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default FewLeft;

const resellerPurchaseCards = [
  {
    image: "/logo/file2.png",
    desc: "20 Reseller License",
    buttonLink: "",
  },
  {
    image: "/logo/file2.png",
    desc: "100 Reseller License",
    buttonLink: "",
  },
  {
    image: "/logo/file2.png",
    desc: "200 Reseller License",
    buttonLink: "",
  },
];
