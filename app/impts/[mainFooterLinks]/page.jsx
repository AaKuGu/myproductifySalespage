import MainFooterLinksComponent from "@/components/salespage/MainFooterLinksComponent";
import {
  affiliateDisclosure,
  cookiePolicy,
  earningsDisclaimer,
  privacyPolicy,
  termsAndConditions,
} from "@/constant/mainFooter";
import React from "react";

const page = ({ params }) => {
  const { mainFooterLinks } = params;
  if (mainFooterLinks == "termsAndConditions")
    return (
      <MainFooterLinksComponent
        data={termsAndConditions}
        title="Terms And Conditions"
      />
    );

  if (mainFooterLinks == "privacyPolicy")
    return (
      <MainFooterLinksComponent data={privacyPolicy} title="Privacy Policy" />
    );

  if (mainFooterLinks == "earningsDisclaimer")
    return (
      <MainFooterLinksComponent
        data={earningsDisclaimer}
        title="Earnings Disclaimer"
      />
    );

  if (mainFooterLinks == "cookiePolicy")
    return (
      <MainFooterLinksComponent data={cookiePolicy} title="Cookie Policy" />
    );

  if (mainFooterLinks == "affiliateDisclosure")
    return (
      <MainFooterLinksComponent
        data={affiliateDisclosure}
        title="Affiliate Disclosure"
      />
    );
};

export default page;
