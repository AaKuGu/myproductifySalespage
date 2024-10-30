import React from "react";

const MainFooterLinksComponent = ({ title, data }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md w-[90%] mx-auto gap-5 md:gap-7 flex flex-col items-center justify-center py-[10vw] lg:py-[5vw]">
      <h1 className="text-[6vw] lg:text-[3vw] font-bold text-gray-900 mb-4 text-center">
        {title}
      </h1>
      {data.map((section, index) => (
        <div key={index} className="mb-[4vw] lg:mb-[2vw]">
          <h2 className="text-[6vw] lg:text-[3vw] text-gray-800 mb-2">
            {section.title}
          </h2>
          <p className="text-[4vw] lg:text-[1.5vw] text-gray-600">
            {section.data}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainFooterLinksComponent;
