import { ICategory } from "@/interfaces/category";
import { dummyCategories } from "@/mock-data/data";
import { delay } from "../functions";

// Cache object để lưu trữ dữ liệu đã fetch
const cache = {
  categories: null as ICategory[] | null,
  timestamp: 0,
  expiryTime: 60 * 1000, // 60 giây (1 phút)
};

export async function getListCategories() {
  try {
    // Kiểm tra xem dữ liệu đã được cache và còn hạn sử dụng không
    const now = Date.now();
    if (cache.categories && now - cache.timestamp < cache.expiryTime) {
      console.log("Using cached categories data");
      return cache.categories;
    }

    // Nếu không có cache hoặc cache đã hết hạn, fetch dữ liệu mới
    console.log("Fetching fresh categories data");
    await delay(1000);

    // Lưu vào cache
    cache.categories = dummyCategories;
    cache.timestamp = now;

    return dummyCategories;
  } catch (error) {
    console.log("Failed to fetch list categories", error);
    return [];
  }
}
