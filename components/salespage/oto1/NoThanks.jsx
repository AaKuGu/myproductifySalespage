import Image from "next/image";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const NoThanks = () => {
  return (
    <div
      className={`${""} h-auto w-full flex items-center justify-center `}
    >
      <div
        className={`${""}  flex items-center justify-center w-[90%] flex-col lg:flex-row  gap-5 my-10 lg:my-20`}
      >
        <div
          className={`${""}  flex items-start justify-center flex-col gap-[3vw] lg:gap-[2vw] `}
        >
          {noThanksLines?.map((d, i) => {
            return (
              <div
                key={i}
                className={`${""} flex items-center justify-center gap-[1vw] lg:gap-[0.5vw]  text-[4vw] lg:text-[1.5vw]`}
              >
                <span>
                  <IoMdCloseCircle  className={`${''} text-[2vw]`} />
                </span>{" "}
                {d}
              </div>
            );
          })}
        </div>
        <Image
          src="/oto1/worriedMan.png"
          width={500}
          height={700}
          className={`${""} w-full h-full`}
        />
      </div>
    </div>
  );
};

export default NoThanks;

const noThanksLines = [
  "No thanks, I'm willing to go one by one and pay FULL price for all the My Productify upgrades.",
  "I'm not interested in instantly saving hundreds with the 'Complete Bundle' offer.",
  "I'll start with just the My Productify base software and then spend time evaluating each and every upgrade to decide which ones will make my course business grow faster.",
  "I understand this is a special, discounted price that's extremely limited, and if I close this page, I may miss out forever.",
  "I'm okay with paying much more for all the upgrades separately, even though I could save significantly with this one-time offer.",
];
