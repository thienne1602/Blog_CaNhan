"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/profile";
import GradientText from "@/components/effects/GradientText";
import ShinyText from "@/components/effects/ShinyText";
import MagneticButton from "@/components/effects/MagneticButton";
import ScrambleText from "@/components/effects/ScrambleText";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-primary dark:bg-gradient-to-br dark:from-indigo-900 dark:to-purple-900 px-6 py-12 text-gray-900 dark:text-white shadow-2xl md:px-12">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-20 md:block">
        <div className="absolute -right-6 top-8 h-48 w-48 rounded-full bg-white/20 dark:bg-white/20 blur-3xl" />
        <div className="absolute bottom-16 right-12 h-32 w-32 rounded-full bg-white/20 dark:bg-white/20 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-2xl space-y-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-300/50 dark:border-white/30 bg-white/30 dark:bg-white/10 px-4 py-1 text-sm backdrop-blur-sm text-gray-800 dark:text-white"
        >
          <Play size={14} />
          <ShinyText text="Blog lập trình mạng - Java & JavaScript" speed={4} />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-semibold md:text-4xl lg:text-5xl text-gray-900 dark:text-white"
        >
          Xây dựng{" "}
          <span className="inline-block relative px-2 py-1 rounded-lg bg-white/20 dark:bg-white/10 backdrop-blur-sm">
            <GradientText className="inline">ứng dụng mạng</GradientText>
          </span>{" "}
          hiện đại cùng{" "}
          <ScrambleText text={personalInfo.fullName} className="inline-block" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base leading-relaxed text-gray-700 dark:text-white/80 md:text-lg"
        >
          Chia sẻ kinh nghiệm triển khai REST API, WebSocket realtime, tối ưu
          hiệu năng và DevOps. Tất cả những gì mình học được ở HUTECH và từ các
          dự án thực tế đều có mặt tại đây.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          <MagneticButton strength={0.2}>
            <Link href="/blog" className="btn-primary inline-flex items-center">
              Khám phá bài viết
              <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Link
              href="/about"
              className="btn-outline border-gray-400 dark:border-white/60 text-gray-900 dark:text-white hover:bg-gray-200/50 dark:hover:bg-white/10 inline-flex items-center"
            >
              Về Ngọc Thiên
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
