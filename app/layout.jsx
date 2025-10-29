import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Suspense, lazy } from "react";
const AnimatedGradient = lazy(() =>
  import("@/components/effects/AnimatedGradient")
);
const FloatingIcons = lazy(() => import("@/components/effects/FloatingIcons"));
const ParticlesBackground = lazy(() =>
  import("@/components/effects/ParticlesBackground")
);
const WaveBackground = lazy(() =>
  import("@/components/effects/WaveBackground")
);
const FloatingShapes = lazy(() =>
  import("@/components/effects/FloatingShapes")
);
const LoadingScreen = lazy(() => import("@/components/effects/LoadingScreen"));
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
          {/* Global effects (rendered client-side, lazy loaded) */}
          <Suspense fallback={null}>
            <AnimatedGradient />
            <ParticlesBackground />
            <WaveBackground />
            <FloatingShapes />
            <FloatingIcons />
            <LoadingScreen />
          </Suspense>
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
