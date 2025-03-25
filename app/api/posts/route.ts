import { dummyPosts } from "@/mock-data/data";
import { delay } from "@/utils/functions";

export const revalidate = 60;

export async function GET() {
  await delay(1000)
  return Response.json({ data: dummyPosts });
}
