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
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const post = dummyPosts.find((post) => post.id === id);
    return post;
  } catch (error) {
    console.log("Failed to fetch post by id", error);
  }
}
