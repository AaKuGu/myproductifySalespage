import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto  bg-black text-white">
      <div className=" flex flex-col items-center justify-center w-[95%] 400:w-[90%] my-[10vw] lg:my-[5vw] gap-5 ">
        <div className="header-text-[4vw] lg:text-[1.5vw]]">
          <Image
            src="/logo/myProductifyLogo.png"
            height={100}
            width={400}
            alt="website logo"
            className="w-[50vw] lg:w-[25vw] "
          />
        </div>
        <div className="font-bold text-[4vw] lg:text-[1.5vw] text-center">
          My Productify 2024 – Copyright © All Rights Reserved
        </div>
        <div className="my-5 text-center text-[4vw] lg:text-[1.5vw] px-4 lg:px-16">
          Earnings Disclaimer: We strive to provide an accurate representation
          of our product and its potential benefits. Any claims regarding actual
          earnings or results can be substantiated upon request. The
          testimonials and examples shared reflect exceptional outcomes and may
          not be typical for the average user. They are not meant to guarantee
          that anyone will achieve the same or similar results. Each person’s
          success is influenced by their unique background, commitment,
          enthusiasm, and motivation. As with any business venture, there is a
          risk of financial loss, and we cannot guarantee that you will earn any
          income.
        </div>
        <div className="flex gap-[4vw] lg:gap-[2vw] items-center justify-center flex-wrap">
          {links?.map((d, i) => (
            <Link
              target="_blank"
              href={d?.link}
              key={i}
              className="underline text-[4vw] lg:text-[1.5vw]"
            >
              {d?.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;

const links = [
  {
    label: "Terms And Conditions",
    link: "/impts/termsAndConditions",
  },
  {
    label: "Privacy Policy",
    link: "/impts/privacyPolicy",
  },
  {
    label: "Earning Disclaimer",
    link: "/impts/earningsDisclaimer",
  },
  {
    label: "Cookies Policy",
    link: "/impts/cookiePolicy",
  },
  {
    label: "Affiliate Disclaimer",
    link: "/impts/affiliateDisclosure",
  },
];
