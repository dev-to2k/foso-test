import { dummyPosts } from "@/mock-data/data";

export const revalidate = 60;

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return Response.json({ data: dummyPosts });
}
