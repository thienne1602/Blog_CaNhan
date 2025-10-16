# Các Hiệu Ứng Mới Được Thêm Vào Trang About

## 📦 Components Mới

### 1. **GradientTextEffect**

- File: `components/effects/GradientTextEffect.jsx` & `.css`
- Tạo text với gradient màu động
- Props:
  - `colors`: Mảng màu cho gradient
  - `animationSpeed`: Tốc độ animation (giây)
  - `showBorder`: Hiển thị border với gradient

### 2. **BlurTextEffect**

- File: `components/effects/BlurTextEffect.jsx`
- Text xuất hiện với hiệu ứng blur từ từ
- Props:
  - `text`: Nội dung text
  - `animateBy`: 'words' hoặc 'letters'
  - `direction`: 'top' hoặc 'bottom'
  - `delay`: Độ trễ giữa các từ/chữ (ms)

### 3. **MagneticCard**

- File: `components/effects/MagneticCard.jsx`
- Card/button bị hút theo con trỏ chuột
- Props:
  - `padding`: Vùng kích hoạt hiệu ứng (px)
  - `magnetStrength`: Độ mạnh của hiệu ứng
  - `disabled`: Tắt hiệu ứng

### 4. **StatCard**

- File: `components/effects/StatCard.jsx`
- Card hiển thị số liệu với animation đẹp mắt
- Props:
  - `value`: Giá trị số
  - `label`: Nhãn mô tả
  - `icon`: Icon emoji
  - `delay`: Độ trễ animation

### 5. **SkillCard**

- File: `components/effects/SkillCard.jsx`
- Card hiển thị kỹ năng với hover effect
- Props:
  - `skill`: Tên kỹ năng
  - `index`: Index để stagger animation

### 6. **ParallaxCard**

- File: `components/effects/ParallaxCard.jsx`
- Card với hiệu ứng parallax khi scroll
- Props:
  - `speed`: Tốc độ parallax
  - `children`: Nội dung bên trong

## 🎨 Hiệu Ứng Trên Trang About

### Hero Section

- Background với 3 blob gradient animation
- Tiêu đề với GradientTextEffect (màu chuyển động)
- Mô tả với BlurTextEffect (text xuất hiện từ từ)

### Stats Section

- 2 StatCard với số liệu Java và JavaScript posts
- Animation scale và glow effect khi hover
- Gradient background động

### Main Content

- ParallaxCard cho section mục tiêu
- List items với stagger animation
- Smooth transitions

### Tech Stack

- Grid SkillCard với animation delay tuần tự
- Hover effect với glow và scale
- Gradient background subtle

### Contact Section

- Background pattern động
- MagneticCard cho email link
- Social links với magnetic effect
- Gradient background từ primary sang accent

## 🎭 Custom Animations CSS

Đã thêm vào `app/globals.css`:

```css
/* Blob Animation */
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(50px, 30px) scale(1.05);
  }
}

/* Gradient Animation */
@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Float Animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

Classes:

- `.animate-blob` - Blob floating animation
- `.animation-delay-2000` - Delay 2s
- `.animation-delay-4000` - Delay 4s
- `.animate-gradient-x` - Gradient moving
- `.animate-float` - Floating effect

## 🎯 Màu Sắc Mới

Đã thêm accent color vào `tailwind.config.js`:

```javascript
accent: {
  50: "#fdf4ff",
  100: "#fae8ff",
  // ... các màu từ 200-900
}
```

## 🚀 Cách Chạy

1. Di chuyển đến thư mục project:

```bash
cd d:\project\Blog_CaNhan\personal-blog
```

2. Chạy development server:

```bash
npm run dev
# hoặc
yarn dev
```

3. Mở trình duyệt tại: `http://localhost:3000/about`

## 📝 Dependencies

Project đã có sẵn:

- ✅ `framer-motion` - Cho animations
- ✅ `tailwindcss` - Cho styling
- ✅ `next` - Framework

## 🎨 Tùy Chỉnh

### Thay đổi màu gradient:

```jsx
<GradientTextEffect
  colors={["#6366f1", "#8b5cf6", "#ec4899"]}
  animationSpeed={5}
>
  Your Text
</GradientTextEffect>
```

### Điều chỉnh magnetic strength:

```jsx
<MagneticCard magnetStrength={4} padding={50}>
  <button>Click Me</button>
</MagneticCard>
```

### Thay đổi blur animation:

```jsx
<BlurTextEffect
  text="Your text here"
  animateBy="letters" // hoặc "words"
  direction="bottom" // hoặc "top"
  delay={100} // ms
/>
```

## 🌟 Các Tính Năng Nổi Bật

1. **Smooth Animations** - Tất cả animations đều mượt mà, không lag
2. **Responsive** - Tất cả hiệu ứng hoạt động tốt trên mobile
3. **Performance** - Sử dụng `will-change` và `transform3d` để tối ưu
4. **Accessibility** - Giữ nguyên semantic HTML
5. **Customizable** - Dễ dàng tùy chỉnh màu sắc, timing, etc.

## 🎭 Preview

Trang About mới có:

- ✨ Hero section với gradient text động
- 🎯 Stats cards với animation
- 🎨 Skills grid với stagger effect
- 🧲 Magnetic buttons/links
- 🌊 Parallax scrolling effect
- 💫 Blob background animation
- 🎪 Gradient animations everywhere!

## 📚 Tham Khảo

Các hiệu ứng được lấy cảm hứng và tích hợp từ:

- [React Bits](https://github.com/DavidHDev/react-bits) - Component library
- Framer Motion documentation
- Modern web design trends

---

Chúc bạn code vui! 🚀✨
