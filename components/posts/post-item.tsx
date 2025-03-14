"use client";

import { IPost } from "@/interfaces/post";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../ui/button";
import Tag from "../ui/tag";
import TruncateText from "../ui/truncate-text";

export default function PostItem({ post }: { post: IPost }) {
  const router = useRouter();
  return (
    <article className="w-[505px] max-w-full flex flex-col overflow-hidden">
      {/* Image section */}
      <div className="max-h-[475px] w-full overflow-hidden">
        <Link href={`/tai-nguyen/blog/${post.id}`}>
          <Image
            src={post.image}
            alt={post.title}
            className="object-cover"
            width={505}
            height={475}
          />
        </Link>
      </div>

      {/* Content section */}
      <div className="p-4 flex flex-col gap-3">
        {/* Tag */}
        <div className="flex">
          <Tag>{post.tag}</Tag>
        </div>

        {/* Title */}
        <Link href={`/tai-nguyen/blog/${post.id}`}>
          <TruncateText
            lineClamp={2}
            className="text-2xl font-extrabold min-h-[72px] hover:text-[#1AD598] transition-colors duration-200"
          >
            {post.title}
          </TruncateText>
        </Link>

        {/* Date and reading time */}
        <div className="flex items-center gap-3 text-[#667F93]">
          <span className="text-base font-medium flex items-center">
            <Image
              src={"/icons/calendar.svg"}
              width={24}
              height={24}
              alt="calendar-icon"
              className="mr-2"
            />
            {post.createdDate}
          </span>
          <span className="h-4 w-[1px] bg-gray-400"></span>
          <span className="text-base font-medium flex items-center">
            <Image
              src={"/icons/clock.svg"}
              width={24}
              height={24}
              alt="calendar-icon"
              className="mr-2"
            />
            {post.timeReading}
          </span>
        </div>

        {/* CTA Button */}
        <Button
          className="mt-2 text-lg font-semibold text-[#667F93] hover:bg-transparent hover:text-[#1AD598] transition-colors"
          icon={
            <Image
              src={"/icons/arrow-right.svg"}
              width={24}
              height={24}
              alt="calendar-icon"
              className="ml-2"
            />
          }
          iconPosition="right"
          onClick={() => router.push("/tai-nguyen/blog/" + post.id)}
        >
          Khám phá thêm
        </Button>
      </div>
    </article>
  );
}
