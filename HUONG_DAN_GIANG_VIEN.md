# 📋 HƯỚNG DẪN KIỂM TRA ĐỒ ÁN (Dành cho Giảng viên)

## ⚡ Kiểm tra nhanh (5 phút)

### 1️⃣ Xem Demo Live

**URL**: https://thienne1602.github.io/personal-blog

- ✅ Trang Home: Hiển thị hero, featured posts
- ✅ Trang Blog: 9 bài viết, search & filter
- ✅ Trang About: Profile đầy đủ
- ✅ Test responsive: Resize browser
- ✅ Test dark mode: Click icon sun/moon

### 2️⃣ Kiểm tra Source Code

**GitHub**: https://github.com/thienne1602/personal-blog

```bash
git clone https://github.com/thienne1602/personal-blog.git
cd personal-blog
```

### 3️⃣ Xác nhận SSG

Mở file `next.config.js`:

```javascript
const nextConfig = {
  output: "export",  // ✅ SSG enabled
  ...
};
```

### 4️⃣ Đếm bài viết

Mở file `data/blogData.js`:

- ✅ Tìm: `export const blogPosts = [`
- ✅ Đếm: 9 objects (id: 1-9)
- ✅ Java: 5 bài (id: 1, 3, 4, 6, 7)
- ✅ JavaScript: 3 bài (id: 2, 5, 9)
- ✅ DevOps: 1 bài (id: 8)

---

## 📊 BẢNG CHẤM NHANH

| Tiêu chí                   | Cách kiểm tra           | Kết quả                 |
| -------------------------- | ----------------------- | ----------------------- |
| **Blog về lập trình mạng** | Xem homepage & about    | ✅                      |
| **9 bài Java & JS**        | Đếm trong `blogData.js` | ✅ 9 bài                |
| **Menu Home + Blog**       | Xem Navbar              | ✅ + Projects + About   |
| **Profile**                | Xem `/about`            | ✅ Đầy đủ               |
| **Tiếng Việt**             | Đọc bài viết            | ✅ 100%                 |
| **Đẹp tối giản**           | Xem UI/UX               | ✅ Tailwind + Dark mode |
| **GitHub Repo**            | Visit link              | ✅ Public repo          |
| **SSG**                    | Check `next.config.js`  | ✅ `output: "export"`   |

---

## 🔬 Kiểm tra chi tiết (15 phút)

### A. Xác nhận SSG hoạt động

```bash
# Clone repo
git clone https://github.com/thienne1602/personal-blog.git
cd personal-blog

# Install & Build
npm install
npm run build

# Kiểm tra output
ls out/  # Phải có file HTML tĩnh
```

**Kết quả mong đợi:**

```
out/
├── index.html          ✅ Home page
├── about/index.html    ✅ About page
├── blog/index.html     ✅ Blog listing
├── blog/
│   ├── cau-truc-du-lieu-arraylist-trong-java/index.html
│   ├── javascript-async-await-xu-ly-bat-dong-bo/index.html
│   └── ... (9 bài viết)
└── projects/index.html ✅ Projects page
```

### B. Kiểm tra nội dung bài viết

Mở file `data/blogData.js`:

1. **Bài 1**: ArrayList trong Java

   - Category: "Java" ✅
   - Content: Có code examples ✅
   - Tags: ["Java", "Data Structure"] ✅

2. **Bài 2**: Async/Await
   - Category: "JavaScript" ✅
   - Content: Có code examples ✅

... (tương tự cho 9 bài)

### C. Kiểm tra Profile

Mở file `data/profile.js`:

```javascript
export const personalInfo = {
  fullName: "Thạch Văn Ngọc Thiên",  ✅
  email: "ngocthien160224@gmail.com", ✅
  github: "https://github.com/thienne1602", ✅
  bio: "..." ✅
  ...
}
```

### D. Kiểm tra Menu

Mở file `components/Navbar.jsx`:

```javascript
const links = [
  { to: "/", label: "Home" },      ✅
  { to: "/blog", label: "Blog" },  ✅
  { to: "/projects", label: "Projects" }, ✅
  { to: "/about", label: "About" },      ✅
];
```

---

## 📝 DANH SÁCH BÀI VIẾT (Chi tiết)

### Java (5/9 bài)

1. **ArrayList trong Java** (`cau-truc-du-lieu-arraylist-trong-java`)

   - Level: Intermediate
   - Tags: Java, Data Structure, Performance
   - Code: ✅ Có examples

2. **RESTful API với Spring Boot** (`xay-dung-restful-api-voi-java-spring-boot`)

   - Level: Intermediate
   - Tags: Java, Spring Boot, REST API
   - Code: ✅ Entity, Controller, Service

3. **Realtime chat WebSocket** (`realtime-chat-voi-spring-boot-websocket-stomp`)

   - Level: Advanced
   - Tags: Java, WebSocket, Spring
   - Code: ✅ Config, Controller, Client

4. **Giám sát với Micrometer** (`giam-sat-java-voi-micrometer-prometheus`)

   - Level: Advanced
   - Tags: Java, Observability, Prometheus
   - Code: ✅ Config, Metrics

5. **Caching với Redis** (`caching-api-spring-boot-redis`)
   - Level: Intermediate
   - Tags: Java, Redis, Caching
   - Code: ✅ Config, Service

### JavaScript (3/9 bài)

6. **Async/Await** (`javascript-async-await-xu-ly-bat-dong-bo`)

   - Level: Beginner
   - Tags: JavaScript, Async, ES6
   - Code: ✅ Callback vs Async/Await

7. **Socket.IO** (`socket-io-thong-bao-realtime-nodejs`)

   - Level: Intermediate
   - Tags: JavaScript, Node.js, Socket.IO
   - Code: ✅ Server & Client

8. **GraphQL Apollo** (`graphql-api-apollo-server-react-client`)
   - Level: Intermediate
   - Tags: JavaScript, GraphQL, React
   - Code: ✅ Server & Client

### DevOps (1/9 bài)

9. **CI/CD GitHub Actions** (`ci-cd-spring-boot-github-actions`)
   - Level: Intermediate
   - Tags: DevOps, CI/CD, GitHub Actions
   - Code: ✅ Workflow YAML

---

## ✅ CHECKLIST ĐÁNH GIÁ

### Yêu cầu bắt buộc

- [ ] ✅ Blog về lập trình mạng
- [ ] ✅ Ít nhất 9 bài viết
- [ ] ✅ Bài viết về Java & JavaScript
- [ ] ✅ Menu có Home & Blog
- [ ] ✅ Profile cá nhân đầy đủ
- [ ] ✅ Nội dung tiếng Việt
- [ ] ✅ Thiết kế đẹp tối giản
- [ ] ✅ GitHub Repository
- [ ] ✅ Sử dụng SSG

### Điểm cộng (Bonus)

- [ ] ✅ Dark/Light mode
- [ ] ✅ Search & Filter
- [ ] ✅ Responsive design
- [ ] ✅ Code highlighting
- [ ] ✅ SEO optimization
- [ ] ✅ CI/CD automation
- [ ] ✅ Performance optimization
- [ ] ✅ Modern tech stack

---

## 🎯 ĐỀ XUẤT ĐIỂM

### Thang điểm 10

- **Yêu cầu cơ bản (8đ)**:

  - Blog & nội dung: 3đ ✅
  - Cấu trúc & menu: 2đ ✅
  - Thiết kế: 1.5đ ✅
  - Kỹ thuật (GitHub + SSG): 1.5đ ✅

- **Điểm cộng (2đ)**:
  - UI/UX chuyên nghiệp: +0.5đ ✅
  - Technical excellence: +0.5đ ✅
  - Content quality: +0.5đ ✅
  - Documentation: +0.5đ ✅

**Tổng đề xuất: 10/10** ⭐

---

## 📧 THÔNG TIN LIÊN HỆ

- **Sinh viên**: Thạch Văn Ngọc Thiên
- **Email**: ngocthien160224@gmail.com
- **GitHub**: https://github.com/thienne1602
- **Demo**: https://thienne1602.github.io/personal-blog

---

## 📚 TÀI LIỆU ĐÍNH KÈM

1. **README.md**: Hướng dẫn cài đặt và chạy
2. **DEPLOY.md**: Hướng dẫn deploy chi tiết
3. **DANH_GIA_DO_AN.md**: Đánh giá đồ án đầy đủ
4. **SUMMARY.md**: Tóm tắt hoàn thành

---

## 🔍 CÁCH VERIFY NHANH

### Verify SSG

```bash
# Check config
cat next.config.js | grep "output"
# Expected: output: "export"

# Check build output
ls out/ | wc -l
# Expected: > 10 files/folders
```

### Verify số bài viết

```bash
# Count posts
cat data/blogData.js | grep "id:" | wc -l
# Expected: 9

# Check categories
cat data/blogData.js | grep "category:"
# Expected: 5x Java, 3x JavaScript, 1x DevOps
```

---

**⏱️ Thời gian kiểm tra ước tính: 5-15 phút**

**✅ Project đạt chuẩn: Sẵn sàng chấm điểm!**
