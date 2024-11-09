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
        className="flex items-center justify-center w-[90%] flex-col lg:w-[70%] gap-[5vw] lg:gap-[2.5vw] my-[10vw] lg:my-[5vw] p-[2vw] lg:p-[1vw] border-blue-300 border-[2px] border-dashed"
        style={{ boxShadow: "0px 0px 55px 2px #cedcff" }}
      >
        <header className="flex flex-col items-center justify-center text-center gap-2 lg:gap-6">
          <span className="text-[5vw] lg:text-[2.5vw]  font-bold font-ubuntu">
            Here’s A Sneak-Peek Of The Value Of This
          </span>
          <Image
            src="/logo/nextGen.svg"
            width={200}
            height={50}
            alt="NextGen Logo"
            className={`${''} w-full lg:w-[40vw]`}
          />
        </header>

        <div className="flex flex-col gap-[5vw] lg:gap-[2.5vw] items-start justify-center my-5 ">
          {totalValuesData?.map((d, i) => (
            <div
              key={i}
              className="flex flex-row gap-5 items-center justify-center"
            >
              <div className="text-[4vw] lg:text-[2vw] flex items-center justify-center">
                <IoCheckmarkDoneCircleOutline className="bg-green-600 text-white rounded-full" />
              </div>
              <span className="w-full text-start text-[3.5vw] lg:text-[1.5vw]  font-bold">
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
            className={`${""}text-[5vw] lg:text-[2.5vw]  text-red-600 font-bold font-oswald`}
          >
            That's TOTAL of ${totalValue} in Value
          </div>
        </div>
        <div className=" lg:bg-blue-200 rounded-lg px-2 lg:px-5 mt-5 w-full">
          <Image
            src="/logo/banner2.png"
            width={1300}
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
    text: "Watermark Removal for a Professional Look",
    value: "$150", // Value representing the potential cost of watermark removal services
  },
  {
    text: "Custom Domain Setup for Branding",
    value: "$100", // Estimated value for custom domain registration
  },
  {
    text: "Unlock Creation of 50 Courses",
    value: "$1,000", // Value representing the potential cost of creating multiple courses
  },
  {
    text: "1500 Additional Monthly API Calls",
    value: "$300", // Value representing the potential cost of extra API calls
  },
  {
    text: "Enhanced User Experience without Branding",
    value: "$200", // Value for the improved user experience
  },
  {
    text: "Priority Support for Course Creators",
    value: "$250", // Value for premium support services
  },
  {
    text: "Exclusive Access to New Features",
    value: "$300", // Value for early access to new features and tools
  },
];
