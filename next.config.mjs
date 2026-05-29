/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesConfig = isGithubPages
  ? {
      basePath: "/claudiacarlini",
      assetPrefix: "/claudiacarlini",
    }
  : {};

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...githubPagesConfig,
};

export default nextConfig;
