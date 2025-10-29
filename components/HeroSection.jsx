"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/profile";
import GradientText from "@/components/effects/GradientText";
import ShinyText from "@/components/effects/ShinyText";
import MagneticButton from "@/components/effects/MagneticButton";
import ScrambleText from "@/components/effects/ScrambleText";
import TypewriterText from "@/components/effects/TypewriterText";
import ParticlesBackground from "@/components/effects/ParticlesBackground";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-6 py-16 text-white shadow-2xl md:px-12 min-h-[500px] flex items-center">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        <ParticlesBackground
          particleCount={30}
          particleColor="rgba(255, 255, 255, 0.6)"
          lineColor="rgba(255, 255, 255, 0.1)"
          particleSize={2}
          speed={0.3}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-20 h-48 w-48 rounded-full bg-pink-400/20 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 h-32 w-32 rounded-full bg-purple-400/20 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left: text column */}
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-5 py-2 text-sm backdrop-blur-md text-white shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} />
              </motion.div>
              <ShinyText
                text="Blog lập trình mạng - Java & JavaScript"
                speed={4}
              />
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                Xây dựng{" "}
                <span className="inline-block relative px-3 py-1 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
                  <GradientText className="inline bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                    ứng dụng mạng
                  </GradientText>
                </span>
                <br />
                hiện đại cùng{" "}
                <motion.span
                  className="inline-block"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 40px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ScrambleText text={personalInfo.fullName} />
                </motion.span>
              </h1>

              <motion.div
                className="text-2xl md:text-3xl font-light text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <TypewriterText
                  texts={[
                    "Full-stack Developer",
                    "Network Engineer",
                    "Tech Blogger",
                    "HUTECH Student",
                  ]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  delayBetween={2000}
                />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg leading-relaxed text-white/90 md:text-xl max-w-2xl backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/20"
            >
              Chia sẻ kinh nghiệm triển khai <strong>REST API</strong>,{" "}
              <strong>WebSocket realtime</strong>, tối ưu hiệu năng và{" "}
              <strong>DevOps</strong>. Tất cả những gì mình học được ở HUTECH và
              từ các dự án thực tế đều có mặt tại đây.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton strength={0.3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300"
                  >
                    <span>Khám phá bài viết</span>
                    <ArrowUpRight size={20} />
                  </Link>
                </motion.div>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Về Ngọc Thiên</span>
                  </Link>
                </motion.div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: avatar column (aligned with text) */}
          <div className="flex justify-center md:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-3 rotate-6 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-40 blur-xl" />
              <div className="relative rounded-full p-1 bg-gradient-to-tr from-indigo-400 via-pink-400 to-yellow-300">
                <div className="rounded-full bg-white/6 p-1">
                  <img
                    src={personalInfo.avatar || "/images/avatar.jpg"}
                    alt={`${personalInfo.fullName} - avatar`}
                    className="h-80 w-80 rounded-full object-cover shadow-2xl border border-white/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
