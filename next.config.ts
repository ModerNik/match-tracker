import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
