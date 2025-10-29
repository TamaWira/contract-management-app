"use client";

import React from "react";
import IconButton from "@/components/atoms/IconButton";
import DropdownMenu from "@/components/atoms/DropdownMenu";

type MenuItem = { id: string; label: string; onClick?: () => void };

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  showMenu?: boolean;
  menuItems?: MenuItem[];
  rightSlot?: React.ReactNode;
  className?: string;
}

export function Header({
  title,
  subtitle,
  showBack = false,
  onBack,
  showMenu = false,
  menuItems = [],
  rightSlot,
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`flex items-center justify-between p-4 bg-white border-b-2 border-[#E5E7EC] ${className}`}
    >
      <div className="flex items-center gap-3">
        {showBack ? (
          <IconButton
            aria-label="Back"
            onClick={onBack}
            icon={
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        ) : null}

        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          {subtitle ? (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {rightSlot}
        {showMenu ? (
          <DropdownMenu
            ariaLabel="More options"
            items={menuItems}
            trigger={
              <IconButton
                aria-label="More"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                }
              />
            }
          />
        ) : null}
      </div>
    </header>
  );
}
