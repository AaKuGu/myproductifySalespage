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
        className="flex items-center justify-center w-[90%] flex-col md:w-[70%] gap-5 my-10 py-10 px-2 border-blue-300 border-[2px] border-dashed"
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

        <div className="flex flex-col gap-3 md:gap-5 lg:gap-7 items-start justify-center my-5">
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
            className={`${""} text-[22px] md:text-[26px] lg:text-[32px] xl:text-[48px] text-red-600 font-bold font-oswald`}
          >
            That's TOTAL of ${totalValue} in Value
          </div>
        </div>
        <div className=" md:bg-blue-200 rounded-lg px-2 md:px-5 mt-5">
          <Image
            src="/logo/file2.png"
            width={500}
            height={500}
            alt="File Image"
            className="w-full h-auto"
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
