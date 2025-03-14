"use client";

import { createContext, useContext } from "react";

export type DropdownContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement>;
};

export const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within a Dropdown");
  }
  return context;
};

export const DropdownProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: DropdownContextType;
}) => {
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
