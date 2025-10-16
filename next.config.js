/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Kích hoạt Static Site Generation
  // basePath: "/personal-blog", // Tắt basePath khi dev localhost
  images: {
    unoptimized: true, // Cần thiết cho GitHub Pages
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
