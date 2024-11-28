"use client";

import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <Script
        src="https://warriorplus.com/o2/disclaimer/g886gd"
        type="text/javascript"
        defer
        onLoad={() => {
          alert("Script loaded successfully");
        }}
        onError={(e) => {
          // The correct way to access the error message is via e.error.message
          alert(
            "Error loading the script: " + e.error?.message || "Unknown error"
          );
        }}
      />

      <a href="https://warriorplus.com/o2/buy/g886gd/r1wc27/rqhzg3">
        <img src="https://warriorplus.com/o2/btn/fn100011001/g886gd/r1wc27/411410" />
      </a>
    </div>
  );
};

export default page;
