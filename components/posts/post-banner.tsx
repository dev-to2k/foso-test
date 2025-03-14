import Image from "next/image";
import Button from "../ui/button";

export default function PostBanner() {
  return (
    <div
      className="h-[318px] rounded-xl overflow-hidden relative mb-10"
      style={{
        background:
          "linear-gradient(150deg, rgba(21,71,170,1) 0%, rgba(26,111,185,1) 100%)",
      }}
    >
      <div className="content w-[550px] ml-16 absolute top-1/2 -translate-y-1/2">
        <p className="font-bold text-4xl text-white w-[376px] mb-10">
          Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
        </p>
        <Button
          variant="outline"
          className="border-white text-white border-[1.5px] px-4"
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

      <Image
        src="/images/ads/ads-5.png"
        width={472}
        height={280}
        alt="post banner"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}
