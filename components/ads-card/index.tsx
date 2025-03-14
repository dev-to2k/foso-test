import { cn } from "@/utils";

interface AdsCardProps {
  image: React.ReactNode;
  content: React.ReactNode;
  button: React.ReactNode;
  className?: string;
}

export default function AdsCard({
  image,
  content,
  button,
  className,
}: AdsCardProps) {
  return (
    <div
      className={cn(
        "min-w-[366px] max-h-[650px] rounded-[24px] overflow-hidden flex flex-col mb-10",
        className
      )}
      style={{
        background:
          "linear-gradient(150deg, rgba(21,71,170,1) 0%, rgba(26,111,185,1) 100%)",
      }}
    >
      {image && image}
      {content && content}
      {button && button}
    </div>
  );
}
