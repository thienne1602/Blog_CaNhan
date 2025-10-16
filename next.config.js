/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Kích hoạt Static Site Generation
  // Set basePath when deploying to GitHub Pages under a repo path
  basePath: "/Blog_CaNhan",
  assetPrefix: "/Blog_CaNhan",
  images: {
    unoptimized: true, // Cần thiết cho GitHub Pages
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
