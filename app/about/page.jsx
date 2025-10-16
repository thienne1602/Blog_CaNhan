"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/profile";
import { blogPosts } from "@/data/blogData";
import GradientTextEffect from "@/components/effects/GradientTextEffect";
import ShinyTextEffect from "@/components/effects/ShinyTextEffect";
import StarBorderEffect from "@/components/effects/StarBorderEffect";
import SpotlightCardEffect from "@/components/effects/SpotlightCardEffect";
import MagneticCard from "@/components/effects/MagneticCard";
import FloatingCard from "@/components/effects/FloatingCard";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = {
    totalPosts: blogPosts.length,
    javaCount: blogPosts.filter((p) => p.category === "Java").length,
    jsCount: blogPosts.filter((p) => p.category === "JavaScript").length,
  };

  const skills = [
    { name: "Java", level: 90, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
    { name: "React", level: 88, color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", level: 80, color: "from-gray-800 to-gray-600" },
    { name: "Spring Boot", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Node.js", level: 82, color: "from-green-600 to-lime-500" },
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Profile Photo - Large & Central */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="lg:col-span-5"
              >
                <StarBorderEffect className="rounded-3xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-[3/4] group">
                    <Image
                      src={personalInfo.avatar}
                      alt={personalInfo.fullName}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </StarBorderEffect>
              </motion.div>

              {/* Hero Content */}
              <div className="lg:col-span-7 text-left space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
                    Hi, I'm
                  </p>
                  <GradientTextEffect
                    className="text-5xl lg:text-7xl font-black leading-tight"
                    colors={["#3B82F6", "#8B5CF6", "#EC4899"]}
                  >
                    Thạch Văn Ngọc Thiên
                  </GradientTextEffect>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <ShinyTextEffect
                    text="Sinh viên Đại học Công nghệ TP.HCM - HUTECH"
                    className="text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
                >
                  Sinh viên năm 4 chuyên ngành Hệ thống Thông tin. Đam mê nghiên
                  cứu kiến trúc hệ thống, xây dựng API và tối ưu hóa các ứng
                  dụng realtime bằng Java, JavaScript.
                </motion.p>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  {personalInfo.github && (
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 dark:bg-gray-700 text-white font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </motion.a>
                  )}
                  {personalInfo.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </motion.a>
                  )}
                  {personalInfo.facebook && (
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={personalInfo.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </motion.a>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <MagneticCard>
                    <a
                      href={"mailto:" + personalInfo.email}
                      className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-shadow"
                    >
                      Get In Touch
                    </a>
                  </MagneticCard>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#timeline"
                    className="inline-block px-10 py-5 rounded-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl border-2 border-purple-500/50 text-gray-800 dark:text-white font-bold text-lg"
                  >
                    View Timeline
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <GradientTextEffect
              className="text-5xl font-black mb-4"
              colors={["#3B82F6", "#8B5CF6", "#EC4899"]}
            >
              My Impact
            </GradientTextEffect>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingCard delay={0}>
              <SpotlightCardEffect>
                <div className="p-10 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl text-center border border-blue-500/20 hover:border-blue-500/50 transition-all">
                  <div className="text-7xl mb-4">📝</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {stats.totalPosts}+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg font-semibold">
                    Total Articles
                  </p>
                </div>
              </SpotlightCardEffect>
            </FloatingCard>

            <FloatingCard delay={0.2}>
              <SpotlightCardEffect>
                <div className="p-10 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl text-center border border-orange-500/20 hover:border-orange-500/50 transition-all">
                  <div className="text-7xl mb-4">☕</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    {stats.javaCount}+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg font-semibold">
                    Java Posts
                  </p>
                </div>
              </SpotlightCardEffect>
            </FloatingCard>

            <FloatingCard delay={0.4}>
              <SpotlightCardEffect>
                <div className="p-10 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl text-center border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
                  <div className="text-7xl mb-4">⚡</div>
                  <div className="text-6xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    {stats.jsCount}+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg font-semibold">
                    JavaScript Posts
                  </p>
                </div>
              </SpotlightCardEffect>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <GradientTextEffect
              className="text-5xl font-black mb-4"
              colors={["#3B82F6", "#8B5CF6", "#EC4899"]}
            >
              Technical Skills
            </GradientTextEffect>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technologies I work with daily
            </p>
          </motion.div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-gray-800 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <GradientTextEffect
              className="text-5xl font-black mb-4"
              colors={["#3B82F6", "#8B5CF6", "#EC4899"]}
            >
              My Journey
            </GradientTextEffect>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Timeline of my academic and professional development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2025 - Current */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <FloatingCard delay={0}>
                      <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-blue-500/30 hover:border-blue-500/60 transition-all">
                        <div className="text-sm font-bold text-blue-500 mb-2">
                          2025 - Hiện tại
                        </div>
                        <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">
                          Sinh viên năm 4 - HUTECH
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Chuyên ngành Hệ thống Thông tin. Nghiên cứu về kiến
                          trúc hệ thống, xây dựng API và tối ưu hóa ứng dụng
                          realtime.
                        </p>
                      </div>
                    </FloatingCard>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 ring-4 ring-blue-500/20" />
                  <div className="md:w-1/2 md:pl-12" />
                </div>
              </motion.div>

              {/* 2024 */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-12" />
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 ring-4 ring-purple-500/20" />
                  <div className="md:w-1/2 md:pl-12">
                    <FloatingCard delay={0.2}>
                      <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-purple-500/30 hover:border-purple-500/60 transition-all">
                        <div className="text-sm font-bold text-purple-500 mb-2">
                          2024
                        </div>
                        <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">
                          Phát triển kỹ năng Full-stack
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Chuyên sâu về Spring Boot, React, Next.js và các công
                          nghệ realtime. Tham gia các dự án thực tế và xây dựng
                          portfolio.
                        </p>
                      </div>
                    </FloatingCard>
                  </div>
                </div>
              </motion.div>

              {/* 2023 */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <FloatingCard delay={0.4}>
                      <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-pink-500/30 hover:border-pink-500/60 transition-all">
                        <div className="text-sm font-bold text-pink-500 mb-2">
                          2023
                        </div>
                        <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">
                          Khởi đầu lập trình chuyên nghiệp
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Học Java, JavaScript và các nguyên lý lập trình cơ
                          bản. Bắt đầu xây dựng các ứng dụng web đầu tiên.
                        </p>
                      </div>
                    </FloatingCard>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-pink-500 rounded-full transform -translate-x-1/2 ring-4 ring-pink-500/20" />
                  <div className="md:w-1/2 md:pl-12" />
                </div>
              </motion.div>

              {/* 2022 */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-12" />
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 ring-4 ring-orange-500/20" />
                  <div className="md:w-1/2 md:pl-12">
                    <FloatingCard delay={0.6}>
                      <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-orange-500/30 hover:border-orange-500/60 transition-all">
                        <div className="text-sm font-bold text-orange-500 mb-2">
                          2022
                        </div>
                        <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">
                          Nhập học HUTECH
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Bắt đầu hành trình học tập tại Đại học Công nghệ
                          TP.HCM, chuyên ngành Hệ thống Thông tin.
                        </p>
                      </div>
                    </FloatingCard>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <StarBorderEffect className="rounded-3xl overflow-hidden">
              <div className="p-16 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl">
                <ShinyTextEffect
                  text="Let's Work Together"
                  className="text-5xl font-black mb-6"
                />
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
                <MagneticCard>
                  <a
                    href={"mailto:" + personalInfo.email}
                    className="inline-block px-12 py-6 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-xl shadow-2xl hover:shadow-purple-500/50 transition-all"
                  >
                    Start a Conversation
                  </a>
                </MagneticCard>
              </div>
            </StarBorderEffect>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
