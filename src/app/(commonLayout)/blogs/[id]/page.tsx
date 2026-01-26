import BlogDetails from "@/components/blogs/BlogDetails";
import { fetchPostById } from "@/services/post.service";

export default async function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await fetchPostById(id);
  //   console.log("single post", post.data);

  return (
    <div>
      <BlogDetails data={post.data}></BlogDetails>
    </div>
  );
}
