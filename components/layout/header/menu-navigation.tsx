"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown } from "../../ui/dropdown";

export default function MenuNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  // Check if current path is in the resources section
  const isResourcesActive =
    pathname.startsWith("/giai-phap") ||
    pathname.startsWith("/tai-nguyen") ||
    pathname.includes("/blog");

  const handleDropdownItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="hidden lg:flex items-center justify-center flex-1 mx-10 h-[37px]">
      <ul className="flex lg:space-x-5 xl:space-x-8">
        <li className="h-[37px] leading-[37px]">
          <Link
            href="/chung-toi"
            className={`dynamic-text relative ${
              pathname === "/chung-toi" ? "font-bold" : ""
            }`}
          >
            Về chúng tôi
            {pathname === "/chung-toi" && (
              <span className="absolute w-[6px] h-[6px] bg-[#1AD598] rounded-full bottom-[-8px] left-1/2 transform -translate-x-1/2"></span>
            )}
          </Link>
        </li>
        <li className="h-[37px] leading-[37px]">
          <Dropdown className="inline-block">
            <Dropdown.Trigger
              isOpen={false}
              className={`dynamic-text ${
                pathname.startsWith("/giai-phap") ? "font-bold" : ""
              }`}
            >
              Giải pháp
              {pathname.startsWith("/giai-phap") && (
                <span className="absolute w-[6px] h-[6px] bg-[#1AD598] rounded-full bottom-[-8px] left-1/2 transform -translate-x-1/2"></span>
              )}
            </Dropdown.Trigger>
            <Dropdown.Content className="min-w-[200px]">
              <Dropdown.Item
                onClick={() => handleDropdownItemClick("/giai-phap/1")}
              >
                Giải pháp 1
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleDropdownItemClick("/giai-phap/2")}
              >
                Giải pháp 2
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleDropdownItemClick("/giai-phap/3")}
              >
                Giải pháp 3
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </li>
        <li className="h-[37px] leading-[37px]">
          <Dropdown className="inline-block">
            <Dropdown.Trigger
              isOpen={false}
              className={`dynamic-text ${isResourcesActive ? "font-bold" : ""}`}
            >
              Tài nguyên
              {isResourcesActive && (
                <span className="absolute w-[6px] h-[6px] bg-[#1AD598] rounded-full bottom-[-8px] left-1/2 transform -translate-x-1/2"></span>
              )}
            </Dropdown.Trigger>
            <Dropdown.Content className="min-w-[200px]">
              <Dropdown.Item>Tài liệu hướng dẫn</Dropdown.Item>
              <Dropdown.Item onClick={() => router.push("/tai-nguyen/blog")}>
                Blog
              </Dropdown.Item>
              <Dropdown.Item>Case study</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </li>
        <li className="h-[37px] leading-[37px]">
          <Link
            href="/lien-he"
            className={`dynamic-text relative ${
              pathname === "/lien-he" ? "font-bold" : ""
            }`}
          >
            Liên hệ
            {pathname === "/lien-he" && (
              <span className="absolute w-[6px] h-[6px] bg-[#1AD598] rounded-full bottom-[-8px] left-1/2 transform -translate-x-1/2"></span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
