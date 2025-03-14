import React, { ReactNode } from "react";

interface TruncateTextProps {
  children: ReactNode;
  lineClamp: number;
  className?: string;
}

const TruncateText: React.FC<TruncateTextProps> = ({
  children,
  lineClamp,
  className = "",
}) => {
  // Tailwind classes cho line-clamp 1-6
  const getLineClampClass = (lines: number): string => {
    switch (lines) {
      case 1:
        return "line-clamp-1";
      case 2:
        return "line-clamp-2";
      case 3:
        return "line-clamp-3";
      case 4:
        return "line-clamp-4";
      case 5:
        return "line-clamp-5";
      case 6:
        return "line-clamp-6";
      default:
        return "";
    }
  };

  if (lineClamp >= 1 && lineClamp <= 6) {
    return (
      <p className={`${getLineClampClass(lineClamp)} ${className}`}>
        {children}
      </p>
    );
  }

  // Nếu lineClamp > 6, sử dụng inline styles
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical",
        textOverflow: "ellipsis",
      }}
    >
      {children}
    </div>
  );
};

export default TruncateText;
