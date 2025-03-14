/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
  className?: string;
  autoGenerate?: boolean;
  postTitle?: string;
};

// Define navigation structure to match menu-navigation.tsx
const navigationMap = {
  about: {
    label: "Về chúng tôi",
    path: "/chung-toi",
  },
  solutions: {
    label: "Giải pháp",
    path: "/giai-phap",
    children: {
      "solution-1": { label: "Giải pháp 1", path: "/giai-phap/solution-1" },
      "solution-2": { label: "Giải pháp 2", path: "/giai-phap/solution-2" },
      "solution-3": { label: "Giải pháp 3", path: "/giai-phap/solution-3" },
    },
  },
  resources: {
    label: "Tài nguyên",
    path: "/tai-nguyen",
    children: {
      docs: { label: "Tài liệu hướng dẫn", path: "/tai-nguyen/docs" },
      blog: { label: "Blog", path: "/tai-nguyen/blog" },
      "case-study": { label: "Case study", path: "/tai-nguyen/case-study" },
    },
  },
  contact: {
    label: "Liên hệ",
    path: "/lien-he",
  },
};

export default function Breadcrumb({
  items: propItems,
  className = "",
  autoGenerate = false,
  postTitle = "",
}: BreadcrumbProps) {
  const pathname = usePathname();

  const items = useMemo(() => {
    if (!autoGenerate || (propItems && propItems.length > 0)) {
      return propItems || [];
    }

    // Always start with Home
    const generatedItems: BreadcrumbItem[] = [
      { label: "Trang chủ", href: "/" },
    ];

    // Check if current path matches any main navigation item
    const pathSegments = pathname.split("/").filter(Boolean);

    if (pathSegments.length === 0) {
      return generatedItems; // Just home
    }

    // Try to find exact match for the current path
    let exactPathMatch = false;

    // Check if the current path exactly matches any navigation item
    Object.values(navigationMap).forEach((navItem: any) => {
      if (navItem.path === pathname) {
        generatedItems.push({ label: navItem.label });
        exactPathMatch = true;
        return;
      }

      // Check if it matches any child item
      if (navItem.children) {
        Object.values(navItem.children).forEach((childItem: any) => {
          if (childItem.path === pathname) {
            // Add parent
            generatedItems.push({
              label: navItem.label,
              href: navItem.path,
            });
            // Add child (current page)
            generatedItems.push({ label: childItem.label });
            exactPathMatch = true;
            return;
          }
        });
      }
    });

    if (exactPathMatch) {
      return generatedItems;
    }

    // If no exact match, build breadcrumb by traversing path segments
    let currentPath = "";

    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      currentPath += `/${segment}`;

      // Special case for blog post detail page
      if (
        i === pathSegments.length - 1 &&
        pathSegments.length >= 3 &&
        pathSegments[0] === "tai-nguyen" &&
        pathSegments[1] === "blog" &&
        postTitle
      ) {
        // If we're on a blog post detail page and have a post title, use it
        generatedItems.push({
          label: postTitle,
          href: undefined, // Current page, no link
        });
        continue;
      }

      // Try to find a match in navigation map
      let segmentMatched = false;

      // Check main navigation items
      for (const [, navItem] of Object.entries(navigationMap)) {
        if ((navItem as any).path === currentPath) {
          generatedItems.push({
            label: (navItem as any).label,
            href:
              i === pathSegments.length - 1 ? undefined : (navItem as any).path,
          });
          segmentMatched = true;
          break;
        }

        // Check children
        if ((navItem as any).children) {
          for (const [, childItem] of Object.entries(
            (navItem as any).children
          )) {
            if ((childItem as any).path === currentPath) {
              // If we haven't added the parent yet
              if (
                !generatedItems.some(
                  (item) => item.label === (navItem as any).label
                )
              ) {
                generatedItems.push({
                  label: (navItem as any).label,
                  href: (navItem as any).path,
                });
              }

              generatedItems.push({
                label: (childItem as any).label,
                href:
                  i === pathSegments.length - 1
                    ? undefined
                    : (childItem as any).path,
              });
              segmentMatched = true;
              break;
            }
          }
          if (segmentMatched) break;
        }
      }

      // If no match found in navigation map, create a generic breadcrumb item
      if (!segmentMatched) {
        // Skip adding a generic item for the last segment if it's a blog post detail
        // and we already added the post title
        if (
          i === pathSegments.length - 1 &&
          pathSegments.length >= 3 &&
          pathSegments[0] === "tai-nguyen" &&
          pathSegments[1] === "blog" &&
          postTitle
        ) {
          continue;
        }

        const label = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

        generatedItems.push({
          label,
          href: i === pathSegments.length - 1 ? undefined : currentPath,
        });
      }
    }

    return generatedItems;
  }, [pathname, propItems, autoGenerate, postTitle]);

  // Rest of the component remains the same
  if (!items.length) return null;

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isActive =
            item.href === pathname ||
            (!item.href && index === items.length - 1);

          return (
            <Fragment key={index}>
              <li className="text-sm text-[#050505]">
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
              {index < items.length - 1 && (
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
                    className="w-3 h-3"
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
