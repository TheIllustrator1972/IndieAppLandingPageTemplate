import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "",
  },
};

export default nextConfig;
