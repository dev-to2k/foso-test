"use client";
import { useEffect, useState } from "react";
import { Dropdown } from "../ui/dropdown";

export default function SocialSticky() {
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".prose h2, .prose h3");
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionId = section.getAttribute("id");

        if (sectionTop <= scrollPosition) {
          setActiveSection(sectionId || "");
        }
      });
    };

    // Listen for scroll events on the main container
    const mainContainer = document.querySelector(".main-container");
    mainContainer?.addEventListener("scroll", handleScroll);

    return () => {
      mainContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    const mainContainer = document.querySelector(".main-container");

    if (element && mainContainer) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const containerScrollTop = mainContainer.scrollTop;
      const offsetPosition = elementPosition + containerScrollTop - offset;

      mainContainer.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Dropdown disableAutoClose>
      <Dropdown.Trigger isOpen={true}>
        <h3 className="text-2xl font-extrabold cursor-pointer">
          Nội Dung Bài Viết
        </h3>
      </Dropdown.Trigger>

      <Dropdown.Content className="relative bg-transparent shadow-none">
        <ul className="space-y-4 font-medium text-[#33404A] text-lg">
          <li>
            <a
              href="#section-1"
              onClick={(e) => handleClick(e, "section-1")}
              className={`${
                activeSection === "section-1" ? "text-[#15AA7A] font-bold" : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              1. Quy trình 5S là gì?
            </a>
          </li>
          <li>
            <a
              href="#section-2"
              onClick={(e) => handleClick(e, "section-2")}
              className={`${
                activeSection === "section-2" ? "text-[#15AA7A] font-bold" : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              2. Lợi ích quy trình 5S đem lại
            </a>
          </li>
          <li>
            <a
              href="#section-3"
              onClick={(e) => handleClick(e, "section-3")}
              className={`${
                activeSection === "section-3" ? "text-[#15AA7A] font-bold" : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
            </a>
          </li>
          <li className="pl-4">
            <a
              href="#section-3-1"
              onClick={(e) => handleClick(e, "section-3-1")}
              className={`${
                activeSection === "section-3-1"
                  ? "text-[#15AA7A] font-bold"
                  : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              3.1 Cải thiện ổn định môi trường làm việc
            </a>
          </li>
          <li className="pl-4">
            <a
              href="#section-3-2"
              onClick={(e) => handleClick(e, "section-3-2")}
              className={`${
                activeSection === "section-3-2"
                  ? "text-[#15AA7A] font-bold"
                  : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              3.2 Tiết kiệm thời gian dùng vật liệu
            </a>
          </li>
          <li className="pl-4">
            <a
              href="#section-3-3"
              onClick={(e) => handleClick(e, "section-3-3")}
              className={`${
                activeSection === "section-3-3"
                  ? "text-[#15AA7A] font-bold"
                  : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              3.3 Tăng năng suất làm việc
            </a>
          </li>
          <li className="pl-4">
            <a
              href="#section-3-4"
              onClick={(e) => handleClick(e, "section-3-4")}
              className={`${
                activeSection === "section-3-4"
                  ? "text-[#15AA7A] font-bold"
                  : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              3.4 Tiết kiệm chi phí
            </a>
          </li>
          <li className="pl-4">
            <a
              href="#section-3-5"
              onClick={(e) => handleClick(e, "section-3-5")}
              className={`${
                activeSection === "section-3-5"
                  ? "text-[#15AA7A] font-bold"
                  : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              3.5 Tăng chất lượng sản phẩm
            </a>
          </li>
          <li>
            <a
              href="#section-4"
              onClick={(e) => handleClick(e, "section-4")}
              className={`${
                activeSection === "section-4" ? "text-[#15AA7A] font-bold" : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              4. Quy trình 5S gồm các bước:
            </a>
          </li>
          <li>
            <a
              href="#section-5"
              onClick={(e) => handleClick(e, "section-5")}
              className={`${
                activeSection === "section-5" ? "text-[#15AA7A] font-bold" : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              5. Quy trình được thực hiện như sau:
            </a>
          </li>
          <li>
            <a
              href="#section-6"
              onClick={(e) => handleClick(e, "section-6")}
              className={`${
                activeSection === "section-6" ? "text-[#15AA7A] font-bold" : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              6. Quy trình 5S có giống với Kaizen?
            </a>
          </li>
          <li>
            <a
              href="#section-7"
              onClick={(e) => handleClick(e, "section-7")}
              className={`${
                activeSection === "section-7" ? "text-[#15AA7A] font-bold" : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              7. Đối tượng nào nên áp dụng 5S?
            </a>
          </li>
          <li>
            <a
              href="#section-8"
              onClick={(e) => handleClick(e, "section-8")}
              className={`${
                activeSection === "section-8" ? "text-[#15AA7A] font-bold" : ""
              } hover:text-[#15AA7A] transition-colors`}
            >
              8. Các yếu tố lưu ý nên tham công cho quy trình 5S
            </a>
          </li>
        </ul>
      </Dropdown.Content>
    </Dropdown>
  );
}
