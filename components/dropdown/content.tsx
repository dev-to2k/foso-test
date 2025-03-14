"use client";
import { useDropdown } from "@/hooks/use-dropdown";

export default function Content({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isOpen } = useDropdown();
  if (!isOpen) return null;

  return (
    <div
      className={`absolute z-50 mt-2 py-2 bg-white rounded-md shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
