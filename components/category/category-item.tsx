import { ICategory } from "@/interfaces/category";
import Link from "next/link";

export default function CategoryItem({ category }: { category: ICategory }) {
  return (
    <li className="h-[35px] mb-4">
      <Link
        href="/"
        className="flex items-center justify-between border-b border-slate-100 h-full"
      >
        <span className="text-[#33404A] hover:text-[#1AD598] transition-colors duration-200">
          {category.label}
        </span>
        <span className="text-[#667F93] hover:text-[#1AD598] transition-colors duration-200">
          {category.amount}
        </span>
      </Link>
    </li>
  );
}
