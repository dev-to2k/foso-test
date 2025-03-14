import { dummyPosts } from "@/mock-data/data";

export async function getListPosts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return dummyPosts;
  } catch (error) {
    console.log("Failed to fetch list posts", error);
  }
}

export async function getPostById(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
