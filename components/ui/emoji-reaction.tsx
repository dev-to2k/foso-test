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
  totalReactions = 4,
  onReactionClick,
}: EmojiReactionProps) {
  const [reactions, setReactions] = useState<Reaction[]>(initialReactions);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  const handleReactionClick = (reactionId: string) => {
    // Toggle reaction
    setReactions((prevReactions) =>
      prevReactions.map((reaction) => {
        if (reaction.id === reactionId) {
          // If already selected, deselect it
          if (selectedReaction === reactionId) {
            return { ...reaction, count: Math.max(0, reaction.count - 1) };
          }
          // Otherwise, select it
          return { ...reaction, count: reaction.count + 1 };
        }
        return reaction;
      })
    );

    // If already selected, deselect it
    if (selectedReaction === reactionId) {
      setSelectedReaction(null);
    } else {
      // If another reaction was selected, decrement its count
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

    // Call the callback if provided
    if (onReactionClick) {
      onReactionClick(reactionId);
    }
  };

  return (
    <div className="w-full my-4 shadow-sm rounded-3xl h-[239px] py-6">
      <div className="font-extrabold text-xl text-center text-[#33404A] mb-2">
        Bạn thấy bài viết như thế nào?
      </div>
      <div className="text-center text-base font-medium text-[#33404A] mb-4">
        {totalReactions} phản hồi
      </div>

      <div className="flex justify-center space-x-2 md:space-x-4">
        {reactions.map((reaction) => (
          <Button
            key={reaction.id}
            onClick={() => handleReactionClick(reaction.id)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all min-w-[90px] min-h-[109px] font-medium text-[#33404A] ${
              selectedReaction === reaction.id
                ? "border-2 border-green-500"
                : "hover:border-gray-300"
            }`}
          >
            <div className="relative w-10 h-10 mb-2">
              <Image
                src={reaction.imageSrc}
                alt={reaction.label}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-base font-bold">{reaction.count}</div>
            <div className="text-sm">{reaction.label}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}
