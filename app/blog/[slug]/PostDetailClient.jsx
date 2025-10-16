"use client";

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-properties";
import "prismjs/themes/prism-tomorrow.css";

import PostMeta from "@/components/PostMeta";
import RelatedPosts from "@/components/RelatedPosts";
import DisqusComments from "@/components/DisqusComments";
import { blogPosts } from "@/data/blogData";

export default function PostDetailClient({ post }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  const related = blogPosts
    .filter(
      (item) => item.slug !== post.slug && item.category === post.category
    )
    .slice(0, 3);

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://thienne1602.github.io/personal-blog/blog/${post.slug}`;

  return (
    <article className="prose-custom">
      <header className="mb-8 space-y-4">
        <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/30 px-4 py-1 text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <PostMeta post={post} />
        <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>
        <img
          src={post.heroImage}
          alt={post.title}
          className="mt-6 h-72 w-full rounded-3xl object-cover shadow-lg"
          loading="lazy"
        />
      </header>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <pre className={className}>
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        className="prose"
      >
        {post.content}
      </ReactMarkdown>

      {post.references && post.references.length > 0 && (
        <footer className="mt-12 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition-colors duration-300">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Tài liệu tham khảo
          </h3>
          <ul className="mt-4 space-y-2">
            {post.references.map((ref, idx) => (
              <li key={idx}>
                <a
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline"
                >
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      )}

      {related.length > 0 && <RelatedPosts posts={related} />}

      <div className="mt-12">
        <DisqusComments
          postId={post.slug}
          postTitle={post.title}
          postUrl={pageUrl}
        />
      </div>
    </article>
  );
}
