import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedGradient from "@/components/effects/AnimatedGradient";
import FloatingIcons from "@/components/effects/FloatingIcons";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Thạch Văn Ngọc Thiên - Blog Lập Trình",
  description:
    "Blog cá nhân chia sẻ kiến thức về lập trình mạng, Java và JavaScript",
  keywords: [
    "blog",
    "programming",
    "java",
    "javascript",
    "network-programming",
  ],
  authors: [{ name: "Thạch Văn Ngọc Thiên" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <AnimatedGradient />
          <ScrollProgress />
          <Navbar />
          <main className="pt-20 pb-16 px-4 md:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
