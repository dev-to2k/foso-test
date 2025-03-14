import AdsCard from "@/components/ads-card";
import AllCategories from "@/components/category/all-categories";
import CategorySkeleton from "@/components/category/skeleton";
import MainHeading from "@/components/main-heading";
import AllPosts from "@/components/posts/all-posts";
import PostBanner from "@/components/posts/post-banner";
import PostSkeleton from "@/components/posts/skeleton";
import Button from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import Search from "@/components/ui/search";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <div className="blog-page min-h-screen container max-w-[1440px] mx-auto relative">
      <MainHeading />

      <section className="container max-w-[1280px] mx-auto mb-10 px-4 lg:px-0">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-80 blur-3xl -z-10 circle-gradient-2 -left-[330px] top-[300px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-80 blur-3xl -z-10 circle-gradient-1 bottom-0 -right-[300px]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-8">
            <h2 className="font-extrabold text-4xl mb-4">Tất Cả Bài Viết</h2>
            <PostBanner />
            <Suspense
              fallback={<PostSkeleton numberColumn={2} maxPostsNumber={6} />}
            >
              <AllPosts numberColumn={2} maxPostsNumber={6} />
            </Suspense>
          </div>

          <div className="lg:col-span-4">
            <div className="mb-10">
              <p className="font-extrabold text-2xl mb-4">Tìm Kiếm</p>
              <Search />
            </div>

            <div className="mb-10 min-h-60">
              <p className="font-extrabold text-2xl mb-4">Danh Mục</p>
              <Suspense fallback={<CategorySkeleton />}>
                <AllCategories />
              </Suspense>
            </div>

            <div className="mb-10">
              <AdsCard
                className="w-[366px]"
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
                className="w-[366px]"
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

        <Pagination totalPages={10} />
      </section>
    </div>
  );
}
