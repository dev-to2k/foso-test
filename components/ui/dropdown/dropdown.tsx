"use client";
import { DropdownProvider } from "@/hooks/use-dropdown";
import React, { useEffect, useRef, useState } from "react";
import Content from "./content";
import Item from "./item";
import Trigger from "./trigger";

interface DropdownProps {
  children: React.ReactNode;
  className?: string;
  disableAutoClose?: boolean; // new prop
}

function Dropdown({
  children,
  className = "",
  disableAutoClose = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!disableAutoClose) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [disableAutoClose]);

  return (
    <DropdownProvider
      value={{
        isOpen,
        setIsOpen,
        dropdownRef: dropdownRef as React.RefObject<HTMLDivElement>,
      }}
    >
      <div
        className={`custom-dropdown relative ${className}`}
        ref={dropdownRef}
      >
        {children}
      </div>
    </DropdownProvider>
  );
}

Dropdown.Content = Content;
Dropdown.Trigger = Trigger;
Dropdown.Item = Item;

export default Dropdown;
