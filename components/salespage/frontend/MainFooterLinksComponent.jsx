import React from "react";

const MainFooterLinksComponent = ({ title, data }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto gap-5 md:gap-7 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h1>
      {data.map((section, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {section.title}
          </h2>
          <p className="text-gray-600">{section.data}</p>
        </div>
      ))}
    </div>
  );
};

export default MainFooterLinksComponent;
