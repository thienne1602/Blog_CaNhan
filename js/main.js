/**
 * Portfolio — Thạch Văn Ngọc Thiên
 * Main JavaScript Module
 * ============================================
 */

(function () {
  "use strict";

  // ============================================
  // CURSOR GLOW FOLLOWER (disabled)
  // ============================================
  // Removed — cursor glow effect disabled

  // ============================================
  // SCROLL REVEAL
  // ============================================
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ============================================
  // COUNTER ANIMATION
  // ============================================
  const counters = document.querySelectorAll(".count-up");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target);
          let current = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current);
            }
          }, 25);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => counterObserver.observe(c));

  // ============================================
  // NAV ACTIVE STATE ON SCROLL
  // ============================================
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // ============================================
  // TILT EFFECT ON GLASS CARDS (disabled)
  // ============================================

  // ============================================
  // SMOOTH SCROLL FOR NAV LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ============================================
  // PARALLAX ON BACKGROUND ORBS
  // ============================================
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelectorAll(".bg-orb").forEach((orb, i) => {
      const speed = 0.03 + i * 0.01;
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // ============================================
  // THEME TOGGLE (LIGHT / DARK MODE)
  // ============================================
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  // ============================================
  // SKILL BAR ANIMATION ON SCROLL
  // ============================================
  const skillBars = document.querySelectorAll(".skill-bar-fill");
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute("data-width") || bar.style.width;
          bar.style.width = "0%";
          requestAnimationFrame(() => {
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, 100);
          });
          skillObserver.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 },
  );

  skillBars.forEach((bar) => {
    bar.setAttribute("data-width", bar.style.width);
    bar.style.width = "0%";
    skillObserver.observe(bar);
  });

  // ============================================
  // NAVBAR BLUR ON SCROLL (theme-aware)
  // ============================================
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (!navbar) return;
    const isLight = document.body.classList.contains("light-mode");
    if (window.scrollY > 100) {
      navbar.style.background = isLight
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(6, 6, 11, 0.9)";
      navbar.style.borderColor = isLight
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255,255,255,0.14)";
    } else {
      navbar.style.background = isLight
        ? "rgba(255, 255, 255, 0.75)"
        : "rgba(12, 12, 20, 0.8)";
      navbar.style.borderColor = isLight
        ? "rgba(0, 0, 0, 0.06)"
        : "rgba(255,255,255,0.1)";
    }
  });

  // ============================================
  // MAGNETIC BUTTON EFFECT
  // ============================================
  document
    .querySelectorAll(
      ".btn-primary, .btn-secondary, .btn-download, .contact-chip, .nav-cta",
    )
    .forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });

  // ============================================
  // LOADING ANIMATION
  // ============================================
  window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease";
    requestAnimationFrame(() => {
      document.body.style.opacity = "1";
    });
  });

  // ============================================
  // PROJECT DETAIL MODAL
  // ============================================
  const projectData = {
    viego: {
      title: "VieGo — Travel & Blog Platform",
      badge: "Đồ Án Chuyên Ngành",
      desc: "VieGo Blog là nền tảng blog du lịch và ẩm thực kết hợp hệ thống quản lý tour chuyên nghiệp. Dự án cung cấp giải pháp toàn diện cho việc chia sẻ trải nghiệm du lịch, đặt tour, quản lý booking và theo dõi tiến trình tour real-time. Tích hợp Social Network (real-time chat, friend system, stories 24h), AI Recommendations (phân tích hành vi người dùng, gợi ý tour cá nhân hóa), NFT Gamification (badges, points, blockchain integration), Email Marketing, Tour Location Tracking với SOS alerts và geofence system. Hệ thống gồm 30+ database models, 28+ route files, 6 vai trò phân quyền, 5 module Socket.IO real-time.",
      role: "Team Leader (2 thành viên)",
      time: "Tháng 9 – 12/2025",
      achieve:
        "Điểm tối đa · 2 GitHub Stars · 30+ DB Models · 22+ tính năng chính",
      tech: [
        "Flask",
        "Next.js",
        "React",
        "TypeScript",
        "MySQL",
        "Socket.IO",
        "TailwindCSS",
        "OpenAI",
        "Web3",
        "Google Maps",
      ],
      github: "https://github.com/thienne1602/VieGo_Blog",
      video: "assets/video/video demo viego.mp4",
    },
    pethub: {
      title: "PetHub — Quản lý Khách sạn Thú cưng",
      badge: "Đồ Án Oracle Database",
      desc: "Hệ thống Web Fullstack quản lý khách sạn thú cưng tích hợp Oracle Database. Bao gồm quản lý đặt phòng, hóa đơn, dịch vụ chăm sóc, thú cưng, khách hàng và nhân viên. Database thiết kế chuẩn hóa 3NF với 9 thực thể, 3 Triggers (tự động cập nhật trạng thái phòng, tính thành tiền, cập nhật hóa đơn) và 3 Stored Procedures (tính tổng tiền, đặt phòng với Double Booking check, xử lý thanh toán). Frontend Next.js + Tailwind CSS với Dashboard thống kê trực quan.",
      role: "Fullstack Developer",
      time: "Tháng 2/2026",
      achieve: "Oracle Database chuẩn 3NF · 3 Triggers · 3 Stored Procedures",
      tech: [
        "Node.js",
        "Express",
        "Next.js",
        "Oracle DB",
        "Tailwind CSS",
        "PLSQL",
      ],
      github: "https://github.com/thienne1602/PETHUB",
      video: "",
    },
    sportlife: {
      title: "SportLife — Sports Prediction App",
      badge: "Đồ Án Lập Trình Di Động",
      desc: "Ứng dụng thể thao chuyên bóng đá với hệ thống dự đoán tỉ số, gamification (points, badges, leaderboard), quà tặng, nhà tài trợ và mạng xã hội. Backend Laravel 10 với Filament v3 Admin Dashboard, Sanctum Authentication, Spatie Permission phân quyền 5 roles. Frontend Flutter 3.24+ với Riverpod state management, Material 3 design. Real-time notifications qua Laravel Echo + Pusher, Firebase Cloud Messaging. Cơ sở dữ liệu 25+ bảng bao gồm quản lý đội bóng, trận đấu, mùa giải, cầu thủ, dự đoán, nhiệm vụ hằng ngày và nhà tài trợ.",
      role: "Fullstack Developer",
      time: "Tháng 12/2025",
      achieve: "25+ Database Tables · 5 Roles · Gamification System hoàn chỉnh",
      tech: [
        "Laravel",
        "Flutter",
        "Dart",
        "PHP",
        "MySQL",
        "Pusher",
        "Firebase",
        "Filament",
      ],
      github: "https://github.com/thienne1602/SportLife",
      video: "",
    },
    tasky: {
      title: "Tasky — Task Management App",
      badge: "Đồ Án Lập Trình Di Động",
      desc: "Ứng dụng quản lý công việc đa nền tảng được phát triển với Flutter. Bao gồm 2 ứng dụng: Tasky App (dành cho người dùng) và Tasky Manager (dành cho quản lý). Tích hợp thống kê công việc, hệ thống thông báo đẩy, tính năng âm thanh và stickers. Backend Node.js xử lý API và quản lý dữ liệu.",
      role: "Fullstack Developer",
      time: "Tháng 11/2025 – 01/2026",
      achieve: "2 ứng dụng (User + Manager) · Statistics & Notifications",
      tech: ["Flutter", "Dart", "Node.js", "JavaScript", "REST API"],
      github: "https://github.com/thienne1602/Tasky",
      video: "",
    },
    "game-anhhung": {
      title: "Game Anh Hùng Bàn Phím",
      badge: "Đồ Án Game Development",
      desc: "Game 2D RPG phát triển bằng Godot Engine với GDScript và C#. Hệ thống title effects với healing và visual enhancements, volume settings management, User Management UI responsive. Dự án bao gồm game assets, scenes, scripts và tools phát triển chuyên nghiệp.",
      role: "Game Developer",
      time: "Tháng 5 – 7/2025",
      achieve: "Hệ thống game hoàn chỉnh · Title effects & Sound management",
      tech: ["Godot Engine", "GDScript", "C#", "Game Design"],
      github: "https://github.com/thienne1602/game_anh_hung_ban_phim_",
      video: "",
    },
    "quanly-cuahang": {
      title: "Hệ thống Quản lý Cửa hàng",
      badge: "Đồ Án Cơ Sở Dữ Liệu",
      desc: "Website quản lý cửa hàng phát triển với ASP.NET và C#. Bao gồm chức năng bán hàng, quản lý kho, theo dõi đơn hàng và báo cáo doanh thu chi tiết. Thiết kế database theo mô hình ERD, chuẩn hóa dữ liệu đến 3NF với SQL Server, đảm bảo tính toàn vẹn và hiệu suất truy vấn tối ưu.",
      role: "Database Designer & Developer",
      time: "Tháng 1 – 4/2025",
      achieve: "Áp dụng ERD & chuẩn hóa 3NF thành công",
      tech: ["C#", "ASP.NET", "SQL Server", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/thienne1602/Web_Do_An_CSDL",
      video: "",
    },
  };

  const modal = document.getElementById("projectModal");
  const modalClose = document.getElementById("projectModalClose");
  const projectVideo = document.getElementById("projectVideo");

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalBadge").textContent = data.badge;
    document.getElementById("modalDesc").textContent = data.desc;
    document.getElementById("modalRole").textContent = data.role;
    document.getElementById("modalTime").textContent = data.time;
    document.getElementById("modalAchieve").textContent = data.achieve;

    // Tech tags
    const techContainer = document.getElementById("modalTech");
    techContainer.innerHTML = data.tech
      .map((t) => `<span>${t}</span>`)
      .join("");

    // GitHub link
    const githubBtn = document.getElementById("modalGithub");
    githubBtn.href = data.github;

    // Video
    const videoSource = projectVideo.querySelector("source");
    if (data.video) {
      videoSource.src = data.video;
      projectVideo.load();
      projectVideo.parentElement.style.display = "block";
    } else {
      videoSource.src = "";
      projectVideo.parentElement.style.display = "none";
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    // Pause video when closing
    projectVideo.pause();
    projectVideo.currentTime = 0;
  }

  // Click on project cards to open modal
  document.querySelectorAll(".bento-project[data-project]").forEach((card) => {
    card.addEventListener("click", (e) => {
      // Don't open modal if clicking the GitHub link
      if (e.target.closest(".project-link")) return;
      openProjectModal(card.dataset.project);
    });
  });

  // Close modal
  if (modalClose) {
    modalClose.addEventListener("click", closeProjectModal);
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
    if (
      e.key === "Escape" &&
      skillModal &&
      skillModal.classList.contains("active")
    ) {
      closeSkillModal();
    }
  });

  // ============================================
  // SKILL DETAIL MODAL
  // ============================================
  const skillData = {
    "python-php": {
      title: "Python / PHP",
      icon: "fab fa-python",
      iconBg: "rgba(108, 92, 231, 0.15)",
      iconColor: "#a29bfe",
      percent: 85,
      category: "Lập trình & Framework",
      level: "Advanced",
      gradient: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
      desc: "Thành thạo Python và PHP cho backend development. Xây dựng RESTful API, xử lý logic nghiệp vụ phức tạp, tích hợp AI/ML và quản lý hệ thống server-side với hiệu suất cao.",
      subskills: [
        { name: "Flask", level: 90 },
        { name: "Django", level: 75 },
        { name: "Laravel", level: 80 },
        { name: "REST API", level: 88 },
        { name: "OOP", level: 85 },
        { name: "Web Scraping", level: 70 },
      ],
      experience: [
        "Phát triển backend VieGo Blog với Flask — 28+ route files, 30+ models",
        "Xây dựng hệ thống xác thực & phân quyền 6 vai trò người dùng",
        "Tích hợp OpenAI API cho gợi ý tour du lịch cá nhân hóa",
        "Phát triển SportLife backend với Laravel 10 — Filament Admin Dashboard",
      ],
      projects: [
        "VieGo — Travel & Blog Platform",
        "SportLife — Sports Prediction App",
        "PETHUB — Quản lý Khách sạn Thú cưng",
      ],
    },
    "react-nextjs": {
      title: "React.js / Next.js",
      icon: "fab fa-react",
      iconBg: "rgba(0, 206, 201, 0.15)",
      iconColor: "#55efc4",
      percent: 80,
      category: "Lập trình & Framework",
      level: "Advanced",
      gradient: "linear-gradient(135deg, #00cec9, #55efc4)",
      desc: "Xây dựng giao diện người dùng hiện đại với React.js và Next.js. Chuyên về SPA, SSR/SSG, component architecture, state management và responsive design.",
      subskills: [
        { name: "React.js", level: 82 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "TailwindCSS", level: 88 },
        { name: "State Management", level: 78 },
        { name: "SSR / SSG", level: 76 },
      ],
      experience: [
        "Frontend VieGo Blog với Next.js + TypeScript — giao diện du lịch & blog",
        "Dashboard quản lý PetHub với Next.js + Tailwind CSS",
        "Thiết kế component library tái sử dụng cho nhiều dự án",
        "Tối ưu SEO và hiệu suất với Server-Side Rendering",
      ],
      projects: [
        "VieGo — Travel & Blog Platform",
        "PETHUB — Quản lý Khách sạn Thú cưng",
      ],
    },
    "sql-db": {
      title: "SQL / MySQL / MongoDB",
      icon: "fas fa-database",
      iconBg: "rgba(253, 121, 168, 0.15)",
      iconColor: "#fab1d0",
      percent: 75,
      category: "Lập trình & Framework",
      level: "Intermediate+",
      gradient: "linear-gradient(135deg, #fd79a8, #fab1d0)",
      desc: "Thiết kế và quản lý cơ sở dữ liệu quan hệ & NoSQL. Chuyên về thiết kế ERD, chuẩn hóa dữ liệu, tối ưu truy vấn và đảm bảo tính toàn vẹn dữ liệu.",
      subskills: [
        { name: "MySQL", level: 80 },
        { name: "SQL Server", level: 75 },
        { name: "Oracle DB", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "ERD Design", level: 82 },
        { name: "Query Optimization", level: 72 },
      ],
      experience: [
        "Thiết kế 30+ database models cho VieGo Blog với MySQL",
        "Oracle Database chuẩn 3NF cho PetHub — 3 Triggers, 3 Stored Procedures",
        "Database 25+ bảng cho SportLife — quản lý đội bóng, trận đấu, mùa giải",
        "Thiết kế ERD & chuẩn hóa 3NF cho hệ thống quản lý cửa hàng với SQL Server",
      ],
      projects: [
        "VieGo — Travel & Blog Platform",
        "PETHUB — Quản lý Khách sạn Thú cưng",
        "SportLife — Sports Prediction App",
        "Quản lý Cửa hàng",
      ],
    },
    powerbi: {
      title: "Power BI / Analytics",
      icon: "fas fa-chart-bar",
      iconBg: "rgba(253, 203, 110, 0.15)",
      iconColor: "#ffeaa7",
      percent: 85,
      category: "Phân tích & Quản lý",
      level: "Advanced",
      gradient: "linear-gradient(135deg, #fdcb6e, #ffeaa7)",
      desc: "Phân tích dữ liệu và trực quan hóa với Power BI. Xây dựng dashboard tương tác, viết DAX measures phức tạp, data modeling và theo dõi KPI hiệu quả.",
      subskills: [
        { name: "Power BI Desktop", level: 88 },
        { name: "DAX", level: 82 },
        { name: "Data Modeling", level: 85 },
        { name: "Power Query / M", level: 78 },
        { name: "Excel Analytics", level: 80 },
        { name: "KPI Dashboard", level: 86 },
      ],
      experience: [
        "Xây dựng dashboard phân tích doanh thu và hiệu suất kinh doanh",
        "Viết DAX measures phức tạp cho tính toán KPI và trend analysis",
        "Thiết kế data model star schema cho reporting hiệu quả",
        "Tích hợp multiple data sources và ETL pipeline với Power Query",
      ],
      projects: [],
    },
    "agile-uml": {
      title: "Agile / Scrum / UML",
      icon: "fas fa-project-diagram",
      iconBg: "rgba(116, 185, 255, 0.15)",
      iconColor: "#a3cfff",
      percent: 80,
      category: "Phân tích & Quản lý",
      level: "Advanced",
      gradient: "linear-gradient(135deg, #74b9ff, #0984e3)",
      desc: "Áp dụng phương pháp Agile/Scrum trong quản lý dự án phần mềm. Phân tích yêu cầu với UML diagrams, viết User Story, quản lý Sprint và đảm bảo chất lượng product.",
      subskills: [
        { name: "Scrum Framework", level: 82 },
        { name: "User Story", level: 85 },
        { name: "Use Case Diagram", level: 80 },
        { name: "Activity Diagram", level: 78 },
        { name: "Sprint Planning", level: 80 },
        { name: "Requirement Analysis", level: 83 },
      ],
      experience: [
        "Quản lý Sprint và backlog cho dự án VieGo — team 2 thành viên",
        "Viết User Story và Acceptance Criteria cho nhiều dự án",
        "Thiết kế Use Case và Activity Diagram cho hệ thống phức tạp",
        "Áp dụng Agile methodology xuyên suốt 12+ dự án thực tế",
      ],
      projects: [
        "VieGo — Travel & Blog Platform",
        "SportLife — Sports Prediction App",
        "Tasky — Task Management App",
      ],
    },
    erp: {
      title: "ERP (SAP / Odoo)",
      icon: "fas fa-cogs",
      iconBg: "rgba(255, 118, 117, 0.15)",
      iconColor: "#ffadac",
      percent: 50,
      category: "Phân tích & Quản lý",
      level: "Beginner+",
      gradient: "linear-gradient(135deg, #ff7675, #d63031)",
      desc: "Kiến thức nền tảng về hệ thống ERP, workflow quản lý doanh nghiệp và business process. Hiểu biết về các module chính trong SAP và Odoo.",
      subskills: [
        { name: "SAP Basics", level: 50 },
        { name: "Odoo Modules", level: 55 },
        { name: "Business Process", level: 60 },
        { name: "Workflow Design", level: 55 },
        { name: "Module Integration", level: 45 },
        { name: "ERP Concepts", level: 58 },
      ],
      experience: [
        "Tìm hiểu module quản lý bán hàng, kho hàng và nhân sự trong SAP",
        "Thực hành cấu hình workflow cơ bản trên Odoo",
        "Nghiên cứu business process mapping cho hệ thống doanh nghiệp",
        "Hiểu biết về tích hợp các module ERP trong quy trình kinh doanh",
      ],
      projects: [],
    },
    "figma-design": {
      title: "Figma / Draw.io / Visio",
      icon: "fab fa-figma",
      iconBg: "rgba(85, 239, 196, 0.15)",
      iconColor: "#7fffd4",
      percent: 80,
      category: "Công cụ & Thiết kế",
      level: "Advanced",
      gradient: "linear-gradient(135deg, #55efc4, #00b894)",
      desc: "Thiết kế UI/UX chuyên nghiệp với Figma, vẽ flowchart và system design với Draw.io & Visio. Tạo wireframe, mockup, prototype và tài liệu kỹ thuật trực quan.",
      subskills: [
        { name: "Figma", level: 82 },
        { name: "Draw.io", level: 80 },
        { name: "MS Visio", level: 75 },
        { name: "Wireframing", level: 84 },
        { name: "Prototyping", level: 78 },
        { name: "System Design", level: 76 },
      ],
      experience: [
        "Thiết kế UI/UX cho VieGo Blog — giao diện du lịch & blog modern",
        "Vẽ flowchart và system architecture cho nhiều dự án",
        "Tạo wireframe và mockup cho ứng dụng di động SportLife & Tasky",
        "Thiết kế database diagram và system design documentation",
      ],
      projects: [
        "VieGo — Travel & Blog Platform",
        "SportLife — Sports Prediction App",
        "Tasky — Task Management App",
      ],
    },
    "git-tools": {
      title: "Git / Jira / Trello",
      icon: "fab fa-git-alt",
      iconBg: "rgba(162, 155, 254, 0.15)",
      iconColor: "#c8c3ff",
      percent: 75,
      category: "Công cụ & Thiết kế",
      level: "Intermediate+",
      gradient: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      desc: "Quản lý source code với Git, theo dõi tiến độ dự án với Jira & Trello. Áp dụng branching strategy, code review, CI/CD pipeline và Kanban board hiệu quả.",
      subskills: [
        { name: "Git / GitHub", level: 80 },
        { name: "Jira", level: 72 },
        { name: "Trello", level: 78 },
        { name: "CI/CD Basics", level: 65 },
        { name: "Code Review", level: 75 },
        { name: "Branch Strategy", level: 74 },
      ],
      experience: [
        "Quản lý 12+ repositories trên GitHub với branching strategy",
        "Sử dụng Jira cho sprint board và issue tracking",
        "Quản lý task và workflow với Trello Kanban board",
        "Áp dụng Git Flow cho teamwork trong dự án VieGo",
      ],
      projects: [
        "VieGo — Travel & Blog Platform",
        "SportLife — Sports Prediction App",
        "PETHUB — Quản lý Khách sạn Thú cưng",
      ],
    },
  };

  const skillModal = document.getElementById("skillModal");
  const skillModalClose = document.getElementById("skillModalClose");

  function openSkillModal(skillId) {
    const data = skillData[skillId];
    if (!data) return;

    // Icon
    const iconEl = document.getElementById("skillModalIcon");
    iconEl.innerHTML = `<i class="${data.icon}"></i>`;
    iconEl.style.background = data.iconBg;
    iconEl.style.color = data.iconColor;

    // Circular progress ring
    const ring = document.getElementById("skillRingFill");
    const circumference = 2 * Math.PI * 52; // r=52
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;
    ring.style.stroke = data.iconColor;

    // Animate the ring after a brief delay
    requestAnimationFrame(() => {
      setTimeout(() => {
        const offset = circumference - (data.percent / 100) * circumference;
        ring.style.strokeDashoffset = offset;
      }, 100);
    });

    // Percent
    const percentEl = document.getElementById("skillModalPercent");
    percentEl.textContent = "0%";
    percentEl.style.color = data.iconColor;
    // Animate count up
    let currentPercent = 0;
    const percentTimer = setInterval(() => {
      currentPercent += 2;
      if (currentPercent >= data.percent) {
        currentPercent = data.percent;
        clearInterval(percentTimer);
      }
      percentEl.textContent = currentPercent + "%";
    }, 20);

    // Title & category
    document.getElementById("skillModalTitle").textContent = data.title;
    document.getElementById("skillModalCategory").textContent = data.category;

    // Level badge
    const levelBadge = document.getElementById("skillModalLevelBadge");
    levelBadge.style.background = data.iconBg;
    levelBadge.style.color = data.iconColor;
    document.getElementById("skillModalLevelText").textContent = data.level;

    // Description
    document.getElementById("skillModalDesc").textContent = data.desc;

    // Sub-skills with animated mini bars
    const subContainer = document.getElementById("skillModalSubskills");
    subContainer.innerHTML = data.subskills
      .map(
        (s, i) => `
      <div class="skill-modal-subskill" style="animation-delay: ${i * 0.08}s">
        <div class="subskill-header">
          <span class="subskill-name">${s.name}</span>
          <span class="subskill-pct">${s.level}%</span>
        </div>
        <div class="subskill-bar">
          <div class="subskill-bar-fill" style="--target-width: ${s.level}%; background: ${data.gradient}"></div>
        </div>
      </div>`,
      )
      .join("");

    // Trigger bar animations
    requestAnimationFrame(() => {
      setTimeout(() => {
        subContainer.querySelectorAll(".subskill-bar-fill").forEach((bar) => {
          bar.style.width = bar.style.getPropertyValue("--target-width");
        });
      }, 200);
    });

    // Experience highlights
    const expContainer = document.getElementById("skillModalExp");
    expContainer.innerHTML = data.experience
      .map(
        (e, i) =>
          `<li style="animation-delay: ${i * 0.1}s"><i class="fas fa-check-circle"></i> ${e}</li>`,
      )
      .join("");

    // Projects
    const projContainer = document.getElementById("skillModalProjects");
    if (data.projects.length > 0) {
      projContainer.innerHTML = data.projects
        .map(
          (p) =>
            `<span class="skill-modal-project-tag"><i class="fas fa-cube"></i> ${p}</span>`,
        )
        .join("");
      projContainer.parentElement.style.display = "";
    } else {
      projContainer.parentElement.style.display = "none";
    }

    skillModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeSkillModal() {
    skillModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Click on skill cards to open modal
  document.querySelectorAll(".skill-card[data-skill]").forEach((card) => {
    card.style.cursor = "pointer";
    // Add click hint
    const hint = document.createElement("span");
    hint.className = "skill-click-hint";
    hint.innerHTML = '<i class="fas fa-expand"></i> Chi tiết';
    card.appendChild(hint);

    card.addEventListener("click", () => {
      openSkillModal(card.dataset.skill);
    });
  });

  // Close skill modal
  if (skillModalClose) {
    skillModalClose.addEventListener("click", closeSkillModal);
  }
  if (skillModal) {
    skillModal.addEventListener("click", (e) => {
      if (e.target === skillModal) closeSkillModal();
    });
  }

  console.log(
    "%c✨ Designed with passion by Ngọc Thiên",
    "color: #6c5ce7; font-size: 14px; font-weight: bold;",
  );
})();
