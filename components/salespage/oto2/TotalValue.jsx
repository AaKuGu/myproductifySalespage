import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import PurchaseCard from "../frontend/PurchaseCard";

const TotalValue = () => {
  const totalValue = totalValuesData.reduce((acc, item) => {
    const numericValue = parseFloat(item.value.replace("$", ""));
    return acc + numericValue;
  }, 0);

  return (
    <section className="flex items-center justify-center w-screen h-auto lg:min-h-screen gap-5 ">
      <div
        className="flex items-center justify-center w-[90%] flex-col lg:w-[70%] gap-[7vw] lg:gap-[2.5vw] border-blue-300 border-[2px] border-dashed py-[10vw] lg:py-[5vw] my-[10vw] lg:my-[5vw]"
        style={{ boxShadow: "0px 0px 55px 2px #cedcff" }}
      >
        <header className="flex flex-col items-center justify-center text-center gap-2 lg:gap-4 lg:gap-6">
          <span className="text-[5vw] lg:text-[2.5vw] font-bold font-ubuntu">
            Here’s A Sneak-Peek Of The Value Of This
          </span>
          <Image
            src="/logo/nextGen.svg"
            width={200}
            height={50}
            alt="NextGen Logo"
            className={`${""} w-[70vw] lg:w-[50vw]`}
          />
        </header>

        <div className="flex flex-col gap-[2.5vw] lg:gap-[0.5vw] items-start justify-center my-5 p-[4vw] lg:p-[1.3vw]">
          {totalValuesData?.map((d, i) => (
            <div
              key={i}
              className="flex flex-row gap-5 items-center justify-center "
            >
              <div className="w-[5vw] h-[5vw] flex items-center justify-center">
                <IoCheckmarkDoneCircleOutline className="bg-green-600 text-white rounded-full text-[5vw] lg:text-[2.5vw]" />
              </div>
              <span className="w-full text-start  text-[4vw] lg:text-[1.5vw] font-notoSans font-bold">
                {d?.text}{" "}
                <span className="font-bold text-black">
                  (Value - ${d?.value})
                </span>
              </span>
            </div>
          ))}
        </div>
        <div
          className={`${""} flex items-center justify-center flex-col gap-5 text-[5vw] lg:text-[2.5vw]`}
        >
          <div
            className={`${""} text-[5vw] lg:text-[2.5vw] text-red-600 font-bold font-oswald`}
          >
            That's TOTAL of ${totalValue} in Value
          </div>
        </div>
        <div className=" lg:bg-blue-200 rounded-lg px-2 lg:px-5 mt-5">
          <Image
            src="/logo/banner1.png"
            width={1000}
            height={500}
            alt="File Image"
            className="w-full h-auto lg:w-[40vw] "
          />
        </div>
      </div>
    </section>
  );
};

export default TotalValue;

const totalValuesData = [
  {
    text: "Unlock 100% Commissions on Every Sale",
    value: "$997",
  },
  {
    text: "Access to Proven Reselling System",
    value: "$1,497",
  },
  {
    text: "Ready-to-Use Sales Funnels and Marketing Materials",
    value: "$500",
  },
  {
    text: "Free Hosting for Your Reselling Business",
    value: "$197",
  },
  {
    text: "Full Support and Training Resources",
    value: "$297",
  },
  {
    text: "Exclusive Access to Community of Resellers",
    value: "$197",
  },
  {
    text: "Lifetime Updates and Improvements",
    value: "$497",
  },
];
