import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true, // REQUIRED for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thekreativeweb.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
