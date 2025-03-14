import { getListPosts } from "@/utils/http/posts";
import PostList from "./post-list";

interface AllPostsProps {
  numberColumn?: 1 | 2 | 3 | 4;
  maxPostsNumber?: number;
}

export default async function AllPosts({
  numberColumn = 2,
  maxPostsNumber,
}: AllPostsProps = {}) {
  const listPosts = await getListPosts();

  if (!listPosts) {
    return <div>Không tìm thấy danh sách bài viết</div>;
  }

  return (
    <PostList
      posts={listPosts}
      numberColumn={numberColumn}
      maxPostsNumber={maxPostsNumber}
    />
  );
}
