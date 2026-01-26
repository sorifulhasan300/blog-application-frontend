export type BlogPost = {
  id: string;
  title: string;
  content: string | null;
  thumbnail: string;
  isFeatured: boolean;
  status: "APPROVED" | "PENDING" | "REJECTED";
  tags: string[];
  views: number;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
  _count: {
    comments: number;
  };
};
export type Comment = {
  id: string;
  content: string;
  authorId: string;
  createdAt: string;
};
