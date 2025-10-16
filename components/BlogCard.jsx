"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import SpotlightCard from "@/components/effects/SpotlightCard";
import HoverGlow from "@/components/effects/HoverGlow";
import FadeInView from "@/components/effects/FadeInView";

const BlogCard = ({ post, index }) => {
  return (
    <FadeInView delay={index * 0.05} className="h-full">
      <HoverGlow glowColor="rgba(79, 70, 229, 0.3)">
        <SpotlightCard className="card-hover flex h-full flex-col overflow-hidden bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="h-44 overflow-hidden">
            <img
              src={post.heroImage}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="rounded-full bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 text-primary-600 dark:text-primary-400">
                {post.category}
              </span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </HoverGlow>
    </FadeInView>
  );
};

export default BlogCard;
