import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_ACTIONS === true;
const repo = isGithubActions ? process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "" : "";
const basePath = repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
