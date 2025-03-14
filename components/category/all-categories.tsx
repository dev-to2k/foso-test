import { getListCategories } from "@/utils/http/categories";
import ListCategory from "./list-category";

export default async function AllCategories() {
  const listCategories = await getListCategories();

  if (!listCategories) {
    return <div>Không tìm thấy danh sách danh mục</div>;
  }

  return <ListCategory list={listCategories} />;
}
