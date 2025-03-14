import Image from "next/image";
import Button from "../ui/button";

export default function SocialShare() {
  const className =
    "w-12 h-12 rounded-2xl p-3 border flex items-center justify-center hover:bg-green-100 border-[#15AA7A]";
  return (
    <div className="flex flex-col gap-2 fixed left-4 top-1/3">
      <p className="font-extrabold text-base text-[#33404A] mb-2">Chia sẻ</p>
      <Button className={className}>
        <Image src="/icons/zalo.svg" alt="Zalo" width={24} height={24} />
      </Button>
      <Button variant="outline" className={className}>
        <Image
          src="/icons/facebook.svg"
          alt="Facebook"
          width={24}
          height={24}
        />
      </Button>
      <Button className={className}>
        <Image src="/icons/x.svg" alt="X (Twitter)" width={24} height={24} />
      </Button>
      <Button className={className}>
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          width={24}
          height={24}
        />
      </Button>
      <Button className={className}>
        <Image src="/icons/reddit.svg" alt="Reddit" width={24} height={24} />
      </Button>
    </div>
  );
}
