export const personalInfo = {
  fullName: "Thạch Văn Ngọc Thiên",
  headline:
    "Sinh viên năm 4 HUTECH | Fullstack Developer | Đam mê lập trình mạng",
  bio: `Xin chào, mình là Thiên - sinh viên năm 4 chuyên ngành Hệ thống Thông tin tại HUTECH. Mình dành nhiều thời gian nghiên cứu kiến trúc hệ thống, xây dựng API và tối ưu hóa các ứng dụng realtime bằng Java, JavaScript. Blog này được tạo để lưu lại những kinh nghiệm học tập, dự án cá nhân, cũng như chia sẻ kiến thức hữu ích cho các bạn sinh viên yêu thích lập trình mạng.`,
  avatar: "/images/profile.jpg",
  location: "Thành phố Hồ Chí Minh, Việt Nam",
  email: "ngocthien160224@gmail.com",
  phone: "0948283916",
  // Direct social links for hero section
  github: "https://github.com/thienne1602",
  linkedin: "https://www.linkedin.com/in/thach-van-ngoc-thien",
  facebook: "https://www.facebook.com/ngocthien.thachvan",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/thienne1602",
      username: "thienne1602",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/ngocthien.thachvan",
      username: "ngocthien.thachvan",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/thach-van-ngoc-thien",
      username: "thach-van-ngoc-thien",
    },
  ],
  interests: [
    "Lập trình mạng",
    "Spring Boot",
    "WebSocket",
    "Đồ án tốt nghiệp",
    "Clean Architecture",
  ],
  techStack: [
    "Java",
    "Spring Boot",
    "Hibernate",
    "JavaScript",
    "React",
    "Node.js",
    "Socket.IO",
    "Tailwind CSS",
  ],
};

export const timeline = [
  {
    year: "2025",
    title: "Thực tập Backend Engineer",
    description:
      "Tham gia vào đội phát triển API cho hệ thống quản lý IoT, tối ưu hóa throughput và độ trễ bằng Spring Boot, Redis và Kafka.",
  },
  {
    year: "2024",
    title: "Sinh viên năm 4 HUTECH",
    description:
      "Hoàn thành các môn chuyên ngành như Lập trình mạng, Công nghệ Web, Bảo mật hệ thống. Đạt chứng chỉ Oracle Java Foundations.",
  },
  {
    year: "2023",
    title: "Dự án VieGo_Blog",
    description:
      "Xây dựng blog du lịch cho cộng đồng sinh viên, triển khai CI/CD lên Vercel, tích hợp chức năng gợi ý bài viết bằng AI.",
  },
  {
    year: "2022",
    title: "Dự án LTW_Nhom8386",
    description:
      "Dẫn dắt nhóm 4 người xây dựng website bán khóa học trực tuyến, áp dụng pattern MVC và tối ưu SEO cơ bản.",
  },
];

export const projects = [
  {
    name: "Network Monitor Dashboard",
    description:
      "Dashboard realtime giám sát lưu lượng mạng sử dụng Spring Boot, WebSocket và React. Triển khai trên Render kết hợp Grafana để hiển thị metrics.",
    tech: ["Spring Boot", "WebSocket", "React", "Tailwind"],
    highlights: [
      "Cảnh báo realtime khi latency vượt ngưỡng",
      "Tích hợp Prometheus / Grafana",
      "JWT Authentication nhiều vai trò",
    ],
    repo: "https://github.com/thienne1602/network-monitor-dashboard",
    demo: "https://network-monitor.thien.dev",
  },
  {
    name: "Realtime Chat Classroom",
    description:
      "Ứng dụng chat nhóm cho lớp học, hỗ trợ chia sẻ tài liệu tức thì bằng Socket.IO, Node.js và Redis pub/sub.",
    tech: ["Node.js", "Socket.IO", "Redis", "TypeScript"],
    highlights: [
      "Gửi thông báo đẩy tới nhiều phòng",
      "Tự động reconnect khi mất mạng",
      "Lưu trữ lịch sử bằng MongoDB",
    ],
    repo: "https://github.com/thienne1602/realtime-chat-classroom",
    demo: "https://chat-classroom.thien.dev",
  },
  {
    name: "APIs for HUTECH Labs",
    description:
      "Bộ RESTful API quản lý phòng lab của khoa Công nghệ thông tin, xây dựng bằng Spring Boot và PostgreSQL.",
    tech: ["Spring Boot", "PostgreSQL", "Docker", "Flyway"],
    highlights: [
      "Thực thi CI/CD với GitHub Actions",
      "Tối ưu truy vấn bằng JPA Specification",
      "Đảm bảo chất lượng với 120+ test cases",
    ],
    repo: "https://github.com/thienne1602/hutech-lab-api",
    demo: "https://documenter.getpostman.com/view/12345678/2s93zB3HUf",
  },
];
