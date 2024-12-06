import AffiliateLinkButton from "@/components/jvpage/AffiliateLinkButton";
import Funnels from "@/components/jvpage/Funnels";
import GraphicsAndSwipes from "@/components/jvpage/GraphicsAndSwipes";
import Header from "@/components/jvpage/Header";
import Hero from "@/components/jvpage/Hero";
import JvSupport from "@/components/jvpage/JvSupport";
import Reciprocation from "@/components/jvpage/Reciprocation";
import WhyPromote from "@/components/jvpage/WhyPromote";
import WPSection from "@/components/jvpage/WPSection";
import NotReady from "@/components/NotReady";
import React from "react";

const page = () => {
  return (
    <div
      className={`${""} h-auto w-full flex items-center justify-start flex-col text-white bg-contain bg-center bg-no-repeat`}
      style={{
        background: 'url("/background/heroBg.png")',
        backgroundAttachment: "fixed", // Parallax effect
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section
        className={`${""} w-full  flex items-center justify-center flex-col font-bold relative`}
      >
        <NotReady />
        <Header />
        <Hero />
        <Reciprocation />
        <Funnels />
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
