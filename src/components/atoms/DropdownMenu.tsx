"use client";
import React from "react";

type Item = { id: string; label: string; onClick?: () => void };

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: Item[];
  ariaLabel?: string;
}

export default function DropdownMenu({
  trigger,
  items,
  ariaLabel,
}: DropdownMenuProps) {
  // Simple: You'd replace this with a proper accessible menu library.
  return (
    <div className="relative">
      <div>{trigger}</div>
      <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
        {items.map((it) => (
          <button
            key={it.id}
            className="w-full text-left px-3 py-2 hover:bg-gray-100"
            onClick={it.onClick}
            type="button"
          >
            {it.label}
          </button>
        ))}
      </div>
    </div>
  );
}
