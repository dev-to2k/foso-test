"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./button";

interface Reaction {
  id: string;
  imageSrc: string;
  label: string;
  count: number;
}

interface EmojiReactionProps {
  initialReactions?: Reaction[];
  totalReactions?: number;
  onReactionClick?: (reactionId: string) => void;
}

export default function EmojiReaction({
  initialReactions = [
    {
      id: "like",
      imageSrc: "/images/thumbs-up.png",
      label: "Hữu ích",
      count: 1,
    },
    {
      id: "love",
      imageSrc: "/images/green-heart.png",
      label: "Yêu thích",
      count: 2,
    },
    {
      id: "wow",
      imageSrc: "/images/star-struck.png",
      label: "Thú vị",
      count: 0,
    },
    {
      id: "surprise",
      imageSrc: "/images/hushed-face.png",
      label: "Bất ngờ",
      count: 1,
    },
    {
      id: "sad",
      imageSrc: "/images/yawning-face.png",
      label: "Nhàm chán",
      count: 0,
    },
    {
      id: "angry",
      imageSrc: "/images/pouting-face.png",
      label: "Tức giận",
      count: 0,
    },
  ],
  totalReactions: initialTotalReactions = 4,
  onReactionClick,
}: EmojiReactionProps) {
  const [reactions, setReactions] = useState<Reaction[]>(initialReactions);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [totalReactions, setTotalReactions] = useState(initialTotalReactions);

  const handleReactionClick = (reactionId: string) => {
    setReactions((prevReactions) =>
      prevReactions.map((reaction) => {
        if (reaction.id === reactionId) {
          // Nếu reaction đã được chọn và click lại
          if (selectedReaction === reactionId) {
            setTotalReactions(totalReactions - 1);
            return { ...reaction, count: Math.max(0, reaction.count - 1) };
          }
          // Nếu chưa có reaction nào được chọn
          if (!selectedReaction) {
            setTotalReactions(totalReactions + 1);
          }
          // Nếu đã có reaction khác được chọn thì giữ nguyên tổng
          return { ...reaction, count: reaction.count + 1 };
        }
        return reaction;
      })
    );

    // Xử lý selected reaction
    if (selectedReaction === reactionId) {
      setSelectedReaction(null);
    } else {
      if (selectedReaction) {
        setReactions((prevReactions) =>
          prevReactions.map((reaction) => {
            if (reaction.id === selectedReaction) {
              return { ...reaction, count: Math.max(0, reaction.count - 1) };
            }
            return reaction;
          })
        );
      }
      setSelectedReaction(reactionId);
    }

    if (onReactionClick) {
      onReactionClick(reactionId);
    }
  };

  return (
    <div className="w-full my-4 shadow-sm rounded-3xl py-6 min-h-[239px]">
      <div className="font-extrabold text-lg sm:text-xl text-center text-[#33404A] mb-2 px-2">
        Bạn thấy bài viết như thế nào?
      </div>
      <div className="text-center text-sm sm:text-base font-medium text-[#33404A] mb-4">
        {totalReactions} phản hồi
      </div>

      <div className="grid grid-cols-3 gap-2 px-2 sm:flex sm:justify-center sm:space-x-4">
        {reactions.map((reaction) => (
          <Button
            key={reaction.id}
            onClick={() => handleReactionClick(reaction.id)}
            className={`flex flex-col items-center p-1 sm:p-2 rounded-lg transition-all duration-200 ease-in-out sm:min-w-[90px] sm:min-h-[109px] font-medium text-[#33404A] border-2 border-transparent ${
              selectedReaction === reaction.id ? "border-green-500" : ""
            }`}
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2">
              <Image
                src={reaction.imageSrc}
                alt={reaction.label}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-sm sm:text-base font-bold">
              {reaction.count}
            </div>
            <div className="text-xs sm:text-sm">{reaction.label}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}
