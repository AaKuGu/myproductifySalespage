import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { FaSkype } from "react-icons/fa";
import { FaFacebook, FaSkype } from "react-icons/fa6";

const JvSupport = () => {
  return (
    <div
      id="support"
      className={`${""} h-auto flex items-center justify-center flex-col w-[90%] lg:w-[70%] gap-[7vw] lg:gap-[3vw] py-[10vw] lg:py-[5vw]`}
    >
      <div className={`${""} text-[6vw] lg:text-[3.5vw] font-normal`}>
        Get In Touch If You <strong>Need Anything</strong>
      </div>
      <div
        className={`${""} flex items-start justify-center flex-col gap-[3vw] lg:gap-[2vw] text-[4vw] lg:text-[1.5vw] font-normal`}
      >
        <div>
          We're excited to have you aboard, and happy to help you make this a
          promotion you won't soon forget! You can contact us whenever you want.
          Just add any of us to Facebook and we'll help with any JV or affiliate
          enquiries
        </div>
        <div>
          Facebook details are below and we will respond as quickly as we can.{" "}
        </div>
        <div>Thank you and we appreciate your help and support!</div>
      </div>
      <div className={`${""}  flex items-center justify-center flex-col `}>
        <Image
          src="/logo/me.png"
          width={400}
          height={400}
          alt="Me"
          className="rounded-full lg:w-[30vw] w-[80vw]"
        />
        <div
          className={`${""} flex items-center justify-center gap-[5vw] lg:gap-[3vw] `}
        >
          {connect?.map((d, i) => {
            return (
              <Link
                href={d?.link}
                key={i}
                target="_blank"
                className={`${""} flex items-center justify-center gap-[5vw] lg:gap-[2vw] text-black bg-white px-[4vw] py-[1vw] lg:px-[2vw] lg:py-[0.5vw]  text-[6vw] lg:text-[3.5vw] rounded-lg italic`}
              >
                {d?.icon} {d?.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JvSupport;

const connect = [
  {
    label: "Skype",
    icon: <FaSkype />,
    link: "skype:live:.cid.752087389c5f038e?chat",
  },
  {
    label: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/profile.php?id=61559025118559",
  },
];
