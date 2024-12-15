import React from "react";
import Features from "./Features";
import WhyPromote from "./WhyPromote";

const Hero = () => {

  return (
    <div
      id="details"
      className={`${""} w-[90%]  flex items-center justify-start flex-col my-[10vw] lg:my-[5vw] lg:pt-[5vw] pt-[40vw]`}
    >
      <div
        className={`${""} text-[4vw] lg:text-[2vw] font-normal text-center mb-[5vw] lg:mb-[3vw] relative lg:w-[70%] `}
      >
        <div>
          <span>🚀 Promote: </span> **World's First App** that empowers you to
          effortlessly create, launch, and sell your very own product, unlocking
          your potential as a creator and transforming your ideas into reality!
        </div>
      </div>

      <div
        className={`${""} text-[5vw] lg:text-[2.5vw]  font-bold mb-[5vw] lg:mb-[3vw] relative text-center`}
      >
        Launch Goes Live{" "}
        <span className={`${""} underline`}>Sunday 5th January @ 11am EST</span>
      </div>

      <header
        className={`${""} text-[6vw] lg:text-[3.5vw] mb-[3vw] lg:mb-[1.2vw]`}
      >
        <span className={`${"font-bold "} text-[inherit] italic font-serif`}>
          My Productify
        </span>
      </header>
      <div className={`${""} mb-[5vw] lg:mb-[3vw] lg:w-[90%] `}>
        <p
          className={`${""} text-[2.8vw] lg:text-[2.3vw] leading-[10vw] lg:leading-[5vw] text-center font-extrabold  items-center justify-center flex-col hidden lg:flex `}
        >
          <div> A Tool which transforms AnyOne into</div>
          <div>
            {" "}
            <span className={`${""} text-orange-500 text-[2.5vw] italic`}>
              Product-Creator&nbsp;&nbsp;
            </span>
            with its intuative&nbsp;
            <span className={`${""} text-blue-500 text-[2.5vw] italic`}>
              Drag-and-Drop
            </span>{" "}
          </div>
          <div>
            {" "}
            builder and customizable{" "}
            <span className={`${""} text-green-500 text-[2.5vw] italic`}>
              Course Pages & Email Optin Pages
            </span>{" "}
          </div>
        </p>
        <p
          className={`${""} text-[4vw] lg:text-[2.3vw] leading-[10vw] lg:leading-[5vw] text-center font-extrabold  items-center justify-center flex-col flex lg:hidden `}
        >
          <div>A Tool which transforms AnyOne into </div>
          <div>
            {" "}
            <span className={`${""} text-orange-500  italic`}>
              Product-Creator&nbsp;&nbsp;
            </span>
            with its intuative&nbsp;&nbsp;
          </div>
          <div>
            {" "}
            <span
              className={`${""} text-orange-500 text-[4.5vw] lg:text-[2.5vw] italic`}
            >
              <span className={`${""} text-blue-500  italic`}>
                Drag-and-Drop
              </span>{" "}
              builder and customizable{" "}
              <span className={`${""} text-green-500  italic`}>
                Course Pages & Email Optin Pages
              </span>{" "}
            </span>
          </div>
        </p>
      </div>
      <Features />
      <WhyPromote />
    </div>
  );
};

export default Hero;
