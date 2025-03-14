import { getListPosts } from "@/utils/http/posts";
import PostList from "../posts/post-list";

interface RelatedPostsProps {
  numberColumn?: 1 | 2 | 3 | 4;
  maxPostsNumber?: number;
}

export default async function RelatedPosts({
  numberColumn = 3,
  maxPostsNumber = 3,
}: RelatedPostsProps = {}) {
  const listPosts = await getListPosts();

  if (!listPosts) {
    return <div>Không tìm thấy danh sách bài viết.</div>;
  }

  return (
    <PostList
      posts={listPosts}
      numberColumn={numberColumn}
      maxPostsNumber={maxPostsNumber}
    />
  );
}
