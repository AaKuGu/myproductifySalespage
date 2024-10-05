import Image from "next/image";
import React from "react";

const MoneyBackGuarantee = () => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full h-auto`}
      style={{ background: "url('/background/bg1.png')" }}
    >
      <div
        className={`${""} w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] flex items-center justify-center flex-col gap-10 my-10`}
      >
        <header
          className={`${""} flex flex-col items-center justify-center gap-5 font-notoSans`}
        >
          <div
            className={`${""} text-[18px] sm:text-[23px] md:text-[26px] lg:text-[29px] xl:text-[35px]`}
          >
            And Don't Forget
          </div>
          <div
            className={`${""} flex items-center justify-center flex-col font-bold text-[18px] sm:text-[23px] md:text-[26px] lg:text-[29px] xl:text-[35px]`}
          >
            <div>You Are Fully Protected With Our</div>
            <div>30 Days Money Back Guarantee</div>
          </div>
        </header>
        <div
          className={`${""} flex items-center justify-center gap-10 flex-col md:flex-row border-[5px] border-yellow-600 rounded-xl py-10 px-5 bg-yellow-100`}
        >
          <div
            className={`${""} flex items-center justify-center w-full md:w-[40%] lg:w-[30%] `}
          >
            <Image
              src={
                "https://cdn.pixabay.com/photo/2016/10/26/15/08/seal-1771694_1280.png"
              }
              width={300}
              height={300}
            />
          </div>
          <div
            className={`${""} w-full flex items-start justify-center flex-col gap-7 `}
          >
            {refundPolicyPoints?.map((d, i) => {
              return (
                <div
                  key={i}
                  className={`${""} text-[16px] 400:text-[18px] font-bold`}
                >
                  {d}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;

const refundPolicyPoints = [
  "No tricks, no scams – just straight-forward, honest marketing.",
  "I believe in honest customers who get real results.",
  "If you upgrade and, within 14 days, feel like it’s not for you for ANY reason, I’ve got you covered with a full refund.",
  "Your peace of mind is my priority, so you can try it without any risk.",
  "This is your chance to invest in yourself and get those insane results with ease.",
  "Let’s attract high-paying clients and see your success skyrocket!",
];
