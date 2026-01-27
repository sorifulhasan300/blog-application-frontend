import { env } from "@/env";
import { BlogPost } from "@/types/blog.type";

const fetchBlogs = async () => {
  const url = env.DATABASE_URL;
  try {
    const data = await fetch(`${url}/post/all`);
    const posts = await data.json();
    return { data: posts.data, error: null };
  } catch (error) {
    return { data: null, error: (error as Error).message };
  }
};

const fetchBlogById = async (
  id: string,
): Promise<{ data: BlogPost | null; error: string | null }> => {
  const url = env.DATABASE_URL;
  try {
    const response = await fetch(`${url}/post/${id}`);
    const data = await response.json();

    return { data: data.data, error: null };
  } catch (error) {
    return { data: null, error: (error as Error).message };
  }
};

export const blogService = { fetchBlogs, fetchBlogById };
