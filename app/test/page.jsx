import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-8 bg-gray-100 min-h-screen">
      {/* Div with ring */}
      <div className="ring-2 ring-blue-500 ring-inset transition-transform transform hover:scale-105 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold">Div with Ring</h2>
        <p>This div has a blue ring inset and scales on hover!</p>
      </div>

      {/* Div with border */}
      <div className="border-2 border-green-500 transition-transform transform hover:scale-105 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold">Div with Border</h2>
        <p>This div has a green border and scales on hover!</p>
      </div>

      {/* Div with shadow and ring */}
      <div className="ring-2 ring-red-500 p-6 bg-white shadow-2xl rounded-lg hover:ring-4 transition-all duration-300 ease-in-out">
        <h2 className="text-xl font-semibold">Div with Shadow and Ring</h2>
        <p>This div has a shadow and increases ring size on hover!</p>
      </div>

      {/* Div with only shadow */}
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Div with Shadow Only</h2>
        <p>This div has no ring or border, just a shadow.</p>
      </div>
    </div>
  );
};

export default Page;
