/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Kích hoạt Static Site Generation
  // Set basePath when deploying to GitHub Pages under a repo path
  basePath: "/Blog_CaNhan", // Đường dẫn repo trên GitHub Pages
  assetPrefix: "/Blog_CaNhan", // Đường dẫn asset cho GitHub Pages
  images: {
    unoptimized: true, // Cần thiết cho GitHub Pages
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
