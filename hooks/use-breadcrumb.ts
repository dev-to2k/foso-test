/* eslint-disable @typescript-eslint/no-explicit-any */
import { navigationMap } from "@/constants/navigation";
import { BreadcrumbItem } from "@/types/breadcrumb";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type UseBreadcrumbProps = {
  items?: BreadcrumbItem[];
  autoGenerate?: boolean;
  postTitle?: string;
};

export const useBreadcrumb = ({
  items: propItems,
  autoGenerate = false,
  postTitle = "",
}: UseBreadcrumbProps) => {
  const pathname = usePathname();

  const breadcrumbItems = useMemo(() => {
    if (!autoGenerate || (propItems && propItems.length > 0)) {
      return propItems || [];
    }

    const generatedItems: BreadcrumbItem[] = [
      { label: "Trang chủ", href: "/" },
    ];

    const pathSegments = pathname.split("/").filter(Boolean);

    if (pathSegments.length === 0) {
      return generatedItems;
    }

    let exactPathMatch = false;

    // Check if the current path exactly matches any navigation item
    Object.values(navigationMap).forEach((navItem: any) => {
      if (navItem.path === pathname) {
        generatedItems.push({ label: navItem.label });
        exactPathMatch = true;
        return;
      }

      if (navItem.children) {
        Object.values(navItem.children).forEach((childItem: any) => {
          if (childItem.path === pathname) {
            generatedItems.push({
              label: navItem.label,
              href: navItem.path,
            });
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

    let currentPath = "";
    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      currentPath += `/${segment}`;

      if (
        i === pathSegments.length - 1 &&
        pathSegments.length >= 3 &&
        pathSegments[0] === "tai-nguyen" &&
        pathSegments[1] === "blog" &&
        postTitle
      ) {
        generatedItems.push({
          label: postTitle,
          href: undefined,
        });
        continue;
      }

      let segmentMatched = false;

      for (const [, navItem] of Object.entries(navigationMap)) {
        if (navItem.path === currentPath) {
          generatedItems.push({
            label: navItem.label,
            href: i === pathSegments.length - 1 ? undefined : navItem.path,
          });
          segmentMatched = true;
          break;
        }

        if (navItem.children) {
          for (const [, childItem] of Object.entries(navItem.children)) {
            if (childItem.path === currentPath) {
              if (
                !generatedItems.some((item) => item.label === navItem.label)
              ) {
                generatedItems.push({
                  label: navItem.label,
                  href: navItem.path,
                });
              }

              generatedItems.push({
                label: childItem.label,
                href:
                  i === pathSegments.length - 1 ? undefined : childItem.path,
              });
              segmentMatched = true;
              break;
            }
          }
          if (segmentMatched) break;
        }
      }

      if (!segmentMatched) {
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

  return breadcrumbItems;
};
