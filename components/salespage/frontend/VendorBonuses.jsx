import Image from "next/image";
import React from "react";

const VendorBonuses = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-20 pt-20">
      <div className="flex flex-col items-center justify-center gap-5 text-center px-4 md:px-8 lg:px-16">
        <header className="font-bold text-[6vw] lg:text-[3vw] font-kaushanScript text-red-500">
          Here are Additional Bonuses
        </header>
        <header className="text-[4.5vw] lg:text-[2vw] font-bold font-montserrat">
          To Supercharge Your Profits From Day#1!
        </header>
        <span className="text-[5vw] lg:text-[2vw] font-notoSans">
          Act Now To Get{" "}
          <span className="font-raleway text-[5vw] lg:text-[2vw]">
            $891 In Bonuses
          </span>
        </span>
      </div>
      <div className="w-[90%] md:w-[95%] flex items-center justify-center  flex-col gap-10">
        {bonusesData?.map((d, i) => (
          <BonusCard data={d} key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default VendorBonuses;

const BonusCard = ({ data, i }) => {
  const { image, title, desc } = data;
  return (
    <div
      className={`w-full h-auto flex items-center justify-center flex-col md:flex-row  shadow-lg rounded-lg p-3 md:p-5 bg-blue-50`}
    >
      <Image
        src={image}
        width={500}
        height={500}
        className="w-full "
        alt={`Bonus ${i}`}
      />
      <div className="flex flex-col items-start justify-center gap-5 text-center md:text-left">
        <div className="text-[6vw] lg:text-[3vw] text-red-500 font-openSans font-extrabold">
          Bonus {i + 1}
        </div>
        <div className="font-bold text-[4vw] lg:text-[1.5vw] font-raleway">
          {title}
        </div>
        <div className="text-[4vw] lg:text-[1.5vw] font-bold text-gray-600">
          {desc}
        </div>
      </div>
    </div>
  );
};

const bonusesData = [
  {
    image: "/logo/image3Trans.png",
    title: "Bonus 1: Advanced Editing Features",
    desc: "The first 50 buyers will unlock exclusive advanced editing features to enhance your projects. Don't miss out on this powerful tool!",
  },
  {
    image: "/logo/image3Trans.png",
    title: "Bonus 2: Watermark Removal",
    desc: "Get brand help by having our watermark removed! First 50 buyers only—stand out and showcase your work professionally!",
  },
  {
    image: "/logo/image3Trans.png",
    title: "Bonus 3: Extra Course Creation Limit",
    desc: "Secure your spot among the first 50 buyers and receive 20 more course creation slots. Expand your offerings and boost your income!",
  },
];
