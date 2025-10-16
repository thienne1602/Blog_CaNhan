# 🎓 Blog Cá Nhân - Thạch Văn Ngọc Thiên

[![Deploy](https://github.com/thienne1602/personal-blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/thienne1602/personal-blog/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Blog chia sẻ kiến thức về **Lập trình mạng**, **Java** và **JavaScript** - Đồ án học phần HUTECH

## 📖 Giới thiệu

Blog cá nhân được xây dựng bằng **Next.js Static Site Generation (SSG)** phục vụ đồ án học phần. Nội dung tập trung vào các chủ đề lập trình mạng, Java và JavaScript với 9+ bài viết chất lượng cao.

**🌐 Demo:** [https://thienne1602.github.io/personal-blog](https://thienne1602.github.io/personal-blog)

## ✨ Tính năng

- ✅ **Static Site Generation (SSG)** với Next.js 14 - đáp ứng yêu cầu đồ án
- ✅ **9+ bài viết chuyên sâu** về Java (5 bài) & JavaScript (3 bài) + DevOps (1 bài)
- ✅ **Menu đầy đủ**: Home, Blog, Projects, About
- ✅ **Profile cá nhân** chi tiết với timeline và tech stack
- ✅ **Dark/Light Mode** với chuyển đổi mượt mà
- ✅ **Search & Filter** - tìm kiếm và lọc theo category/tags
- ✅ **Responsive Design** - tối ưu cho mọi thiết bị
- ✅ **SEO Optimized** - metadata và Open Graph đầy đủ
- ✅ **GitHub Actions CI/CD** - tự động build và deploy
- ✅ **Performance** - Pre-rendering, code splitting, lazy loading

## 🛠️ Công nghệ sử dụng

| Công nghệ         | Vai trò               | Lý do chọn                        |
| ----------------- | --------------------- | --------------------------------- |
| **Next.js 14**    | Static Site Generator | Framework SSG hiện đại, mạnh mẽ   |
| **React 18**      | UI Library            | Component-based, reusable         |
| **Tailwind CSS**  | CSS Framework         | Utility-first, responsive dễ dàng |
| **Framer Motion** | Animation             | Smooth transitions & effects      |
| **Prism.js**      | Code Syntax           | Highlight code blocks đẹp         |
| **GitHub Pages**  | Hosting               | Free, tích hợp GitHub Actions     |

## 📁 Cấu trúc dự án

\`\`\`
personal-blog/
├── app/ # Next.js App Router
│ ├── layout.jsx # Layout chính
│ ├── page.jsx # Trang Home
│ ├── globals.css # Global styles
│ ├── blog/ # Trang Blog
│ │ ├── page.jsx
│ │ └── [slug]/ # Chi tiết bài viết (SSG)
│ │ └── page.jsx
│ ├── projects/ # Trang Projects
│ │ └── page.jsx
│ └── about/ # Trang About
│ └── page.jsx
├── components/ # React components
├── data/ # Dữ liệu blog và profile
│ ├── blogData.js # 9 bài viết
│ └── profile.js # Thông tin cá nhân
├── hooks/ # Custom hooks
├── utils/ # Utilities
├── next.config.js # Next.js config (SSG enabled)
└── package.json
\`\`\`

## 🚀 Hướng dẫn cài đặt

### 1. Clone repository

\`\`\`bash
git clone https://github.com/thienne1602/personal-blog.git
cd personal-blog
\`\`\`

### 2. Cài đặt dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Chạy development server

\`\`\`bash
npm run dev
\`\`\`

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 4. Build production (SSG)

\`\`\`bash
npm run build
\`\`\`

Tạo thư mục \`out/\` với tất cả trang đã được pre-render sẵn (SSG).

### 5. Deploy lên GitHub Pages

\`\`\`bash
npm run deploy
\`\`\`

## 📝 Nội dung Blog

### Java (6 bài)

1. ✅ Cấu trúc dữ liệu ArrayList trong Java
2. ✅ RESTful API với Spring Boot
3. ✅ WebSocket với Spring Boot
4. ✅ Giám sát ứng dụng với Micrometer/Prometheus
5. ✅ Caching với Redis trong Spring Boot
6. ✅ CI/CD với GitHub Actions

### JavaScript (3 bài)

1. ✅ Async/Await - Xử lý bất đồng bộ
2. ✅ Socket.IO với Node.js
3. ✅ GraphQL API với Apollo Server

## 🎯 Đáp ứng yêu cầu đồ án

| Yêu cầu                       | Trạng thái         |
| ----------------------------- | ------------------ |
| Chủ đề lập trình mạng         | ✅                 |
| Menu Home & Blog              | ✅                 |
| Profile cá nhân               | ✅                 |
| ≥9 bài viết (Java & JS)       | ✅ 9 bài           |
| Tiếng Việt                    | ✅                 |
| Trình bày đẹp tối giản        | ✅                 |
| **SSG (HUGO/Publii/Next.js)** | ✅ **Next.js SSG** |
| GitHub Repository             | ✅                 |

## 👨‍💻 Tác giả

**Thạch Văn Ngọc Thiên**

- Sinh viên năm 4 - Hệ thống Thông tin - HUTECH
- Email: ngocthien160224@gmail.com
- GitHub: [@thienne1602](https://github.com/thienne1602)

## 📄 License

MIT License - Tự do sử dụng cho mục đích học tập.

## 🙏 Lời cảm ơn

- HUTECH - Trường Đại học Công nghệ TP.HCM
- Giảng viên môn Lập trình mạng
- Cộng đồng Next.js và React
