import Image from "next/image";
import React from "react";

const FewLeft = () => {
  return (
    <div
      className={`${""} flex items-center justify-center w-full min-h-screen`}
    >
      <div
        className={`${""} flex items-center justify-center w-[90%] md:w-[90%] flex-col my-10 `}
      >
        <div
          className={`${""} text-[22px] 500:text-[30px] font-bold font-ptSans flex flex-col items-center justify-center my-5`}
        >
          <div>We Are Limiting THIS Offer To</div>
          <div>50 Spots Available ONLY!</div>
        </div>
        <div
          className={`${""} text-[35px] font-bold font-ptSans text-red-600 my-5`}
        >
          34 Taken (16 left)
        </div>
        <div className={`${""} text-[22px] 500:text-2xl my-2`}>
          Last Updated : 2 minutes ago
        </div>
        <div
          className={`${""} w-full sm:w-[400px] md:w-[500px] h-[40px] bg-black rounded-lg `}
        >
          <div
            className={`${""} bg-red-800 w-[80%] h-full rounded-lg flex items-center justify-center font-bold text-[12px] 400:text-sm text-white`}
          >
            34/50 Sold Already Hurry Act Now
          </div>
        </div>
        <div
          className={`${""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 w-full`}
        >
          {resellerPurchaseCards?.map((d, i) => {
            return (
              <div
                className={`${""} w-full md:w-auto flex flex-col items-center justify-center gap-5 border-[2px] border-dotted p-2 border-gray-600`}
              >
                <Image
                  src={d?.image}
                  width={300}
                  height={400}
                  className={`${""} w-full`}
                />
                <div
                  className={`${""} w-full font-bold lg:text-[22px] xl:text-[30px] text-[30px] text-center`}
                >
                  {d?.desc}
                </div>
                <div
                  className={`${""} w-full h-[200px] md:w-[300px] md:h-[200px] bg-gray-100 `}
                >
                  Button Link
                </div>
              </div>
            );
          })}
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
