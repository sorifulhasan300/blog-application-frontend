import { BlogCard } from "@/components/ui/blogcard";
import { Post } from "@/types/post.type";
import Blogs from "./blogs/Blogs";

export default async function CommonLayoutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Blogs />
    </div>
  );
}
