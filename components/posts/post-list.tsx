import { IPost } from "@/interfaces/post";
import { Fragment } from "react";
import PostItem from "./post-item";

interface PostListProps {
  posts: IPost[];
  numberColumn?: 1 | 2 | 3 | 4;
  maxPostsNumber?: number;
}

export default function PostList({
  posts,
  numberColumn = 2,
  maxPostsNumber,
}: PostListProps) {
  // Limit the number of posts if maxPostsNumber is provided
  const displayPosts = maxPostsNumber ? posts.slice(0, maxPostsNumber) : posts;

  // Determine grid columns based on numberColumn prop
  const gridColumnClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  }[numberColumn];

  return (
    <div className={`grid ${gridColumnClass} gap-4`}>
      {(displayPosts || []).map((post) => (
        <Fragment key={post.id}>
          <PostItem post={post} />
        </Fragment>
      ))}
    </div>
  );
}
