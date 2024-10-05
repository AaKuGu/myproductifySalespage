import Oto1 from "@/components/salespage/oto1/Oto1";
import Oto4 from "@/components/salespage/oto2/Oto4";
import Oto3 from "@/components/salespage/oto3/Oto3";
import React from "react";
import Custom404 from "../404";

const page = ({ params }) => {
  const { otoSlug } = params;
  if (otoSlug == "oto1") {
    return <Oto1 />;
  }
  if (otoSlug == "oto2") {
    return <Oto4 />;
  }
  if (otoSlug == "oto3") {
    return <Oto3 />;
  } else return <Custom404 />;
};

export default page;
