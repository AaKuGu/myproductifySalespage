import React from "react";
import SectionOne from "./SectionOne";
import LetsDigIn from "./LetsDigIn";
import UpgradeDetails from "./UpgradeDetails";
import { upgradesData } from "./constant";
import OneByOne from "./OneByOne";
import CoupleOfOptions from "./CoupleOfOptions";
import IfBoughtOneByOne from "./IfBoughtOneByOne";
import MoneyBackGuarantee from "../oto2/MoneyBackGuarantee";
import FewLeft from "./FewLeft";
import PriceRising from "./PriceRising";
import NoThanks from "./NoThanks";
import FinalChance from "./FinalChance";
import FinalTwoButtons from "./FinalTwoButtons";
import MainFooter from "../frontend/MainFooter";

const Oto1 = () => {
  return (
    <div
      className={`${""} w-full min-h-screen flex items-center justify-center flex-col text-white gap-5`}
      style={{
        background: "linear-gradient(to right,#000033, #330033)",
      }}
    >
      <div
        className={`${""} flex items-center justify-center w-full h-auto bg-yellow-800`}
      >
        <div
          className={`${""} w-[95%] md:w-[90%] text-center  text-white font-bold text-lg md:text-xl lg:text-2xl py-3`}
        >
          Your Order Is Not Complete - Don't Close This Page
        </div>
      </div>

      <SectionOne />
      <LetsDigIn />
      {upgradesData?.map((d, i) => {
        return (
          <UpgradeDetails
            upgradeNumber={i + 1}
            title={d?.title}
            titleValue={d?.titleValue}
            subTitle={d?.subTitle}
            image={d?.image}
            version={d?.version}
            data={d?.data}
            key={i}
          />
        );
      })}
      <OneByOne />
      <hr className={`${""} w-full h-[3px] bg-white text-white`} />
      <CoupleOfOptions />
      <MoneyBackGuarantee />
      <FewLeft />
      <PriceRising />
      <NoThanks />
      <FinalChance />
      <FinalTwoButtons />
      <MainFooter />
    </div>
  );
};

export default Oto1;
