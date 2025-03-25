"use client";
import { useDropdown } from "@/hooks/use-dropdown";
import React, { useEffect } from "react";

export default function Trigger({
  children,
  className = "",
  isOpen: initialIsOpen, // new prop
}: {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}) {
  const { isOpen, setIsOpen } = useDropdown();

  useEffect(() => {
    if (typeof initialIsOpen !== "undefined") {
      setIsOpen(initialIsOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`cursor-pointer flex items-center justify-between ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ml-1 transition-transform ${
          isOpen ? "rotate-180 text-[#1AD598]" : ""
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
