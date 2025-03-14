import { dummyPosts } from "@/mock-data/data";

export const revalidate = 60;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const post = dummyPosts.find((post) => post.id === id);

    if (!post) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }

    return Response.json({ data: post });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
