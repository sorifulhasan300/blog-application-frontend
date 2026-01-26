import BlogDetails from "@/components/blogs/BlogDetails";
import { fetchPostById } from "@/services/post.service";
import React from "react";

export default async function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postDetails = await fetchPostById(id);
  return (
    <div>
      <BlogDetails data={postDetails?.data}></BlogDetails>
    </div>
  );
}
