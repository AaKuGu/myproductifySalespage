import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto  bg-black text-white">
      <div className=" flex flex-col items-center justify-center w-[95%] 400:w-[90%] my-10 gap-5 ">
        <Image
          src="/logo/logoTransDark.png"
          width={300}
          height={100}
          alt="Logo"
        />
        <div className="font-bold text-lg md:text-xl lg:text-2xl text-center">
          My Productify 2024 – Copyright © All Rights Reserved
        </div>
        <div className="my-5 text-center text-[14px] 400:text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-16">
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
        <div className="flex gap-2 items-center justify-center flex-wrap">
          {links?.map((d, i) => (
            <Link
              target="_blank"
              href={d?.link}
              key={i}
              className="underline text-sm md:text-base lg:text-lg"
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
