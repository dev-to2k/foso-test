import Image from "next/image";
import Button from "../ui/button";

export default function PostBanner() {
  return (
    <div
      className="h-[318px] rounded-xl overflow-hidden relative mb-10"
      style={{
        background:
          "linear-gradient(77.74deg,#013da0 11.85%,#0142a9 20.65%,#0148b3 29.45%,#024ebc 38.25%,#0254c5 47.05%,#025ace 55.84%,#0261d7 64.64%,#0267e1 73.44%,#036eea 82.24%,#0375f3 91.04%)",
      }}
    >
      <div className="content w-[550px] ml-16 absolute top-1/2 -translate-y-1/2">
        <p className="font-bold text-4xl text-white w-[376px] mb-10">
          Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
        </p>
        <Button
          variant="outline"
          className="border-white text-white flex items-center justify-between px-4 h-[50px] border-2 font-semibold transition-all duration-300 hover:bg-white hover:text-black group min-w-[216px]"
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

      <div className="post-banner-group">
        <Image
          src="/images/group-banner.png"
          width={473}
          height={383}
          alt="post banner"
          className="absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
}
