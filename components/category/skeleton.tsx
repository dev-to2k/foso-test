import Skeleton from "react-loading-skeleton";

export default function CategorySkeleton() {
  return (
    <ul className="w-full">
      {[...Array(5)].map((_, index) => (
        <li key={index} className="h-[35px] mb-4">
          <div className="flex items-center justify-between border-b border-slate-100 h-full">
            <Skeleton width={405} height={35} />
          </div>
        </li>
      ))}
    </ul>
  );
}
