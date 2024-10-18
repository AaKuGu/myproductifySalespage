import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import PurchaseCard from "./PurchaseCard";

const TotalValue = () => {
  return (
    <section className="flex items-center justify-center w-screen h-auto lg:min-h-screen gap-5 ">
      <div
        className="flex items-center justify-center w-[90%] flex-col md:w-[80%] gap-5 my-10 py-10 px-2 border-blue-300 border-[2px] border-dashed"
        style={{ boxShadow: "0px 0px 55px 2px #cedcff" }}
      >
        <header className="flex flex-col items-center justify-center text-center gap-2 md:gap-4 lg:gap-6">
          <span className="text-lg md:text-xl lg:text-2xl font-bold font-ubuntu">
            Here’s A Sneak-Peek Of The Value Of This
          </span>
          <Image
            src="/logo/nextGen.svg"
            width={200}
            height={50}
            alt="NextGen Logo"
          />
        </header>
        <div className=" md:bg-blue-200 rounded-lg px-2 md:px-5">
          <Image
            src="/logo/file2.png"
            width={500}
            height={500}
            alt="File Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-5 lg:gap-7 items-start justify-center ">
          {totalValuesData?.map((d, i) => (
            <div
              key={i}
              className="flex flex-row gap-5 items-center justify-center"
            >
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <IoCheckmarkDoneCircleOutline className="bg-green-600 text-white rounded-full" />
              </div>
              <span className="w-full text-start text-base md:text-lg lg:text-xl font-notoSans font-bold">
                {d?.text}{" "}
                <span className="font-bold text-black">
                  (Value - ${d?.value})
                </span>
              </span>
            </div>
          ))}
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col gap-5 text-[16px] md:text-[18px] lg:text-[20px]`}
        >
          <div
            className={`${""} text-[22px] md:text-[26px] lg:text-[30px] text-red-600 font-bold flex flex-col gap-2 my-7 items-center justify-center`}
          >
            <span>That's TOTAL of $3976 in Value & </span>
            <span> All Exclusive Bonuses</span>
          </div>
          <div>Today, You get this incredible product</div>
          <div>at less than 1/90th of it's worth</div>
          <div className={`${""} font-bold`}>Pay $17 once & profit forever</div>
          <div className={`${""} font-bold`}>
            When you buy My Productify TODAY
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
