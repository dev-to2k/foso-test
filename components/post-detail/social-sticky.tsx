"use client";
import { Fragment, useEffect, useState } from "react";
import { Dropdown } from "../ui/dropdown";

const SECTIONS = [
  {
    id: "section-1",
    title: "1. Quy trình 5S là gì?",
  },
  {
    id: "section-2",
    title: "2. Lợi ích quy trình 5S đem lại",
  },
  {
    id: "section-3",
    title: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
    subsections: [
      {
        id: "section-3-1",
        title: "3.1 Cải thiện ổn định môi trường làm việc",
      },
      {
        id: "section-3-2",
        title: "3.2 Tiết kiệm thời gian dùng vật liệu",
      },
      {
        id: "section-3-3",
        title: "3.3 Tăng năng suất làm việc",
      },
      {
        id: "section-3-4",
        title: "3.4 Tiết kiệm chi phí",
      },
      {
        id: "section-3-5",
        title: "3.5 Tăng chất lượng sản phẩm",
      },
    ],
  },
  {
    id: "section-4",
    title: "4. Quy trình 5S gồm các bước:",
    subsections: [
      {
        id: "section-4-1",
        title: "4.1 Seiri (Ngăn nắp)",
      },
      {
        id: "section-4-2",
        title: "4.2 Seiton (Sắp xếp)",
      },
      {
        id: "section-4-3",
        title: "4.3 Seiso (Vệ sinh)",
      },
      {
        id: "section-4-4",
        title: "4.4 Seiketsu (Tiêu chuẩn hóa)",
      },
      {
        id: "section-4-5",
        title: "4.5 Shitsuke (Kỷ luật)",
      },
    ],
  },
  {
    id: "section-5",
    title: "5. Quy trình được thực hiện như sau:",
  },
  {
    id: "section-6",
    title: "6. Quy trình 5S có giống với Kaizen?",
  },
  {
    id: "section-7",
    title: "7. Đối tượng nào nên áp dụng 5S?",
  },
  {
    id: "section-8",
    title: "8. Các yếu tố lưu ý nên tham công cho quy trình 5S",
  },
];

export default function SocialSticky() {
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".prose h2, .prose h3");
      const scrollPosition =
        window.innerWidth >= 1024
          ? window.scrollY + 150
          : document.documentElement.scrollTop + 100;

      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top +
          (window.innerWidth >= 1024
            ? window.scrollY
            : document.documentElement.scrollTop);
        const sectionId = section.getAttribute("id");

        if (sectionTop <= scrollPosition) {
          setActiveSection(sectionId || "");
        }
      });
    };

    const scrollContainer =
      window.innerWidth >= 1024
        ? document.querySelector(".main-container")
        : window;

    scrollContainer?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    const mainContainer = document.querySelector(".main-container");

    if (element) {
      const offset = window.innerWidth >= 1024 ? 100 : 80;

      if (window.innerWidth >= 1024 && mainContainer) {
        const elementPosition = element.getBoundingClientRect().top;
        const containerScrollTop = mainContainer.scrollTop;
        const offsetPosition = elementPosition + containerScrollTop - offset;

        mainContainer.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        const offsetPosition = element.offsetTop - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const renderLink = (
    section: { id: string; title: string },
    isSubsection = false
  ) => (
    <li key={section.id} className={isSubsection ? "pl-4" : ""}>
      <a
        href={`#${section.id}`}
        onClick={(e) => handleClick(e, section.id)}
        className={`${
          activeSection === section.id ? "text-[#15AA7A] font-bold" : ""
        } hover:text-[#15AA7A] transition-colors`}
      >
        {section.title}
      </a>
    </li>
  );

  return (
    <Dropdown disableAutoClose className="lg:block">
      <Dropdown.Trigger isOpen={true}>
        <h3 className="text-xl sm:text-2xl font-extrabold cursor-pointer">
          Nội Dung Bài Viết
        </h3>
      </Dropdown.Trigger>

      <Dropdown.Content className="relative bg-transparent shadow-none">
        <ul className="space-y-3 sm:space-y-4 font-medium text-[#33404A] text-base sm:text-lg">
          {SECTIONS.map((section) => (
            <Fragment key={section.id}>
              {renderLink(section)}
              {section.subsections?.map((subsection) =>
                renderLink(subsection, true)
              )}
            </Fragment>
          ))}
        </ul>
      </Dropdown.Content>
    </Dropdown>
  );
}
