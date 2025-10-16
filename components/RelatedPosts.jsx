"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const RelatedPosts = ({ posts }) => {
  if (!posts.length) return null;

  return (
    <section className="mt-16">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        Bài viết liên quan
      </h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="card-hover rounded-2xl bg-white dark:bg-gray-800 p-5 transition-colors duration-300"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400">
              {post.category}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-2 block text-base font-semibold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {post.title}
            </Link>
            <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
              {post.excerpt}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
