import { cn } from "@/utils";
import Image from "next/image";

export default function Blockquote({
  wrapBlockquoteClassName = "",
  className = "",
  isCustomBlockquote = false,
  children,
}: {
  wrapBlockquoteClassName?: string;
  className?: string;
  isCustomBlockquote?: boolean;
  children: React.ReactNode;
}) {
  const classCustomBlockquote = !isCustomBlockquote
    ? "border-l-[3px] border-[#15AA7A]"
    : "";

  return (
    <div
      className={cn(
        "mb-8 text-xl pl-4 py-2 italic text-[#33404A] font-medium flex items-start",
        wrapBlockquoteClassName
      )}
    >
      {isCustomBlockquote && (
        <span
          className={"text-[#15AA7A] text-[96px]"}
          style={{
            fontFamily: "var(--font-racing-sans-one)",
            transform: " translate(0px, -20px)",
          }}
        >
          <Image
            src={"/icons/blockquote.svg"}
            width={130}
            height={130}
            alt="blockquote"
          />
        </span>
      )}
      <blockquote
        className={cn("text-center", classCustomBlockquote, className)}
      >
        {children}
      </blockquote>
    </div>
  );
}
