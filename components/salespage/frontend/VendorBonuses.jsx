import Image from "next/image";
import React from "react";

const VendorBonuses = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-20 pt-20">
      <div className="flex flex-col items-center justify-center gap-5 text-center px-4 md:px-8 lg:px-16">
        <header className="font-bold text-3xl md:text-4xl lg:text-5xl font-kaushanScript text-red-500">
          Here are Additional Bonuses
        </header>
        <header className="text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat">
          To Supercharge Your Profits From Day#1!
        </header>
        <span className="text-lg md:text-xl lg:text-2xl font-notoSans">
          Act Now To Get{" "}
          <span className="font-raleway text-2xl md:text-3xl lg:text-4xl">
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
      className={`w-full h-auto flex items-center justify-center flex-col md:flex-row  shadow-lg rounded-lg p-3 md:p-5 bg-blue-100`}
    >
      <Image
        src={image}
        width={500}
        height={500}
        className="w-full "
        alt={`Bonus ${i}`}
      />
      <div className="flex flex-col items-start justify-center gap-5 text-center md:text-left">
        <div className="text-2xl md:text-3xl lg:text-4xl text-red-500 font-openSans font-extrabold">
          Bonus {i + 1}
        </div>
        <div className="font-bold text-[22px] lg:text-[26px] font-raleway">
          {title}
        </div>
        <div className="text-[18px] md:text-[16px] lg:text-[18px] font-bold text-gray-600">{desc}</div>
      </div>
    </div>
  );
};

const bonusesData = [
  {
    image: "/logo/image3Trans.png",
    title: "Reseller To 50 Done-For-You Online Courses (WORTH $297)",
    desc: "SiteCoursePro App basically helps you take advantage of using 185,000+ Online Courses from others to make affiliate commissions. Here we give you 50 Done-For-You Online Courses With Reseller License So you can instantly add to your SiteCoursePro Site To Resell and Keep 100% Profits Per Sale",
  },
  {
    image: "/logo/image3Trans.png",
    title: "Reseller To 50 Done-For-You Online Courses (WORTH $297)",
    desc: "SiteCoursePro App basically helps you take advantage of using 185,000+ Online Courses from others to make affiliate commissions. Here we give you 50 Done-For-You Online Courses With Reseller License So you can instantly add to your SiteCoursePro Site To Resell and Keep 100% Profits Per Sale",
  },
  {
    image: "/logo/image3Trans.png",
    title: "Reseller To 50 Done-For-You Online Courses (WORTH $297)",
    desc: "SiteCoursePro App basically helps you take advantage of using 185,000+ Online Courses from others to make affiliate commissions. Here we give you 50 Done-For-You Online Courses With Reseller License So you can instantly add to your SiteCoursePro Site To Resell and Keep 100% Profits Per Sale",
  },
  {
    image: "/logo/image3Trans.png",
    title: "Reseller To 50 Done-For-You Online Courses (WORTH $297)",
    desc: "SiteCoursePro App basically helps you take advantage of using 185,000+ Online Courses from others to make affiliate commissions. Here we give you 50 Done-For-You Online Courses With Reseller License So you can instantly add to your SiteCoursePro Site To Resell and Keep 100% Profits Per Sale",
  },
];
