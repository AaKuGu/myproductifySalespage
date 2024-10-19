import Image from "next/image";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="flex items-start justify-center min-h-screen p-4 bg-gradient-to-br from-gray-200 to-gray-400">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <Image
          width={300}
          height={300}
          src="logo/me2.png" // Replace with your photo URL
          alt="Aadarsh Gupta"
          className="w-40 h-40 rounded-full border-4 border-indigo-500 mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Aadarsh Gupta</h1>
        <p className="text-center text-[16px] md:text-lg text-gray-600 mb-4">
          Thank you for your purchase! Please check your mailing account using
          which you made the purchase. You should have received your credentials
          from our official email:
          <strong> aadarsh@aigodam.com</strong>
        </p>
        <p className="text-center text-lg text-gray-600 mb-4">
          For any queries, reach out to us at{" "}
          <a
            href="mailto:aadarsh@aigodam.com"
            className="text-indigo-500 underline"
          >
            aadarsh@aigodam.com
          </a>
          .
        </p>
        <p className="text-center text-lg text-gray-600">
          Visit our website:{" "}
          <a
            href="https://www.aigodam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 underline"
          >
            www.aigodam.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
