import { cn } from "@/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  variant?: "text" | "fill" | "outline";
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  className,
  icon,
  iconPosition = "left",
  variant = "text",
  onClick,
  disabled = false,
  type = "button",
}: Props) {
  const getVariantClasses = () => {
    switch (variant) {
      case "fill":
        return "bg-primary hover:bg-primary-dark";
      case "outline":
        return "border border-primary text-primary hover:bg-primary-light";
      case "text":
      default:
        return "bg-transparent hover:bg-gray-100";
    }
  };

  return (
    <button
      className={cn(
        "text-sm py-2 px-3 rounded-[40px] flex items-center gap-2 cursor-pointer",
        getVariantClasses(),
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
