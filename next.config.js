/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "warriorplus.com",
        pathname: "/o2/**",
      },
    ],
  },
};

module.exports = nextConfig;
