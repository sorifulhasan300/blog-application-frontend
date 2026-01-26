import { env } from "@/env";

export const fetchPost = async () => {
  const url = env.DATABASE_URL;
  try {
    const data = await fetch(`${url}/post/all`);
    const posts = await data.json();
    return { data: posts.data, error: null };
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostById = async (id: string) => {
  const url = env.DATABASE_URL;
  try {
    const response = await fetch(`${url}/post/${id}`);
    const data = await response.json();

    return { data: data, error: null };
  } catch (error) {
    console.log(error);
  }
};
