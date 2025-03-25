"use client";
import { useDropdown } from "@/hooks/use-dropdown";
import { cn } from "@/utils";

export default function Content({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isOpen } = useDropdown();
  if (!isOpen) return null;

  const classBase = "absolute z-50 mt-2 py-2 bg-white rounded-md shadow-lg";

  return (
    <div
      className={cn(classBase, className)}
    >
      {children}
    </div>
  );
}
