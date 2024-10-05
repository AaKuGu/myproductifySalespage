"use client";

// components/ScrollButtons.js
import React from "react";
import { WiDirectionUp } from "react-icons/wi";

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
      className={`${""} text-white text-lg`}
    >
      <button
        onClick={scrollToTop}
        style={{
          display: "block",
          marginBottom: "10px",
        //   backgroundColor: "blue",
        }}
        className={`${""} p-3 rounded-full bg-blue-900`}
      >
        <WiDirectionUp />
      </button>
      <button
        onClick={scrollToBottom}
        style={{ display: "block", backgroundColor: "green" }}
        className={`${""} rotate-180 p-3 rounded-full`}
      >
        <WiDirectionUp />
      </button>
    </div>
  );
};

export default ScrollButtons;
