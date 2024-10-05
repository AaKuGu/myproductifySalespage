import Image from "next/image";
import React from "react";

const CommonDesign = ({
  data,
  blackBgColor = false,
  flexReverse = false,
  children,
}) => {
  const { image, textData } = data;
  return (
    <div
      className={`${blackBgColor ? "bg-black" : "bg-white"} ${
        flexReverse ? "flex-row-reverse" : "flex-row"
      } flex items-center justify-center px-5 pt-10 gap-16  w-full min-h-screen `}
    >
      <div className={`${""} w-[40%]`}>
        <Image
          src={image}
          width={300}
          height={600}
          className={`${""} min-w-full`}
        />
      </div>
      <div
        className={`${
          blackBgColor ? "text-white" : "text-black"
        } flex flex-col items-start justify-center gap-10 w-[40%] `}
      >
        {children}
        <div
          className={`${""} flex flex-col items-start justify-center gap-10 text-xl`}
        >
          {textData?.map((d, i) => {
            return <div key={i}>{d}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CommonDesign;

export const data = [
  "Yup… ",
  "We spend zero time doing any kind of marketing or ads… ",
  "AI Beam do that for us on autopilot… ",
  "And send us hundreds of new sales and customers every single day… ",
];
