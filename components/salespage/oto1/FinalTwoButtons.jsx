import React from "react";
import AboutMe from "../frontend/AboutMe";
import Image from "next/image";

const FinalTwoButtons = () => {
  return (
    <div
      className={`${""} min-h-screen w-full flex items-center justify-center  text-black flex-col  `}
    >
      <div
        className={`${""}  flex items-center justify-between px-5 flex-col w-full`}
      >
        <Image
          src="/oto1/ActNow.png"
          width={500}
          height={300}
          className={`${""} w-full h-auto md:w-[500px] md:h-[300px]`}
        />
        <div
          className={`${""} w-full flex items-center justify-center gap-10 flex-col md:flex-row `}
        >
          {buttons?.map((d, i) => {
            return (
              <button
                className={`${
                  d?.color == "green" ? "from-[#600000]" : "from-[#600033]"
                } bg-gradient-to-r to-[#000033] flex items-center justify-center flex-col gap-3 text-white font-bold px-5 py-4 rounded-lg text-[22px]`}
              >
                <div>{d?.label?.title}</div>
                <div>{d?.label?.subTitle}</div>
              </button>
            );
          })}
        </div>
      </div>
      <div
        className={`${""}  flex items-center justify-center flex-col gap-10 my-10 md:my-20 bg-white`}
      >
        <AboutMe hideText={true} />
      </div>
    </div>
  );
};

export default FinalTwoButtons;

const buttons = [
  {
    label: {
      title: "Yes Give Me 'Bundle Upgrade'",
      subTitle: "Yes Help Me Skip All The Guesswork",
    },
    link: "",
    color: "green",
  },
  {
    label: {
      title: "No Thanks",
      subTitle: "NO I Dont Want Any Work Easy Money",
    },
    link: "",
    color: "red",
  },
];
