"use client";

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import Callout from "@/components/Callout";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import BlurText from "@/components/effects/BlurText";
import { blogPosts } from "@/data/blogData";
import { projects } from "@/data/profile";

export default function HomePage() {
  const featured = blogPosts.slice(0, 3);

  return (
    <div className="space-y-16">
      <HeroSection />

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            <BlurText text="Bài viết nổi bật" delay={50} />
          </h2>
          <Link
            href="/blog"
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {featured.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            <BlurText text="Dự án tiêu biểu" delay={50} />
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
        <Timeline />
      </section>

      <Callout />
    </div>
  );
}
