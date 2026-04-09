import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** સ્ટેટિક `out/` ફોલ્ડર — `npm run build` પછી દેખાશે */
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
