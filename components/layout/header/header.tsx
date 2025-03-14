"use client";

import { Dropdown } from "@/components/dropdown/index";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuNavigation from "./menu-navigation";
import SwitchLanguageCTA from "./switch-language-cta";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerClassNameBase =
    "py-4 px-6 md:px-10 lg:px-16 mx-auto lg:rounded-full custom-shadow";
  const widthWhenScrolling = isScrolled ? "max-w-full" : "lg:max-w-[1280px]";
  const effectClassWhenScrolling = isScrolled
    ? "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 lg:rounded-none lg:mt-0"
    : "lg:my-4 transition-all";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${headerClassNameBase} ${widthWhenScrolling} ${effectClassWhenScrolling}`}
    >
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Left column - Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={134}
              height={55}
              priority
            />
          </Link>
        </div>

        {/* Middle column - Navigation (desktop) */}
        <MenuNavigation />

        {/* Right column - Language switcher + CTA button */}
        <SwitchLanguageCTA />

        {/* Mobile menu button */}
        <Button
          className="lg:hidden flex items-center p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile menu (dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-md lg:hidden z-50 p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/about" className="dynamic-text py-2">
              Về chúng tôi
            </Link>
            <Link href="#" className="dynamic-text py-2">
              Giải pháp
            </Link>
            <Link href="#" className="dynamic-text py-2">
              Tài nguyên
            </Link>
            <Dropdown>
              <Dropdown.Trigger className="dynamic-text py-2">
                Giải pháp
              </Dropdown.Trigger>
              <Dropdown.Content className="w-full shadow-none border-none bg-transparent">
                <Dropdown.Item>Giải pháp 1</Dropdown.Item>
                <Dropdown.Item>Giải pháp 2</Dropdown.Item>
                <Dropdown.Item>Giải pháp 3</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
            <Dropdown>
              <Dropdown.Trigger className="dynamic-text py-2">
                Tài nguyên
              </Dropdown.Trigger>
              <Dropdown.Content className="w-full shadow-none border-none bg-transparent">
                <Dropdown.Item>Tài liệu hướng dẫn</Dropdown.Item>
                <Dropdown.Item>Blog</Dropdown.Item>
                <Dropdown.Item>Case study</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
            <Link href="/contact" className="dynamic-text py-2">
              Liên hệ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
