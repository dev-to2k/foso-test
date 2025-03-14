import AdsCard from "@/components/ads-card";
import AuthorDate from "@/components/post-detail/author-date";
import Blockquote from "@/components/post-detail/blockquote";
import BlogContent from "@/components/post-detail/blog-content";
import FeaturedImage from "@/components/post-detail/featured-image";
import RelatedPosts from "@/components/post-detail/related-posts";
import SocialShare from "@/components/post-detail/social-share";
import SocialSticky from "@/components/post-detail/social-sticky";
import PostSkeleton from "@/components/posts/skeleton";
import Breadcrumb from "@/components/ui/breadcrumb";
import Button from "@/components/ui/button";
import EmojiReaction from "@/components/ui/emoji-reaction";
import Tag from "@/components/ui/tag";
import { getPostById } from "@/utils/http/posts";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;
    const post = await getPostById(id);

    if (!post) {
      return {
        title: "Không tìm thấy bài viết",
      };
    }

    return {
      title: post.title,
      description: post.title,
      openGraph: {
        title: post.title,
        description: post.title,
        images: [post.image],
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "Blog - FOSO",
    };
  }
}

export default async function BlogDetails({ params }: Props) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto min-h-screen pt-10">
      <Breadcrumb
        autoGenerate
        className="text-[#050505]"
        postTitle={post.title}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Main Content - Left Side (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          {/* Blog Header */}
          <div className="mb-6">
            <Tag className="mb-4 inline-block">Test tag</Tag>

            <h1 className="text-3xl font-extrabold mb-4">{post.title}</h1>

            {/* Author and Date */}
            <AuthorDate />

            {/* Social Share */}
            <SocialShare />
          </div>

          {/* Featured Image */}
          <FeaturedImage
            imageUrl="/images/post-detail/image-1.png"
            subtitle="Quy trình 5S là gì?"
          />

          {/* Quote */}
          <Blockquote isCustomBlockquote>
            Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Nội
            dung 5S còn yêu cầu gì? Đối với doanh nghiệp FOSO sẽ trả lời cho bạn
            thông tin chi tiết về nội hành này cùng như yêu tố tạo nên thành
            công của quy trình trên nhé.
          </Blockquote>

          {/* Blog Content */}
          <BlogContent />

          {/* Reactions */}
          <EmojiReaction />
        </div>

        {/* Table of Contents - Right Side (1/3 width on large screens) */}
        <div className="lg:col-span-1">
          {/* Social Sticky */}
          <SocialSticky />

          {/* CTA Banner */}
          <div className="my-10 p-6">
            <AdsCard
              image={
                <Image
                  src="/images/ads/ads-1.png"
                  alt="ads image 1"
                  width={367}
                  height={245}
                  className="mt-16 w-full"
                />
              }
              content={
                <div className="mx-auto my-10 relative w-full px-4">
                  <Image
                    src="/images/ads/ads-3.png"
                    alt="ads image 3"
                    width={136}
                    height={136}
                    className="z-10"
                  />
                  <Image
                    src="/images/ads/ads-2.png"
                    alt="ads image 2"
                    width={318}
                    height={87}
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                  />
                </div>
              }
              button={
                <div className="w-full mx-auto mt-auto mb-16 max-w-3/4">
                  <Button
                    variant="outline"
                    className="border-white text-white w-full flex items-center justify-between px-4 h-[50px] border-[1.5px]"
                    icon={
                      <Image
                        src={"/icons/arrow-up-right-outline.svg"}
                        width={18}
                        height={18}
                        alt="icon arrow up right outline"
                      />
                    }
                    iconPosition="right"
                  >
                    Trải Nghiệm Ngay
                  </Button>
                </div>
              }
            />
            <AdsCard
              image={
                <Image
                  src="/images/ads/ads-4.png"
                  alt="ads image 1"
                  width={366}
                  height={345}
                  className="mt-16 max-h-[345px] w-full"
                />
              }
              content={
                <div className="w-full mx-auto my-10 text-white font-bold px-4 text-xl">
                  Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát
                  triển!
                </div>
              }
              button={
                <div className="w-full mx-auto mt-auto mb-16 max-w-3/4">
                  <Button
                    variant="outline"
                    className="border-white text-white w-full flex items-center justify-between px-4 h-[50px] border-[1.5px]"
                    icon={
                      <Image
                        src={"/icons/arrow-up-right-outline.svg"}
                        width={18}
                        height={18}
                        alt="icon arrow up right outline"
                      />
                    }
                    iconPosition="right"
                  >
                    Tham Gia Ngay
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-10">
        <h2 className="text-4xl font-extrabold text-[#050505] mb-6">
          Bài Viết Liên Quan
        </h2>
        <Suspense
          fallback={<PostSkeleton numberColumn={3} maxPostsNumber={3} />}
        >
          <RelatedPosts numberColumn={3} maxPostsNumber={3} />
        </Suspense>
      </div>
    </div>
  );
}
