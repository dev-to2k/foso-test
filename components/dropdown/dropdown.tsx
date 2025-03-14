"use client";
import { DropdownProvider } from "@/hooks/use-dropdown";
import React, { useEffect, useRef, useState } from "react";
import Content from "./content";
import Item from "./item";
import Trigger from "./trigger";

interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

function Dropdown({ children, className = "" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownProvider
      value={{
        isOpen,
        setIsOpen,
        dropdownRef: dropdownRef as React.RefObject<HTMLDivElement>,
      }}
    >
      <div className={`relative ${className}`} ref={dropdownRef}>
        {children}
      </div>
    </DropdownProvider>
  );
}

Dropdown.Content = Content;
Dropdown.Trigger = Trigger;
Dropdown.Item = Item;

export default Dropdown;
