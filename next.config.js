/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Kích hoạt Static Site Generation
  // Set basePath when deploying to GitHub Pages under a repo path
  // basePath: "/Blog_CaNhan", // Uncomment for GitHub Pages
  // assetPrefix: "/Blog_CaNhan", // Uncomment for GitHub Pages
  images: {
    unoptimized: true, // Cần thiết cho GitHub Pages
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
