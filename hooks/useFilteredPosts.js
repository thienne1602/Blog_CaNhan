import { useMemo } from "react";

export const useFilteredPosts = (
  posts,
  { search = "", category = "All", activeTags = [] }
) => {
  return useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchCategory = category === "All" || post.category === category;
      const matchTags =
        activeTags.length === 0 ||
        activeTags.every((tag) =>
          post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
        );

      const matchKeyword =
        keyword.length === 0 ||
        post.title.toLowerCase().includes(keyword) ||
        post.excerpt.toLowerCase().includes(keyword) ||
        post.tags.some((tag) => tag.toLowerCase().includes(keyword));

      return matchCategory && matchTags && matchKeyword;
    });
  }, [posts, search, category, activeTags]);
};
