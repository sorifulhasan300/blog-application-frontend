import { BlogPost } from "@/types/blog.type";
import { BlogCard } from "@/components/blogs/BlogCard";
import { blogService } from "@/services/post.service";

export default async function Blogs() {
  const posts = await blogService.fetchBlogs();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {posts?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post}></BlogCard>
      ))}
    </div>
  );
}
