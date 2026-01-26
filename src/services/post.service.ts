import { env } from "@/env";

export const fetchPost = async () => {
  const url = env.DATABASE_URL;
  try {
    const data = await fetch(`${url}/post/all`);
    const posts = await data.json();
    return posts.data;
  } catch (error) {
    console.log(error);
  }
};
