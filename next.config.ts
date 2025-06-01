import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/IndieAppLandingPageTemplate" : "",
  assetPrefix: isGithubPages ? "/IndieAppLandingPageTemplate/" : "",
};

export default nextConfig;
