import { cn } from "@/utils";

interface AdsCardProps {
  image?: React.ReactNode;
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
        "max-w-[366px] max-h-[650px] rounded-[24px] overflow-hidden flex flex-col mb-10",
        className
      )}
      style={{
        background:
          "linear-gradient(37deg, #013DA0 2.16%, #0142A9 12.83%, #0148B3 23.51%, #024EBC 34.18%, #0254C5 44.85%, #025ACE 55.53%, #0261D7 66.2%, #0267E1 76.87%, #036EEA 87.55%, #0375F3 98.22%)",
      }}
    >
      {image && image}
      {content && content}
      {button && button}
    </div>
  );
}
