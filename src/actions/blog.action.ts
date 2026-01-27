"use server";
import { blogService } from "@/services/post.service";

const getBlogs = () => {
  return blogService.fetchBlogs();
};
