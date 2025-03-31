"use client";

import { useBreadcrumb } from "@/hooks/use-breadcrumb";
import { BreadcrumbItem } from "@/types/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
  className?: string;
  autoGenerate?: boolean;
  postTitle?: string;
};

export default function Breadcrumb({
  items,
  className = "",
  autoGenerate = false,
  postTitle = "",
}: BreadcrumbProps) {
  const pathname = usePathname();
  const breadcrumbItems = useBreadcrumb({ items, autoGenerate, postTitle });

  if (!breadcrumbItems.length) return null;

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex items-center space-x-1 sm:space-x-2 md:space-x-3 min-w-full  ${className}`}
      >
        {breadcrumbItems.map((item, index) => {
          const isActive =
            item.href === pathname ||
            (!item.href && index === breadcrumbItems.length - 1);

          return (
            <Fragment key={index}>
              <li className="text-xs sm:text-sm md:text-base text-[#050505] whitespace-nowrap">
                {item.href && !isActive ? (
                  <Link
                    href={item.href}
                    className="text-inherit transition-colors hover:text-green-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-inherit font-bold">{item.label}</span>
                )}
              </li>
              {index < breadcrumbItems.length - 1 && (
                <li className="text-[#050505]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
