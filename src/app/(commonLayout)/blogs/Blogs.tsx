import React from "react";
import { fetchPost } from "@/services/post.service";
import { Post } from "@/types/blog.type";
import { BlogCard } from "@/components/blogs/BlogCard";

export default async function Blogs() {
  const posts = await fetchPost();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {posts?.data?.map((post: Post) => (
        <BlogCard key={post.id} post={post}></BlogCard>
      ))}
    </div>
  );
}
