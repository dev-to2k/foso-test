"use client";

import { cn, generatePagination } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Button from "./button";

export default function Pagination({
  totalPages,
  className,
}: {
  totalPages: number;
  className?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <div className={cn("inline-flex w-full justify-between", className)}>
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex space-x-2">
          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm rounded-lg text-[#B3C5D4] font-semibold",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-[#D1F7EA] border-[#D1F7EA] text-black": isActive,
      "hover:bg-gray-100": !isActive && position !== "middle",
      // "text-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = clsx(
    "flex items-center justify-center font-semibold text-sm py-2 px-3 rounded-[40px] cursor-pointer",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );
  const isLeft = direction === "left";
  const textDirection = isLeft ? "Trang trước" : "Trang kế tiếp";

  const icon =
    direction === "left" ? (
      <Image
        src="/icons/arrow-left.svg"
        width={16}
        height={16}
        alt="arrow left"
      />
    ) : (
      <Image
        src="/icons/arrow-right.svg"
        width={16}
        height={16}
        alt="arrow right"
      />
    );

  return isDisabled ? (
    <Button className={className + "text-[#B3C5D4]"}>
      {isLeft && icon}
      <span className={isLeft ? "ml-3" : "mr-3"}>{textDirection}</span>
      {!isLeft && icon}
    </Button>
  ) : (
    <Link className={className + "text-[#4D5F6E]"} href={href}>
      {isLeft && icon}
      <span className={isLeft ? "ml-3" : "mr-3"}>{textDirection}</span>
      {!isLeft && icon}
    </Link>
  );
}
