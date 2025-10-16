import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import PostDetailClient from "./PostDetailClient";

// ✅ Generate static paths cho tất cả bài viết (SSG)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Generate metadata cho SEO
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  return {
    title: `${post.title} | Thạch Văn Ngọc Thiên`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

export default function PostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <PostDetailClient post={post} />;
}
