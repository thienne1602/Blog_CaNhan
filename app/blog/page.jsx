"use client";

import { useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import TagCloud from "@/components/TagCloud";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories, allTags } from "@/data/blogData";
import { useFilteredPosts } from "@/hooks/useFilteredPosts";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeTags, setActiveTags] = useState([]);

  const filteredPosts = useFilteredPosts(blogPosts, {
    search,
    category,
    activeTags,
  });

  const stats = useMemo(
    () => ({ total: filteredPosts.length, all: blogPosts.length }),
    [filteredPosts.length]
  );

  const handleToggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-12">
      <header className="rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-gray-900/50 transition-colors duration-300">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Blog lập trình mạng
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Tổng hợp {stats.all} bài viết về Java, JavaScript, DevOps và các chủ
          đề lập trình mạng dành cho sinh viên.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,1fr]">
          <SearchBar value={search} onChange={setSearch} />
          <div className="self-center text-sm text-gray-500 dark:text-gray-400">
            Tìm thấy{" "}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              {stats.total}
            </span>{" "}
            bài viết phù hợp
          </div>
        </div>
      </header>

      <section className="space-y-6">
        <CategoryTabs
          categories={categories}
          activeCategory={category}
          onSelect={setCategory}
        />
        <TagCloud
          tags={allTags}
          activeTags={activeTags}
          onToggle={handleToggleTag}
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </section>

      {filteredPosts.length === 0 && (
        <div className="rounded-3xl border border-dashed border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-10 text-center transition-colors duration-300">
          <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
            Không tìm thấy nội dung phù hợp
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Hãy thử đổi từ khóa hoặc lựa chọn chủ đề khác nhé!
          </p>
        </div>
      )}
    </div>
  );
}
