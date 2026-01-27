import BlogDetails from "@/components/blogs/BlogDetails";
import { blogService } from "@/services/post.service";
import { BlogPost } from "@/types/blog.type";
export async function generateStaticParams() {
  const blogs = await blogService.fetchBlogs();
  return blogs.data
    .map((post: BlogPost) => ({
      id: post.id,
    }))
    .slice(0, 3);
}
export default async function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await blogService.fetchBlogById(id);
  return (
    <div>
      <BlogDetails data={post.data}></BlogDetails>
    </div>
  );
}
