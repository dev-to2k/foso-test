import { dummyCategories } from "@/mock-data/data";

export async function getListCategories() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return dummyCategories;
  } catch (error) {
    console.log("Failed to fetch list categories", error);
  }
}
