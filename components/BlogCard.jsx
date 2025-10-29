"use client";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import SpotlightCard from "@/components/effects/SpotlightCard";
import FadeInView from "@/components/effects/FadeInView";

const BlogCard = ({ post, index }) => (
  <FadeInView delay={index * 0.05} className="h-full">
    <SpotlightCard
      className="card-hover flex h-full flex-col overflow-hidden bg-white dark:bg-gray-800 transition-colors duration-300"
      spotlightColor="rgba(79,70,229,0.06)"
    >
      <div className="h-44 overflow-hidden">
        <img
          src={post.heroImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col gap-4 h-full">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            {post.readTime && (
              <span className="inline-flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
            )}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Đọc thêm →
          </Link>
        </div>
      </div>
    </SpotlightCard>
  </FadeInView>
);

export default BlogCard;
