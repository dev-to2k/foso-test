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
    <span className="inline-block text-transparent bg-clip-text font-extrabold text-3xl md:text-5xl lg:text-[64px] text-foso">
      FOSO
    </span>
  );

  return (
    <div className="relative w-full main-heading">
      {/* Background images */}
      <div className="absolute w-full h-full -z-20 pointer-events-none background-image">
        <Image
          src="/images/calendar.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="calendar"
          className={`absolute w-[120px] sm:w-[150px] md:w-[175px] lg:w-[195px] h-auto top-1/2 -translate-y-1/2 -left-2 sm:left-0 md:left-5 lg:-left-10 xl:-left-20 2xl:left-1 animate-fade-in-up ${
            showFloat ? "animate-float" : ""
          }`}
        />
        <Image
          src="/images/hand-pencil.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="handle-pencil"
          className={`absolute w-[120px] sm:w-[150px] md:w-[175px] lg:w-[195px] h-auto top-1/2 -translate-y-1/2 -right-2 sm:right-0 md:right-5 lg:right-10 xl:right-20 2xl:right-0 animate-fade-in-up ${
            showFloat ? "animate-float" : ""
          }`}
        />
      </div>

      <section className="main-heading relative max-w-[1280px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[392px] mx-auto overflow-hidden font-raleway">
        <div className="px-4 sm:px-6 md:px-10 lg:px-0 flex flex-col justify-between items-center h-full">
          <Breadcrumb
            autoGenerate
            postTitle={postTitle}
            className="animate-fade-in"
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-center font-normal mt-8 sm:mt-12 md:mt-16 leading-normal sm:leading-relaxed md:leading-[100px]">
            <p
              className="animate-scale-in opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Blog {fosoText} -
            </p>
            <p
              className="animate-scale-in opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              Cập Nhật Tin Tức{" "}
              <span className="highlight-text animate">Mới Nhất</span>
            </p>
          </h1>
          <h3
            className="text-base sm:text-lg mb-auto text-[#33404A] animate-scale-in opacity-0 px-4 text-center"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </h3>
        </div>
      </section>
    </div>
  );
}
