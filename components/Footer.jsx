import { personalInfo } from "@/data/profile.js";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 py-10 text-gray-600 dark:text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {personalInfo.fullName}
          </p>
          <p className="max-w-sm text-sm">
            Blog cá nhân chia sẻ kiến thức lập trình mạng, Java và JavaScript.
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Liên hệ
          </p>
          <p>
            Email:{" "}
            <a
              className="hover:text-primary-600 dark:hover:text-primary-400"
              href={`mailto:${personalInfo.email}`}
            >
              {personalInfo.email}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              className="hover:text-primary-600 dark:hover:text-primary-400"
              href={`tel:${personalInfo.phone}`}
            >
              {personalInfo.phone}
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Kết nối
          </p>
          <ul className="space-y-1">
            {personalInfo.socials.map((item) => (
              <li key={item.label}>
                <a
                  className="hover:text-primary-600 dark:hover:text-primary-400"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
        © {year} {personalInfo.fullName}. Designed & built with React + Tailwind
        CSS.
      </p>
    </footer>
  );
};

export default Footer;
