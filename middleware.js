import { NextResponse, NextRequest } from "next/server";

export async function middleware(request) {
  const { hostname, pathname } = new URL(request.url);
  console.log("🚀 ~ middleware ~ hostname:", hostname);

  if (
    pathname === "/" &&
    (hostname === "jv.myproductify.site" ||
      hostname === "www.jv.myproductify.site")
  ) {
    // console.log(
    //   "hostname is either `jv.myproductify.site` or `www.jv.myproductify.site or `localhost:3000`"
    // );
    return NextResponse.rewrite(new URL(`/jvpage`, request.url));
  } else {
    return NextResponse.next();
  }
}
