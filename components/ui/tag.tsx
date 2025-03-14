import { cn } from "@/utils";

interface TagProps {
  className?: string;
  children: string;
}
export default function Tag({ className, children }: TagProps) {
  const classNameCombined = cn(
    "text-xs font-medium py-1 px-2 rounded-lg bg-[#E2F0FE] text-[#0F4F9E]",
    className
  );

  return <span className={classNameCombined}>{children}</span>;
}
