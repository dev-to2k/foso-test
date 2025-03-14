import { ICategory } from "@/interfaces/category";
import { Fragment } from "react";
import CategoryItem from "./category-item";

export default function ListCategory({ list }: { list: ICategory[] }) {
  return (
    <ul>
      {list.map((item) => (
        <Fragment key={item.label}>
          <CategoryItem category={item} />
        </Fragment>
      ))}
    </ul>
  );
}
