import Header from "@/components/jvpage/Header";
import Hero from "@/components/jvpage/Hero";
import React from "react";

const page = () => {
  return (
    <div
      className={`${""} min-h-screen w-full flex items-center justify-start flex-col text-white bg-contain bg-center bg-no-repeat`}
      //   style={{
      //     background: "linear-gradient(to right,#000000, #1a0000)",
      //   }}
      style={{
        background: "url('/oto1/heroBg4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section
        className={`${""} w-[90%] 600:w-[70%] my-2 flex items-center justify-center flex-col font-bold`}
      >
        <Header />
        <Hero />
      </section>
    </div>
  );
};

export default page;
