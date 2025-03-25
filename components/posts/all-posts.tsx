import { getListPosts } from "@/utils/http/posts";
import PostList from "./post-list";

interface AllPostsProps {
  numberColumn?: 1 | 2 | 3 | 4;
  maxPostsNumber?: number;
  page?: string | string[];
}

export default async function AllPosts({
  numberColumn = 2,
  maxPostsNumber,
  page = "1",
}: AllPostsProps = {}) {
  // Sử dụng page để fetch dữ liệu phân trang (trong trường hợp thực tế)
  // Hiện tại chỉ dùng để force re-render khi chuyển trang
  console.log(`Fetching posts for page ${page}`);

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
