import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/types/post.type";
import { Badge } from "lucide-react";
import Image from "next/image";
interface BlogCardProps {
  post: Post;
}
export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        src={post?.thumnail}
        width={40}
        height={40}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge>Featured</Badge>
        </CardAction>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.content}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View post</Button>
      </CardFooter>
    </Card>
  );
}
