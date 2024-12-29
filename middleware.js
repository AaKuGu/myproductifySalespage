import { NextResponse, NextRequest } from "next/server";

export async function middleware(request) {
  const { hostname, pathname } = new URL(request.url);
  console.log("🚀 ~ middleware ~ hostname:", hostname);

  if (
    pathname === "/" &&
    (hostname === "jv.myproductify.site" ||
      hostname === "www.jv.myproductify.site" ||
      hostname === "localhost")
  ) {
    console.log(
      "hostname is either `jv.myproductify.site` or `www.jv.myproductify.site or `localhost:3000`"
    );
    return NextResponse.rewrite(new URL(`/jvpage`, request.url));
  } else {
    return NextResponse.next();
  }
}

// import { NextResponse, NextRequest } from "next/server";

// export async function middleware(request) {
//   const { hostname, pathname } = new URL(request.url);
//   console.log("🚀 ~ middleware ~ hostname:", hostname);

//   // Check for the given hostnames and make sure we are not already on /jvpage
//   if (
//     pathname === "/" &&
//     (hostname === "jv.myproductify.site" ||
//       hostname === "www.jv.myproductify.site" ||
//       hostname === "localhost") &&
//     pathname !== "/jvpage" // Exclude already rewritten path
//   ) {
//     console.log("Rewriting to /jvpage with original path...");

//     // Rewrite the request to /jvpage and append the original path
//     const rewrittenUrl = new URL(`/jvpage${pathname}`, request.url);

//     // Perform the rewrite with the updated URL
//     return NextResponse.rewrite(rewrittenUrl);
//   }

//   // If no conditions match, proceed as usual
//   return NextResponse.next();
// }
