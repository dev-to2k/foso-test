import Image from "next/image";

export default function FeaturedImage({
  imageUrl,
  subtitle,
}: {
  imageUrl: string;
  subtitle: string;
}) {
  return (
    <div className="my-8 relative">
      <Image
        src={imageUrl}
        alt="Quy trình 5S là gì?"
        width={800}
        height={450}
        className="rounded-lg w-full"
      />
      <p className="text-center text-sm text-[#667F93] mt-2">{subtitle}</p>
    </div>
  );
}
