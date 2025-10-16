# 🚀 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Chuẩn bị Repository

### 1.1. Tạo/Kiểm tra GitHub Repository

```bash
# Nếu chưa có repo, tạo mới trên GitHub
# Repository name: personal-blog
# URL: https://github.com/thienne1602/personal-blog
```

### 1.2. Kết nối local với GitHub

```bash
cd d:\project\Blog_CaNhan\personal-blog

# Kiểm tra remote
git remote -v

# Nếu chưa có, thêm remote
git remote add origin https://github.com/thienne1602/personal-blog.git

# Push code lên GitHub
git add .
git commit -m "feat: Hoàn thành đồ án - SSG Blog với Next.js"
git push -u origin main
```

## Bước 2: Cấu hình GitHub Pages

### 2.1. Bật GitHub Actions

1. Vào repository: https://github.com/thienne1602/personal-blog
2. Click **Settings** > **Pages**
3. Tại **Source**, chọn: **GitHub Actions**

### 2.2. Cấu hình Permissions

1. Vào **Settings** > **Actions** > **General**
2. Kéo xuống **Workflow permissions**
3. Chọn: **Read and write permissions**
4. Tick: **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

## Bước 3: Deploy Tự động

### 3.1. Trigger GitHub Actions

Workflow `.github/workflows/deploy.yml` đã được tạo sẵn.

Mỗi khi push code lên branch `main`, GitHub Actions sẽ tự động:

1. ✅ Install dependencies
2. ✅ Build static site (`npm run build`)
3. ✅ Deploy lên GitHub Pages

### 3.2. Kiểm tra Deploy

```bash
# Push code để trigger workflow
git add .
git commit -m "chore: Update README và deploy config"
git push origin main

# Xem trạng thái build
# Vào: https://github.com/thienne1602/personal-blog/actions
```

### 3.3. Truy cập Website

Sau khi build thành công (2-5 phút):

- **URL**: https://thienne1602.github.io/personal-blog/

## Bước 4: Deploy Thủ công (Nếu cần)

### 4.1. Build Local

```powershell
cd d:\project\Blog_CaNhan\personal-blog

# Install dependencies
npm install

# Build static site
npm run build

# Kết quả: Thư mục /out chứa file HTML tĩnh
```

### 4.2. Deploy bằng gh-pages

```powershell
# Install gh-pages
npm install gh-pages --save-dev

# Deploy
npm run deploy
```

Package.json đã có script:

```json
{
  "scripts": {
    "deploy": "gh-pages -d out"
  }
}
```

## Bước 5: Kiểm tra và Debug

### 5.1. Test Local trước khi deploy

```powershell
# Build
npm run build

# Serve static files với http-server
npx serve out

# Truy cập: http://localhost:3000
```

### 5.2. Xem Logs GitHub Actions

1. Vào: https://github.com/thienne1602/personal-blog/actions
2. Click vào workflow run mới nhất
3. Xem logs từng step
4. Nếu có lỗi, fix và push lại

### 5.3. Common Issues

#### Issue 1: 404 Not Found

**Nguyên nhân**: basePath không đúng

**Fix**: Mở `next.config.js`:

```javascript
const nextConfig = {
  output: "export",
  // Uncomment nếu repo không phải là <username>.github.io
  // basePath: "/personal-blog",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

#### Issue 2: CSS/JS không load

**Nguyên nhân**: GitHub Pages cần file `.nojekyll`

**Fix**: File đã được tạo tự động trong `public/.nojekyll`

#### Issue 3: Images không hiển thị

**Nguyên nhân**: Next.js Image Optimization không hỗ trợ static export

**Fix**: Đã cấu hình `images.unoptimized: true`

## Bước 6: Custom Domain (Optional)

### 6.1. Mua domain

- VD: thien.blog, thienne.dev

### 6.2. Cấu hình DNS

Thêm DNS records:

```
A     @       185.199.108.153
A     @       185.199.109.153
A     @       185.199.110.153
A     @       185.199.111.153
CNAME www     thienne1602.github.io
```

### 6.3. Cấu hình GitHub

1. Vào **Settings** > **Pages**
2. Nhập domain vào **Custom domain**
3. Tick **Enforce HTTPS**

### 6.4. Thêm CNAME file

```powershell
# Tạo file CNAME trong public/
echo "thien.blog" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push
```

## Bước 7: Cập nhật Blog

### 7.1. Thêm bài viết mới

```javascript
// Mở file: data/blogData.js
export const blogPosts = [
  // ... các bài cũ
  {
    id: 10,
    title: "Bài viết mới",
    slug: "bai-viet-moi",
    excerpt: "Mô tả ngắn",
    content: `# Nội dung markdown`,
    author: "Thạch Văn Ngọc Thiên",
    date: "2025-10-20",
    readTime: "5 phút đọc",
    tags: ["Java"],
    category: "Java",
  },
];
```

### 7.2. Deploy bài viết mới

```powershell
git add data/blogData.js
git commit -m "feat: Thêm bài viết về Spring Security"
git push origin main

# GitHub Actions tự động build và deploy
```

## Bước 8: Monitoring & Analytics

### 8.1. Google Analytics (Optional)

Thêm Google Analytics vào `app/layout.jsx`:

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 8.2. GitHub Insights

- Xem traffic: https://github.com/thienne1602/personal-blog/graphs/traffic
- Xem visitors, referrers, popular content

## ✅ Checklist Deploy

- [ ] Code đã push lên GitHub
- [ ] GitHub Pages đã bật (Settings > Pages > GitHub Actions)
- [ ] Workflow permissions đã cấu hình
- [ ] Build thành công (check Actions tab)
- [ ] Website truy cập được (https://thienne1602.github.io/personal-blog)
- [ ] Dark/Light mode hoạt động
- [ ] Responsive trên mobile
- [ ] All links hoạt động
- [ ] Images load đầy đủ

## 🎉 Hoàn thành!

Website của bạn đã live tại:
**https://thienne1602.github.io/personal-blog**

Mỗi lần push code, website sẽ tự động cập nhật sau 2-5 phút!

---

## 📞 Cần trợ giúp?

- **Issues**: https://github.com/thienne1602/personal-blog/issues
- **Email**: ngocthien160224@gmail.com
- **Docs**: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
