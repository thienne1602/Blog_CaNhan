const nav = document.querySelector(".head-nav");
const navButtons = nav ? [...nav.querySelectorAll(".nav-btn")] : [];
const navHighlight = nav ? nav.querySelector(".nav-highlight") : null;
const track = document.getElementById("track");
const slides = track ? [...track.querySelectorAll(".slide")] : [];
const slideCount = Math.min(slides.length, navButtons.length);
const viewport = document.getElementById("viewport");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const skillRows = [...document.querySelectorAll("#skillChart .skill-row")];
const skillRadar = document.getElementById("skillRadar");
const skillRadarLegend = document.getElementById("skillRadarLegend");
const skillRadarFocus = document.getElementById("skillRadarFocus");

const reducedMotion = globalThis.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const spring = 0.18;

let index = 0;
let isRunning = false;
let activeSkillRow = null;

const i18n = {
  vi: {
    page_title: "THẠCH VĂN NGỌC THIÊN · PORTFOLIO",
    skip_link: "Bỏ qua điều hướng, tới nội dung chính",
    brand: "THIEN PORTFOLIO",
    head_note: "AUTO · 8S",
    nav_home: "Mở đầu",
    nav_about: "Kỹ năng",
    nav_radar: "Sơ đồ tổng quát",
    nav_education: "Học vấn",
    nav_certificates: "Chứng chỉ",
    nav_achievements: "Thành tựu",
    nav_projects: "Dự án",
    nav_exp: "Sở thích",
    nav_cert: "CV & Liên hệ",
    nav_hobby: "Liên hệ",
    nav_cv: "Liên hệ",
    nav_contact: "Liên hệ",
    theme_toggle: "Chuyển chế độ sáng tối",
    lang_toggle: "Đổi ngôn ngữ",
    prev: "Slide trước",
    next: "Slide sau",
    pause: "Tạm dừng tự động",
    play: "Tiếp tục tự động",
    s0_kicker: "Mở đầu",
    s0_title: "Xin chào, tôi là Thạch Văn Ngọc Thiên.",
    s0_desc:
      "Tôi là sinh viên năm cuối chuyên ngành Hệ thống Thông tin, sở hữu GPA 3.0/4.0 cùng nền tảng kỹ thuật thực tế với SQL và Python.",
    s0_desc2:
      "Với kinh nghiệm dẫn dắt đội ngũ và đạt giải Nhất cuộc thi Tài năng CNTT (2025), tôi đam mê giải quyết bài toán nghiệp vụ phức tạp bằng công nghệ. Từ kiến thức tích lũy tại trường, tôi mong muốn ứng tuyển vị trí Business Analyst Intern để học hỏi và đóng góp kỹ năng phân tích dữ liệu, phân tích hệ thống cùng tinh thần cầu tiến vào sự phát triển của Quý Công ty.",
    s0_chip1: "Business Analyst Intern",
    s0_chip2: "Sinh viên HUTECH",
    s0_chip3: "Sẵn sàng đi làm: 04/2026",
    s0_btn_vi: "CV Tiếng Việt",
    s0_btn_en: "CV Tiếng Anh",
    s0_btn_contact: "Liên hệ ngay",
    s1_kicker: "Kỹ năng",
    s1_title: "Năng lực cốt lõi cho Business Analyst Intern.",
    s1_hint:
      "Chọn từng năng lực để xem mức độ thành thạo trên sơ đồ tổng quát.",
    s1_radar_title: "Sơ đồ tổng quát năng lực",
    s1_skill1: "Phân tích yêu cầu & Stakeholder",
    s1_level1: "92%",
    s1_detail1:
      "Dẫn dắt elicitation/workshop, phân tích pain point và ưu tiên yêu cầu theo mục tiêu sản phẩm.",
    s1_skill2: "Phân tích hệ thống & mô hình quy trình",
    s1_level2: "90%",
    s1_detail2:
      "Chuẩn hóa As-Is/To-Be, BPMN/UML, use case và luồng liên phòng ban để đồng bộ triển khai.",
    s1_skill3: "Quản lý dự án CNTT & điều phối nhóm",
    s1_level3: "89%",
    s1_detail3:
      "Theo dõi kế hoạch, phân vai, bám tiến độ và kết nối nhóm Business - Dev - QA hiệu quả.",
    s1_skill4: "SQL & Python cho phân tích dữ liệu",
    s1_level4: "80%",
    s1_detail4:
      "Khai thác dữ liệu bằng SQL/Python, kiểm chứng insight và hỗ trợ quyết định nghiệp vụ.",
    s1_skill5: "Tài liệu BA (BRD, SRS, User Story)",
    s1_level5: "86%",
    s1_detail5:
      "Viết tài liệu rõ ràng, có traceability và tiêu chí nghiệm thu cụ thể cho từng yêu cầu.",
    s1_skill6: "Giao tiếp & làm việc liên phòng ban",
    s1_level6: "88%",
    s1_detail6:
      "Giao tiếp rõ ràng giữa Business, Design, Dev, QA để giảm lệch yêu cầu và giữ chất lượng bàn giao.",
    s1_band_expert: "Xuất sắc",
    s1_band_advanced: "Nâng cao",
    s1_band_good: "Tốt",
    s2_kicker: "Học vấn",
    s2_title: "Học vấn tại HUTECH.",
    s2_spot_title: "HUTECH · Information Systems",
    s2_spot_desc:
      "Nền tảng học thuật được hệ thống theo mốc thời gian rõ ràng.",
    s2_desc:
      "Tập trung vào quá trình học ngành Hệ thống Thông tin tại HUTECH và các học phần gắn trực tiếp với định hướng Business Analyst.",
    s2_group1: "Học vấn",
    s2_group2: "Chứng chỉ",
    s2_group3: "Thành tựu",
    s2_e1_time: "2023 — 12/2026",
    s2_e1_title: "Hệ thống Thông tin · HUTECH",
    s2_e1_desc:
      "GPA 3.0/4.0 với trọng tâm BA, cơ sở dữ liệu và thiết kế hệ thống.",
    s2_e2_time: "Môn học nổi bật",
    s2_e2_title: "System Analysis & Design, IT Project Management",
    s2_e2_desc: "Ứng dụng kiến thức qua case study và đồ án thực tế.",
    s2_c1_time: "2024 — 2025",
    s2_c1_title: "Tiếng Anh CEF chuẩn B1",
    s2_c1_desc: "Củng cố năng lực đọc hiểu tài liệu và giao tiếp chuyên môn.",
    s2_c2_time: "2025",
    s2_c2_title: "Google AI Essentials",
    s2_c2_desc:
      "Mở rộng tư duy dữ liệu, AI và ứng dụng vào phân tích nghiệp vụ.",
    s2_c3_time: "2025",
    s2_c3_title: "Discover the Art of Prompting",
    s2_c3_desc: "Kỹ năng thiết kế câu lệnh AI.",
    s2_c4_time: "2025",
    s2_c4_title: "Maximize Productivity With AI Tools",
    s2_c4_desc: "Tối ưu hóa hiệu suất làm việc bằng công cụ AI.",
    s2_c5_time: "2025",
    s2_c5_title: "Stay Ahead of the AI Curve",
    s2_c5_desc: "Đón đầu xu hướng công nghệ AI cập nhật.",
    s2_c6_time: "2025",
    s2_c6_title: "Use AI Responsibly",
    s2_c6_desc: "Sử dụng trí tuệ nhân tạo một cách có trách nhiệm.",
    s2_a1_time: "2025",
    s2_a1_title: "Giải Nhất Tài năng CNTT lần 10",
    s2_a1_desc: "Khẳng định năng lực giải quyết bài toán nghiệp vụ thực tế.",
    s2_a2_time: "2025",
    s2_a2_title: "Đồ án VieGo đạt điểm tối đa",
    s2_a2_desc: "Hoàn thiện từ BA artifacts đến triển khai kỹ thuật.",
    s2_stat1: "GPA",
    s2_stat2: "Năm đào tạo",
    s2_stat3: "Học phần trọng tâm",
    s2_stat4: "Môi trường học tập",
    s2_m1: "Đại học Công nghệ TP.HCM",
    s2_m2: "Hệ thống Thông tin",
    s2_m3: "Giải Nhất CNTT",
    s2_m4: "Điểm tối đa đồ án",
    s2c_title: "Chứng chỉ chuyên môn.",
    s2c_desc:
      "Tổng hợp các chứng chỉ đã hoàn thành để củng cố nền tảng ngôn ngữ, dữ liệu và tư duy AI phục vụ công việc BA.",
    s2c_group1: "Chứng chỉ",
    s2_c_view: "Xem chứng chỉ",
    s2c_stat1: "Chứng chỉ hoàn thành",
    s2c_stat2: "Mức tiếng Anh",
    s2c_stat3: "Năng lực bổ trợ",
    s2c_stat4: "Mốc gần nhất",
    s2c_m1_num: "Certification",
    s2c_m1: "Năng lực được xác nhận",
    s2c_m2: "B1 English",
    s2c_m3: "Google AI Essentials",
    s2c_m4: "Sẵn sàng dự án thực tế",
    s2a_title: "Thành tựu nổi bật.",
    s2a_desc:
      "Các cột mốc nổi bật trong hành trình học tập và tham gia hoạt động, thể hiện khả năng triển khai và làm việc nhóm.",
    s2a_group1: "Thành tựu",
    s2a_stat1: "Giải thưởng",
    s2a_stat2: "Điểm đồ án",
    s2a_stat3: "Cột mốc chính",
    s2a_stat4: "Năm nổi bật",
    s2a_m1: "Giải Nhất Tài năng CNTT lần 10",
    s2a_m2: "VieGo đạt điểm tối đa đồ án",
    s3_kicker: "Dự án",
    s3_title: "Dự án nổi bật từ GitHub.",
    s3_desc:
      "Tổng hợp các sản phẩm tiêu biểu đã triển khai, trong đó VieGo là dự án trọng tâm thể hiện năng lực BA + kỹ thuật.",
    s3_viego_badge: "Flagship",
    s3_viego_title: "VieGo — Travel & Blog Platform",
    s3_viego_desc:
      "Nền tảng blog du lịch & ẩm thực tích hợp quản lý tour, real-time chat và luồng nghiệp vụ đa mô-đun.",
    s3_viego_chip1: "30+ DB models",
    s3_viego_chip2: "28+ routes",
    s3_viego_chip3: "Socket.IO realtime",
    s3_btn_viego: "Xem VieGo",
    s3_pethub_desc:
      "Hệ thống quản lý khách sạn thú cưng tích hợp Oracle Database, trigger và stored procedure.",
    s3_sportlife_desc:
      "Ứng dụng dự đoán bóng đá với gamification, Flutter + Laravel, thông báo realtime.",
    s3_tasky_desc:
      "Ứng dụng quản lý công việc đa nền tảng bằng Flutter và Node.js.",
    s3_game_desc:
      "Game 2D RPG bằng Godot Engine với title effects, settings và quản lý người dùng.",
    s3_store_desc:
      "Website ASP.NET quản lý bán hàng, kho và báo cáo doanh thu với database chuẩn hóa.",
    s3_btn_repo: "GitHub Repo",
    s5_kicker: "CV",
    s5_title: "CV và thông tin liên hệ.",
    s5_desc:
      "Tất cả thông tin CV và liên hệ được gộp tại đây để xem nhanh, tải xuống và kết nối trực tiếp.",
    s5_t1_time: "Email",
    s5_t1_desc: "ngocthien160224@gmail.com",
    s5_t2_time: "Điện thoại",
    s5_t2_desc: "0948 283 916",
    s5_t3_time: "GitHub",
    s5_t3_desc: "github.com/thienne1602",
    s5_t4_time: "LinkedIn",
    s5_t4_desc: "linkedin.com/in/thachvanngocthien",
    s5_btn_vi: "Tải CV Tiếng Việt",
    s5_btn_en: "Tải CV Tiếng Anh",
    s5_btn_view_vi: "Xem Tiếng Việt",
    s5_btn_view_en: "Xem Tiếng Anh",
    s5_btn_mail: "Gửi email",
    s5_btn_call: "Gọi điện",
    s5_btn_git: "GitHub",
    s5_btn_web: "Portfolio",
    s6_kicker: "Liên hệ",
    s6_title: "Hãy cùng tạo nên điều phi thường.",
    s6_desc:
      "Bạn có một ý tưởng tuyệt vời? Hãy biến nó thành hiện thực cùng tôi.",
    s6_t1_time: "Email",
    s6_t1_desc: "ngocthien160224@gmail.com",
    s6_t2_time: "Điện thoại",
    s6_t2_desc: "0948 283 916",
    s6_t3_time: "Triết lý",
    s6_t3_desc:
      "Phân tích giỏi là biết lắng nghe nhu cầu, biến yêu cầu mơ hồ thành giải pháp rõ ràng.",
    s6_t4_time: "Đam mê",
    s6_t4_desc:
      "Phát triển web, nghiên cứu AI, phân tích nhu cầu khách hàng và xu hướng thị trường.",
    s6_btn_mail: "Gửi email",
    s6_btn_call: "Gọi điện",
    s6_btn_git: "GitHub",
    s6_btn_web: "Portfolio",
  },
  en: {
    page_title: "THACH VAN NGOC THIEN · PORTFOLIO",
    skip_link: "Skip navigation and go to main content",
    brand: "THIEN PORTFOLIO",
    head_note: "AUTO · 8S",
    nav_home: "Home",
    nav_about: "Skills",
    nav_radar: "Overview chart",
    nav_education: "Education",
    nav_certificates: "Certificates",
    nav_achievements: "Achievements",
    nav_projects: "Projects",
    nav_exp: "Interests",
    nav_cert: "CV & Contact",
    nav_hobby: "Contact",
    nav_cv: "Contact",
    nav_contact: "Contact",
    theme_toggle: "Toggle dark and light mode",
    lang_toggle: "Switch language",
    prev: "Previous slide",
    next: "Next slide",
    pause: "Pause autoplay",
    play: "Resume autoplay",
    s0_kicker: "Intro",
    s0_title: "Hi, I'm Thach Van Ngoc Thien.",
    s0_desc:
      "I am a final-year Information Systems student with a GPA of 3.0/4.0 and practical technical foundations in SQL and Python.",
    s0_desc2:
      "With team-leading experience and First Prize at the 2025 IT Talent competition, I am passionate about solving complex business problems with technology. I am applying for the Business Analyst Intern role to keep learning and contribute data-analysis and systems-analysis skills with a strong growth mindset.",
    s0_chip1: "Business Analyst Intern",
    s0_chip2: "HUTECH Student",
    s0_chip3: "Available from: Apr 2026",
    s0_btn_vi: "Vietnamese CV",
    s0_btn_en: "English CV",
    s0_btn_contact: "Contact now",
    s1_kicker: "Skills",
    s1_title: "Core capabilities for a Business Analyst Intern.",
    s1_hint:
      "Select each capability to view proficiency on the overview chart.",
    s1_radar_title: "Skill overview chart",
    s1_skill1: "Requirement Analysis & Stakeholder Management",
    s1_level1: "92%",
    s1_detail1:
      "Leading elicitation and workshops, identifying pain points, and prioritizing requirements.",
    s1_skill2: "Systems Analysis & Process Modeling",
    s1_level2: "90%",
    s1_detail2:
      "As-Is/To-Be mapping, BPMN/UML, use cases, and cross-functional process alignment.",
    s1_skill3: "IT Project Management & Team Coordination",
    s1_level3: "89%",
    s1_detail3:
      "Planning, task coordination, timeline follow-up, and smooth collaboration across teams.",
    s1_skill4: "SQL & Python for Data Analysis",
    s1_level4: "80%",
    s1_detail4:
      "SQL/Python-based data extraction, KPI validation, and insight support for business decisions.",
    s1_skill5: "BA Documentation (BRD, SRS, User Stories)",
    s1_level5: "86%",
    s1_detail5:
      "Clear documentation with traceability and measurable acceptance criteria.",
    s1_skill6: "Communication & Cross-functional Collaboration",
    s1_level6: "88%",
    s1_detail6:
      "Clear communication across Business, Design, Dev, and QA to keep alignment and delivery quality.",
    s1_band_expert: "Expert",
    s1_band_advanced: "Advanced",
    s1_band_good: "Good",
    s2_kicker: "Education",
    s2_title: "Education at HUTECH.",
    s2_spot_title: "HUTECH · Information Systems",
    s2_spot_desc:
      "Academic foundation is organized into clear timeline milestones.",
    s2_desc:
      "Focused on Information Systems study at HUTECH and coursework directly aligned with a Business Analyst path.",
    s2_group1: "Education",
    s2_group2: "Certificates",
    s2_group3: "Achievements",
    s2_e1_time: "2023 — 12/2026",
    s2_e1_title: "Information Systems · HUTECH",
    s2_e1_desc:
      "GPA 3.0/4.0 with focus on BA, database systems, and system design.",
    s2_e2_time: "Key coursework",
    s2_e2_title: "System Analysis & Design, IT Project Management",
    s2_e2_desc:
      "Applied concepts in practical case studies and capstone execution.",
    s2_c1_time: "2024 — 2025",
    s2_c1_title: "CEFR B1 English Certificate",
    s2_c1_desc:
      "Strengthened technical reading comprehension and professional communication.",
    s2_c2_time: "2025",
    s2_c2_title: "Google AI Essentials",
    s2_c2_desc:
      "Expanded data and AI thinking for business-analysis scenarios.",
    s2_c3_time: "2025",
    s2_c3_title: "Discover the Art of Prompting",
    s2_c3_desc: "Key skills in engineering effective AI prompts.",
    s2_c4_time: "2025",
    s2_c4_title: "Maximize Productivity With AI Tools",
    s2_c4_desc: "Optimizing workflow performance using AI tools.",
    s2_c5_time: "2025",
    s2_c5_title: "Stay Ahead of the AI Curve",
    s2_c5_desc: "Grasping cutting-edge AI technology trends.",
    s2_c6_time: "2025",
    s2_c6_title: "Use AI Responsibly",
    s2_c6_desc: "Applying artificial intelligence responsibly.",
    s2_a1_time: "2025",
    s2_a1_title: "First Prize — IT Talent Contest #10",
    s2_a1_desc:
      "Validated practical capability in solving real business-tech challenges.",
    s2_a2_time: "2025",
    s2_a2_title: "VieGo capstone with maximum score",
    s2_a2_desc:
      "Delivered end-to-end from BA artifacts to technical implementation.",
    s2_stat1: "GPA",
    s2_stat2: "Training years",
    s2_stat3: "Core coursework",
    s2_stat4: "Learning environment",
    s2_m1: "Ho Chi Minh City University of Technology",
    s2_m2: "Information Systems",
    s2_m3: "IT Talent First Prize",
    s2_m4: "Maximum capstone score",
    s2c_title: "Professional certificates.",
    s2c_desc:
      "A focused list of completed certificates that strengthen language, data, and AI thinking for BA work.",
    s2c_group1: "Certificates",
    s2_c_view: "View Certificate",
    s2c_stat1: "Certificates completed",
    s2c_stat2: "English level",
    s2c_stat3: "Supporting capability",
    s2c_stat4: "Latest milestone",
    s2c_m1_num: "Certification",
    s2c_m1: "Validated capability",
    s2c_m2: "B1 English",
    s2c_m3: "Google AI Essentials",
    s2c_m4: "Ready for real projects",
    s2a_title: "Key achievements.",
    s2a_desc:
      "Notable milestones across learning and competitions, reflecting execution and collaboration capability.",
    s2a_group1: "Achievements",
    s2a_stat1: "Awards",
    s2a_stat2: "Capstone score",
    s2a_stat3: "Core milestones",
    s2a_stat4: "Highlight year",
    s2a_m1: "First Prize — IT Talent Contest #10",
    s2a_m2: "VieGo capstone with maximum score",
    s3_kicker: "Projects",
    s3_title: "Featured projects from GitHub.",
    s3_desc:
      "A focused list of shipped products, with VieGo highlighted as the flagship BA + technical execution project.",
    s3_viego_badge: "Flagship",
    s3_viego_title: "VieGo — Travel & Blog Platform",
    s3_viego_desc:
      "A travel platform combining blog, tour booking, and real-time/social modules. Built as Team Leader with BA flow ownership and fullstack collaboration.",
    s3_viego_chip1: "30+ DB models",
    s3_viego_chip2: "28+ routes",
    s3_viego_chip3: "Socket.IO realtime",
    s3_btn_viego: "View VieGo",
    s3_pethub_desc:
      "Pet hotel management system using Oracle Database with triggers and stored procedures.",
    s3_sportlife_desc:
      "Football prediction app with gamification, Flutter + Laravel, and realtime notifications.",
    s3_tasky_desc:
      "Cross-platform task management app built with Flutter and Node.js, including User + Manager apps.",
    s3_game_desc:
      "2D RPG game built with Godot Engine including title effects and user settings.",
    s3_store_desc:
      "ASP.NET web system for sales, inventory, and revenue reports.",
    s3_btn_repo: "GitHub Repo",
    s5_kicker: "Resume",
    s5_title: "CV and contact details.",
    s5_desc:
      "All CV files and contact channels are merged here for quick viewing, downloading, and direct connection.",
    s5_t1_time: "Email",
    s5_t1_desc: "ngocthien160224@gmail.com",
    s5_t2_time: "Phone",
    s5_t2_desc: "0948 283 916",
    s5_t3_time: "GitHub",
    s5_t3_desc: "github.com/thienne1602",
    s5_t4_time: "LinkedIn",
    s5_t4_desc: "linkedin.com/in/thachvanngocthien",
    s5_btn_vi: "Download Vietnamese CV",
    s5_btn_en: "Download English CV",
    s5_btn_view_vi: "View Vietnamese CV",
    s5_btn_view_en: "View English CV",
    s5_btn_mail: "Send email",
    s5_btn_call: "Call",
    s5_btn_git: "GitHub",
    s5_btn_web: "Portfolio",
    s6_kicker: "Contact",
    s6_title: "Let's build something extraordinary.",
    s6_desc: "Have a great idea? Let's bring it to life together.",
    s6_t1_time: "Email",
    s6_t1_desc: "ngocthien160224@gmail.com",
    s6_t2_time: "Phone",
    s6_t2_desc: "0948 283 916",
    s6_t3_time: "Philosophy",
    s6_t3_desc:
      "Great analysis starts with listening, then turning ambiguity into clear solutions.",
    s6_t4_time: "Passion",
    s6_t4_desc:
      "Web development, AI research, customer-needs analysis, and market trends.",
    s6_btn_mail: "Send email",
    s6_btn_call: "Call",
    s6_btn_git: "GitHub",
    s6_btn_web: "Portfolio",
  },
};

const themeMeta = document.querySelector('meta[name="theme-color"]');
const isMobileHead = () =>
  globalThis.matchMedia(
    "(max-width: 900px), (max-aspect-ratio: 1/1), (max-height: 750px)",
  ).matches;

let currentLang = localStorage.getItem("lang") || "vi";
let currentTheme = localStorage.getItem("theme") || "dark";

const applyLanguage = (lang) => {
  currentLang = lang;
  const dict = i18n[lang];

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    if (dict[key]) {
      node.setAttribute("aria-label", dict[key]);
      if (node.classList.contains("nav-btn")) {
        node.dataset.title = dict[key];
      }
    }
  });

  document.querySelectorAll("[data-i18n-src]").forEach((node) => {
    const key = node.dataset.i18nSrc;
    if (dict[key]) {
      node.src = dict[key];
    }
  });

  document.documentElement.lang = lang;
  langLabel.textContent = lang === "vi" ? "EN" : "VI";
  localStorage.setItem("lang", lang);
  renderSkillRadar();
};

const applyTheme = (theme) => {
  currentTheme = theme;
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  themeIcon.textContent = isLight ? "light_mode" : "dark_mode";
  if (themeMeta) {
    themeMeta.setAttribute("content", isLight ? "#eef1ff" : "#090b16");
  }
  localStorage.setItem("theme", theme);
};

const current = { pos: 0, size: 0, opacity: 0 };
const target = { pos: 0, size: 0, opacity: 1 };

const renderHighlight = () => {
  if (!navHighlight) return;
  if (isMobileHead()) {
    navHighlight.style.transform = `translate3d(${current.pos}px, -50%, 0)`;
    navHighlight.style.width = `${current.size}px`;
    navHighlight.style.height = "calc(100% - 0.44rem)";
  } else {
    navHighlight.style.transform = `translate3d(-50%, ${current.pos}px, 0)`;
    navHighlight.style.height = `${current.size}px`;
    navHighlight.style.width = "calc(100% - 0.44rem)";
  }
  navHighlight.style.opacity = `${current.opacity}`;
};

const animateStep = () => {
  current.pos += (target.pos - current.pos) * spring;
  current.size += (target.size - current.size) * spring;
  current.opacity += (target.opacity - current.opacity) * spring;
  renderHighlight();

  const done =
    Math.abs(target.pos - current.pos) < 0.2 &&
    Math.abs(target.size - current.size) < 0.2 &&
    Math.abs(target.opacity - current.opacity) < 0.02;

  if (!done) {
    requestAnimationFrame(animateStep);
    return;
  }

  current.pos = target.pos;
  current.size = target.size;
  current.opacity = target.opacity;
  renderHighlight();
  isRunning = false;
};

const setHighlightTarget = (button, instant = false) => {
  if (!nav || !navHighlight || !button) return;
  const navRect = nav.getBoundingClientRect();
  const btnRect = button.getBoundingClientRect();
  const inset = 4;

  if (isMobileHead()) {
    target.pos = btnRect.left - navRect.left - inset;
    target.size = btnRect.width + inset * 2;
  } else {
    target.pos = btnRect.top - navRect.top - inset;
    target.size = btnRect.height + inset * 2;
  }
  target.opacity = 1;

  if (instant || reducedMotion) {
    current.pos = target.pos;
    current.size = target.size;
    current.opacity = target.opacity;
    renderHighlight();
    return;
  }

  if (!isRunning) {
    isRunning = true;
    requestAnimationFrame(animateStep);
  }
};

const setSlide = (nextIndex, fromUser = false) => {
  if (!track || slideCount === 0) return;
  index = (nextIndex + slideCount) % slideCount;
  track.style.transform = `translateX(-${index * 100}%)`;

  navButtons.forEach((button, buttonIndex) => {
    if (buttonIndex >= slideCount) {
      button.classList.remove("selected");
      button.disabled = true;
      button.setAttribute("aria-hidden", "true");
      button.tabIndex = -1;
      return;
    }

    button.disabled = false;
    button.removeAttribute("aria-hidden");
    button.tabIndex = 0;
    const active = buttonIndex === index;
    button.classList.toggle("selected", active);
    if (active) setHighlightTarget(button);
  });

  if (prevBtn && nextBtn) {
    if (index === slideCount - 1) {
      prevBtn.style.display = "grid";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "none";
      nextBtn.style.display = "grid";
    }
  }
};

const buildRadarPolygonPoints = (levels, radius, centerX, centerY, scale = 1) =>
  levels
    .map((level, idx) => {
      const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / levels.length;
      const distance = radius * (level / 100) * scale;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

const renderSkillRadar = () => {
  if (!skillRadar || !skillRows.length) return;

  const dict = i18n[currentLang] || {};
  const levels = skillRows.map((row) => Number(row.dataset.level || 0));
  const labels = skillRows.map((row) => dict[row.dataset.skillKey] || "");
  const activeIndex = Math.max(0, skillRows.indexOf(activeSkillRow));

  if (skillRadarFocus) {
    skillRadarFocus.textContent = `${levels[activeIndex]}%`;
  }

  const center = 160;
  const centerY = 140;
  const radius = 145;

  const ringCount = 5;
  const radarPoints = buildRadarPolygonPoints(levels, radius, center, centerY);

  const ringsMarkup = Array.from({ length: ringCount }, (_, idx) => {
    const ratio = (idx + 1) / ringCount;
    const ringLevels = levels.map(() => ratio * 100);
    const ringPoints = buildRadarPolygonPoints(
      ringLevels,
      radius,
      center,
      centerY,
    );
    return `<polygon class="radar-ring" points="${ringPoints}"></polygon>`;
  }).join("");

  const axisMarkup = levels
    .map((_, idx) => {
      const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / levels.length;
      const x = center + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      return `<line class="radar-axis" x1="${center}" y1="${centerY}" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}"></line>`;
    })
    .join("");

  const dotsMarkup = levels
    .map((level, idx) => {
      const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / levels.length;
      const distance = radius * (level / 100);
      const x = center + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      const activeClass = idx === activeIndex ? " active" : "";
      return `<circle class="radar-dot${activeClass}" data-index="${idx}" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${idx === activeIndex ? 6 : 4}"></circle>`;
    })
    .join("");

  skillRadar.innerHTML = `
    <g>
      ${ringsMarkup}
      ${axisMarkup}
      <polygon class="radar-area" points="${radarPoints}"></polygon>
      <polyline class="radar-outline" points="${radarPoints}"></polyline>
      ${dotsMarkup}
    </g>
  `;

  if (skillRadarLegend) {
    skillRadarLegend.innerHTML = labels
      .map((label, idx) => {
        if (idx !== activeIndex) return ""; // Only show active label
        const activeClass = " active"; // It's always active if it's shown

        return `<li class="radar-legend-item${activeClass}" data-index="${idx}" style="
          position: absolute;
          left: 50%;
          top: 45.2%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.25rem;
          min-width: max-content;
          max-width: 180px;
          z-index: 10;
          padding: 0.5rem 0.8rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(55, 229, 214, 0.4);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        ">
          <span class="radar-legend-level" style="font-size: 1.25rem; font-weight: 800; line-height: 1; color: #37e5d6;">${levels[idx]}%</span>
          <span class="radar-legend-label" style="font-size: 0.75rem; line-height: 1.25; white-space: normal; color: #fff;">${label}</span>
        </li>`;
      })
      .filter(Boolean)
      .join("");
  }
};

const setActiveSkillRow = (row) => {
  if (!row || activeSkillRow === row) return;
  activeSkillRow = row;

  skillRows.forEach((item) => {
    const selected = item === row;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });

  const skillLevelNode = row.querySelector(".skill-level");
  const skillFillNode = row.querySelector(".skill-fill");
  const skillLoadBadge = row.querySelector(".skill-load-badge");
  const targetLevel = Number(row.dataset.level || 0);

  if (skillFillNode) {
    skillFillNode.style.width = "0%";
    requestAnimationFrame(() => {
      skillFillNode.style.width = `${targetLevel}%`;
    });
  }

  let start = null;
  const duration = reducedMotion ? 0 : 650;
  const animateLevel = (timestamp) => {
    if (start === null) start = timestamp;
    const elapsedTime = timestamp - start;
    const progress = duration === 0 ? 1 : Math.min(elapsedTime / duration, 1);
    const currentLevel = Math.round(targetLevel * progress);
    const display = `${currentLevel}%`;

    if (skillLevelNode) skillLevelNode.textContent = display;
    if (skillLoadBadge) skillLoadBadge.textContent = display;

    if (progress < 1) {
      requestAnimationFrame(animateLevel);
      return;
    }

    const levelKey = row.dataset.levelKey;
    const dict = i18n[currentLang] || {};
    const finalLabel = dict[levelKey] || `${targetLevel}%`;
    if (skillLevelNode) skillLevelNode.textContent = finalLabel;
    if (skillLoadBadge) skillLoadBadge.textContent = `${targetLevel}%`;
  };

  requestAnimationFrame(animateLevel);
  renderSkillRadar();
};

const initSkillInteraction = () => {
  if (!skillRows.length) return;

  skillRows.forEach((row) => {
    row.addEventListener("click", () => {
      setActiveSkillRow(row);
    });
    row.addEventListener("mouseenter", () => {
      setActiveSkillRow(row);
    });

    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveSkillRow(row);
      }
    });
  });

  const handleRadarHover = (e) => {
    const target = e.target.closest(".radar-legend-item, .radar-dot");
    if (target) {
      const idx = parseInt(target.getAttribute("data-index"), 10);
      if (!isNaN(idx) && skillRows[idx]) {
        setActiveSkillRow(skillRows[idx]);
      }
    }
  };

  if (skillRadar) {
    skillRadar.addEventListener("mouseover", handleRadarHover);
  }
  if (skillRadarLegend) {
    skillRadarLegend.addEventListener("mouseover", handleRadarHover);
  }

  setActiveSkillRow(activeSkillRow || skillRows[0]);
};

navButtons.forEach((button, buttonIndex) => {
  if (buttonIndex >= slideCount) return;
  button.addEventListener("click", () => setSlide(buttonIndex, true));
  button.addEventListener("mouseenter", () => {
    setHighlightTarget(button);
  });
  button.addEventListener("focus", () => {
    setHighlightTarget(button);
  });
});

if (nav) {
  nav.addEventListener("mouseleave", () => {
    setHighlightTarget(navButtons[index]);
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (index === slideCount - 1) {
      // Bấm prev khi ở trang cuối => Quay về trang đầu
      setSlide(0, true);
    } else {
      setSlide(index - 1, true);
    }
  });
}
if (nextBtn) {
  nextBtn.addEventListener("click", () => setSlide(index + 1, true));
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "vi" ? "en" : "vi");
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setSlide(index + 1, true);
  if (event.key === "ArrowLeft") setSlide(index - 1, true);
});

globalThis.addEventListener("resize", () =>
  setHighlightTarget(navButtons[index], true),
);

initSkillInteraction();
applyTheme(currentTheme);
applyLanguage(currentLang);
setSlide(0);
setHighlightTarget(navButtons[0], true);
