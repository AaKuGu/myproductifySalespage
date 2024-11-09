import Image from "next/image";
import React from "react";

const   MoneyBackGuarantee = () => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full h-auto text-black`}
      style={{
        background: "url('/background/bg1.png')",
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${""} w-[90%]  lg:w-[80%]  flex items-center justify-center flex-col gap-[10vw] lg:gap-[5vw] my-[10vw] lg:my-[5vw]`}
      >
        <header
          className={`${""} flex flex-col items-center justify-center gap-5 font-notoSans`}
        >
          <div
            className={`${""} text-[6vw] lg:text-[3.5vw]
`}
          >
            And Don't Forget
          </div>
          <div
            className={`${""} flex items-center justify-center flex-col font-bold text-[4vw] lg:text-[1.5vw]`}
          >
            <div>You Are Fully Protected With Our</div>
            <div>30 Days Money Back Guarantee</div>
          </div>
        </header>
        <div
          className={`${""} flex items-center justify-center gap-10 flex-col lg:flex-row border-[5px] border-yellow-600 rounded-xl p-[5vw] lg:p-[2.5vw] bg-yellow-100`}
        >
          <div
            className={`${""} flex items-center justify-center w-full lg:w-[40%] `}
          >
            <Image
              src={
                "https://cdn.pixabay.com/photo/2016/10/26/15/08/seal-1771694_1280.png"
              }
              width={300}
              height={300}
              className={`${""} w-full lg:w-[30vw]`}
            />
          </div>
          <div
            className={`${""} w-full flex items-start justify-center flex-col gap-[3vw] lg:gap-[1.5vw] `}
          >
            {refundPolicyPoints?.map((d, i) => {
              return (
                <div
                  key={i}
                  className={`${""} text-[4vw] lg:text-[1.5vw] font-bold`}
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
  "If you upgrade and, within 30 days, feel like it’s not for you for ANY reason, I’ve got you covered with a full refund.",
  "Your peace of mind is my priority, so you can try it without any risk.",
  "This is your chance to invest in yourself and get those insane results with ease.",
  "Let’s attract high-paying clients and see your success skyrocket!",
];
