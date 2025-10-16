import Link from "next/link";

const Callout = () => {
  return (
    <section className="mt-16 rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-gray-900/50 md:flex md:items-center md:justify-between transition-colors duration-300">
      <div className="max-w-2xl space-y-3">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Tham gia cộng đồng học lập trình mạng
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Hàng tuần mình sẽ cập nhật những bài viết mới về Spring Boot, Node.js,
          WebSocket, CI/CD và rất nhiều mẹo học tập hiệu quả. Hãy thường xuyên
          ghé thăm hoặc gửi email nếu bạn muốn trao đổi các chủ đề chuyên sâu
          hơn.
        </p>
      </div>
      <Link
        href="/about"
        className="mt-6 inline-flex items-center rounded-full bg-primary-600 dark:bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-700 dark:hover:bg-primary-600 md:mt-0"
      >
        Kết nối với mình
      </Link>
    </section>
  );
};

export default Callout;
