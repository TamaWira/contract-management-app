"use client";
import Link from "next/link";
import { cn } from "@/utils"; // optional helper for classnames

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

export function DockItem({ icon, label, href, isActive }: DockItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center text-sm transition-colors",
        isActive ? "text-indigo-600" : "text-gray-500 hover:text-indigo-500"
      )}
    >
      <div className="w-6 h-6">{icon}</div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}
