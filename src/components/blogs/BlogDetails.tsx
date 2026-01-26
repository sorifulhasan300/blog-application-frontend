import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Calendar, Eye } from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BlogPost } from "@/types/blog.type";

export default function BlogDetails({ data }: { data: BlogPost | null }) {
  if (!data) {
    return "blog not found";
  }
  const { title, thumbnail, tags, views, createdAt, content } = data;

  return (
    <Card className="max-w-4xl mx-auto">
      {/* Thumbnail */}
      <div className="relative w-full h-[320px]">
        <Image
          src={""}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <CardContent className="p-6 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight">{title}</h1>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {new Date(createdAt).toLocaleDateString()}
          </span>

          <span className="flex items-center gap-1">
            <Eye size={16} />
            {views} views
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator />

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {content ? content : <p>No content available.</p>}
        </div>
      </CardContent>
    </Card>
  );
}
