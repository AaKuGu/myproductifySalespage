import AffiliateLinkButton from "@/components/jvpage/AffiliateLinkButton";
import GraphicsAndSwipes from "@/components/jvpage/GraphicsAndSwipes";
import Header from "@/components/jvpage/Header";
import Hero from "@/components/jvpage/Hero";
import JvSupport from "@/components/jvpage/JvSupport";
import Reciprocation from "@/components/jvpage/Reciprocation";
import WhyPromote from "@/components/jvpage/WhyPromote";
import WPSection from "@/components/jvpage/WPSection";
import React from "react";

const page = () => {
  return (
    <div
      className={`${""} min-h-screen w-full flex items-center justify-start flex-col text-white bg-contain bg-center bg-no-repeat`}
      // style={{
      //   background: "linear-gradient(to right,#000000, #1a0000)",
      // }}
      style={{
        background: 'url("/background/heroBg.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section
        className={`${""} w-full  flex items-center justify-center flex-col font-bold`}
      >
        <Header />
        <Hero />
        <Reciprocation />
        <WPSection />
        <JvSupport />
        <div className={`${""} my-[5vw] lg:my-[3vw]`}>
          <AffiliateLinkButton />
        </div>
        <GraphicsAndSwipes />
      </section>
    </div>
  );
};

export default page;
