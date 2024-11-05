import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import PurchaseCard from "./PurchaseCard";

const TotalValue = () => {
  return (
    <section className="flex items-center justify-center w-screen h-auto lg:min-h-screen gap-5 ">
      <div
        className="flex items-center justify-center w-[90%] flex-col md:w-[80%] gap-[5vw] lg:gap-[3vw] my-[10vw] lg:my-[5vw] py-[10vw] lg:py-[5vw] px-[1vw] border-blue-300 border-[2px] border-dashed"
        style={{ boxShadow: "0px 0px 55px 2px #cedcff" }}
      >
        <header className="flex flex-col items-center justify-center text-center gap-2 md:gap-4 lg:gap-6">
          <span className="text-[4vw] lg:text-[1.5vw] font-bold font-ubuntu">
            Here’s A Sneak-Peek Of The Value Of This
          </span>
          <Image
            src="/logo/nextGen.svg"
            width={200}
            height={50}
            alt="NextGen Logo"
            className="w-[20vw] "
          />
        </header>
        <div className=" md:bg-blue-200 rounded-lg px-2 md:px-5">
          <Image
            src="/logo/productImage2.png"
            width={500}
            height={500}
            alt="File Image"
            className="w-[90vw] md:w-[50vw]"
          />
        </div>
        <div className="flex flex-col gap-[5vw] lg:gap-[3vw] items-start justify-center ">
          {totalValuesData?.map((d, i) => (
            <div
              key={i}
              className="flex flex-row gap-[2vw] items-center justify-center "
            >
              <div className=" flex items-center justify-center">
                <IoCheckmarkDoneCircleOutline className="w-[5vw] h-[5vw] lg:w-[2vw] lg:h-[2vw] bg-green-600 text-white rounded-full" />
              </div>
              <span className="w-full text-start text-[4vw] lg:text-[1.5vw] font-notoSans font-bold">
                {d?.text}{" "}
                <span className="font-bold text-black">
                  (Value - ${d?.value})
                </span>
              </span>
            </div>
          ))}
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col gap-5 text-[4vw] lg:text-[1.5vw]`}
        >
          <div
            className={`${""} text-[5vw] lg:text-[3vw] text-red-600 font-bold flex flex-col gap-2 my-7 items-center justify-center`}
          >
            <span>That's TOTAL of $3976 in Value & </span>
            <span> All Exclusive Bonuses</span>
          </div>
          <div
            className={`${""} flex items-center justify-center flex-col gap-[3vw] lg:gap-[1vw]`}
          >
            <div>Today, You get this incredible product</div>
            <div>at less than 1/90th of it's worth</div>
            <div className={`${""} font-bold`}>
              Pay $17 once & profit forever
            </div>
          </div>
        </div>
        <PurchaseCard />
      </div>
    </section>
  );
};

export default TotalValue;

const totalValuesData = [
  {
    text: "Save on Freelancers for Course Creation",
    value: "$1,997",
  },
  {
    text: "Save Time with Ready-to-Use Templates",
    value: "$500",
  },
  {
    text: "Free Hosting For Your Course Product",
    value: "$97",
  },
  {
    text: "Email Autoresponder Connections",
    value: "$197",
  },
  {
    text: "Short Links and QR Code Generation",
    value: "$97",
  },
  {
    text: "Instant Access to Pre-Made Templates",
    value: "$891",
  },
  {
    text: "Built-In Support for Any Issues",
    value: "$197",
  },
];
