import Image from "next/image";
import Button from "../ui/button";

export default function SocialShare() {
  const className =
    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl p-2 sm:p-3 border flex items-center justify-center bg-white hover:bg-green-100 border-[#15AA7A]";
  return (
    <div className="flex sm:flex-col gap-2 fixed bottom-0 sm:bottom-auto left-0 sm:left-4 w-full sm:w-auto p-4 sm:p-0 bg-white sm:bg-transparent sm:top-[40%] z-[1000]">
      <p className="font-extrabold text-sm sm:text-base text-[#33404A] hidden sm:block mb-2">
        Chia sẻ
      </p>
      <div className="flex sm:flex-col gap-2 w-full sm:w-auto justify-between sm:justify-start">
        <Button className={className}>
          <Image
            src="/icons/zalo.svg"
            alt="Zalo"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
        </Button>
        <Button variant="outline" className={className}>
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
        </Button>
        <Button className={className}>
          <Image
            src="/icons/x.svg"
            alt="X (Twitter)"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
        </Button>
        <Button className={className}>
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
        </Button>
        <Button className={className}>
          <Image
            src="/icons/reddit.svg"
            alt="Reddit"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
        </Button>
      </div>
    </div>
  );
}
