"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Breadcrumb from "../ui/breadcrumb";

interface MainHeadingProps {
  postTitle?: string;
}

export default function MainHeading({ postTitle }: MainHeadingProps = {}) {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloat(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const fosoText = (
    <span
      className="inline-block text-transparent bg-clip-text font-bold text-[64px]"
      style={{
        background:
          "linear-gradient(150deg, rgba(21,170,122,1) 0%, rgba(130,232,156,1) 50%, rgba(21,170,122,1) 100%)",
        backgroundClip: "text",
      }}
    >
      FOSO
    </span>
  );

  const newestText = (
    <span className="relative inline-block font-bold">
      Mới Nhất
      <div className="bg-[#A3EED6] rounded-full h-[28px] w-full absolute bottom-3 -z-10"></div>
    </span>
  );

  return (
    <section className="main-heading relative">
      <Image
        src="/images/calendar.png"
        width={195}
        height={190}
        alt="calendar"
        className={`absolute top-1/2 -translate-y-1/2 left-0 animate-fade-in-up ${
          showFloat ? "animate-float" : ""
        }`}
      />
      <Image
        src="/images/hand-pencil.png"
        width={195}
        height={190}
        alt="handle-pencil"
        className={`absolute top-1/2 -translate-y-1/2 right-0 animate-fade-in-up ${
          showFloat ? "animate-float" : ""
        }`}
      />
      <div className="max-w-[1280px] h-[392px] mx-auto px-6 md:px-10 lg:px-0 flex flex-col justify-between items-center mt-20 mb-20">
        <Breadcrumb autoGenerate postTitle={postTitle} />

        <h1 className="text-[64px] text-center font-normal mt-auto">
          Blog {fosoText} - <br /> Cập Nhật Tin Tức {newestText}
        </h1>
        <h3 className="text-lg mt-4 mb-auto">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </h3>
      </div>
    </section>
  );
}
