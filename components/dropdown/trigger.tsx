"use client";
import { useDropdown } from "@/hooks/use-dropdown";

export default function Trigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isOpen, setIsOpen } = useDropdown();

  return (
    <div
      className={`cursor-pointer flex items-center ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ml-1 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}
