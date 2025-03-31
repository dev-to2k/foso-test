import Skeleton from "react-loading-skeleton";

interface PostSkeletonProps {
  numberColumn?: 1 | 2 | 3 | 4;
  maxPostsNumber?: number;
}

export default function PostSkeleton({
  numberColumn = 2,
  maxPostsNumber = 2,
}: PostSkeletonProps = {}) {
  // Determine the number of skeleton items to render
  const skeletonCount = maxPostsNumber || 2;

  // Create an array of that length
  const skeletonItems = Array.from({ length: skeletonCount }, (_, i) => i + 1);

  // Determine grid columns based on numberColumn prop
  const gridColumnClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }[numberColumn];

  return (
    <div className={`grid ${gridColumnClass} gap-4`}>
      {skeletonItems.map((i) => (
        <div
          key={i}
          className="w-full md:w-[505px] max-w-full flex flex-col overflow-hidden"
        >
          {/* Image skeleton */}
          <div className="h-[300px] md:h-[400px] lg:h-[475px] w-full overflow-hidden">
            <Skeleton height="100%" />
          </div>

          {/* Content skeleton */}
          <div className="p-4 flex flex-col gap-3">
            {/* Tag skeleton */}
            <div className="flex">
              <Skeleton width={80} height={24} className="rounded-lg" />
            </div>

            {/* Title skeleton */}
            <Skeleton
              count={2}
              className="text-2xl font-extrabold max-h-[72px]"
            />

            {/* Date/time skeletons */}
            <div className="flex items-center gap-3">
              <Skeleton width={120} height={24} />
              <span className="h-4 w-[1px] bg-gray-400"></span>
              <Skeleton width={100} height={24} />
            </div>

            {/* Button skeleton */}
            <Skeleton height={40} width={200} className="mt-2 text-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
