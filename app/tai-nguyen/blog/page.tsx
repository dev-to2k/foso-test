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

export const revalidate = 60;

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const page = (await searchParams).page || "1";
  const suspenseKey = `posts-page-${page}`;

  return (
    <div className="blog-page min-h-screen container mx-auto relative max-w-[1440px] mt-12 md:mt-16 lg:mt-24">
      <MainHeading />

      <section className="container max-w-[1280px] mx-auto mb-10 px-4">
        <div className="absolute w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] rounded-full opacity-80 blur-3xl -z-10 circle-gradient-2 -left-[200px] md:-left-[250px] lg:-left-[330px] top-[300px] animate-scale-in" />
        <div className="absolute w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] rounded-full opacity-80 blur-3xl -z-10 circle-gradient-1 bottom-0 -right-[200px] md:-right-[250px] lg:-right-[300px] animate-scale-in stagger-2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10">
          <div className="lg:col-span-8">
            <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-4 animate-stagger-in">
              Tất Cả Bài Viết
            </h2>
            <div className="animate-slide-up-fade stagger-2">
              <PostBanner />
            </div>
            <Suspense
              key={suspenseKey}
              fallback={<PostSkeleton numberColumn={2} maxPostsNumber={6} />}
            >
              <div className="animate-slide-up-fade stagger-3">
                <AllPosts numberColumn={2} maxPostsNumber={6} page={page} />
              </div>
            </Suspense>
          </div>

          {/* Search & Category */}
          <div className="lg:col-span-4">
            <div className="max-w-full lg:max-w-[366px] w-full lg:sticky lg:top-[130px] h-fit">
              <div className="mb-6 md:mb-8 lg:mb-10 animate-slide-up-fade stagger-2">
                <p className="font-extrabold text-2xl mb-4">Tìm Kiếm</p>
                <Search />
              </div>

              <div className="mb-6 md:mb-8 lg:mb-10 min-h-60 animate-slide-up-fade stagger-3">
                <p className="font-extrabold text-2xl mb-4">Danh Mục</p>
                <Suspense
                  key={`categories-${page}`}
                  fallback={<CategorySkeleton />}
                >
                  <AllCategories />
                </Suspense>
              </div>

              <div className="mb-6 md:mb-8 lg:mb-10 animate-slide-up-fade stagger-4">
                <AdsCard
                  className="w-full lg:w-[366px]"
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
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="z-10 w-[136px] h-[136px]"
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
                    <div className="w-full mt-auto mb-16 px-4">
                      <Button
                        variant="outline"
                        className="border-white text-white w-full flex items-center justify-between px-4 h-[50px] border-[1.5px] font-semibold transition-all duration-300 hover:bg-white hover:text-black group"
                        icon={
                          <Image
                            src={"/icons/arrow-up-right-outline.svg"}
                            width={18}
                            height={18}
                            alt="icon arrow up right outline"
                            className="transition-all duration-300 group-hover:invert group-hover:scale-110 group-hover:translate-x-0.5 group-hover:rotate-45"
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
                  className="w-full lg:w-[366px]"
                  image={
                    <Image
                      src="/images/ads/ads-4.png"
                      alt="ads image 1"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[472px] h-[399px] translate-y-10"
                    />
                  }
                  content={
                    <div className="w-full mx-auto my-10 text-white font-bold px-4 text-xl">
                      Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát
                      triển!
                    </div>
                  }
                  button={
                    <div className="w-full mt-auto mb-16 px-4">
                      <Button
                        variant="outline"
                        className="border-white text-white w-full flex items-center justify-between px-4 h-[50px] border-[1.5px] font-semibold transition-all duration-300 hover:bg-white hover:text-black group"
                        icon={
                          <Image
                            src={"/icons/arrow-up-right-outline.svg"}
                            width={18}
                            height={18}
                            alt="icon arrow up right outline"
                            className="transition-all duration-300 group-hover:invert group-hover:scale-110 group-hover:translate-x-0.5 group-hover:rotate-45"
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
        </div>

        <div className="animate-slide-up-fade stagger-5">
          <Pagination totalPages={10} className="mt-[72px]" />
        </div>
      </section>
    </div>
  );
}
