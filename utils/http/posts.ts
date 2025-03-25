import { IPost } from "@/interfaces/post";
import { dummyPosts } from "@/mock-data/data";
import { delay } from "../functions";

// Cache object để lưu trữ dữ liệu đã fetch
const cache = {
  posts: null as IPost[] | null,
  timestamp: 0,
  expiryTime: 60 * 1000, // 60 giây (1 phút)
};

export async function getListPosts() {
  try {
    // Kiểm tra xem dữ liệu đã được cache và còn hạn sử dụng không
    const now = Date.now();
    if (cache.posts && now - cache.timestamp < cache.expiryTime) {
      console.log("Using cached posts data");
      return cache.posts;
    }

    // Nếu không có cache hoặc cache đã hết hạn, fetch dữ liệu mới
    console.log("Fetching fresh posts data");
    await delay(1000);

    // Lưu vào cache
    cache.posts = dummyPosts;
    cache.timestamp = now;

    return dummyPosts;
  } catch (error) {
    console.log("Failed to fetch list posts", error);
    return [];
  }
}

export async function getPostById(id: string) {
  try {
    await delay(1000);
    const post = dummyPosts.find((post) => post.id === id);

    if (!post) {
      throw new Error("Không tìm thấy bài viết.");
    }

    return post;
  } catch (error) {
    console.error("Failed to fetch post by id", error);
    return null;
  }
}
