import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://docs.liquidroyalty.com/:path*",
      },
    ];
  },
};

export default nextConfig;
