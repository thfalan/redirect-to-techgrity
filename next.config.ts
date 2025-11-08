import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://www.techgrity.info/:path*",
      },
    ];
  },
};

export default nextConfig;
