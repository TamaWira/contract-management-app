"use client";

import { FileText, Grid } from "lucide-react";
import { usePathname } from "next/navigation";
import { DockItem } from "./DockItem";

export function Dock() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 shadow-md rounded-t-2xl">
      <DockItem
        icon={<FileText />}
        label="Contracts"
        href="/contracts"
        isActive={pathname === "/contracts"}
      />
      <DockItem
        icon={<Grid />}
        label="Templates"
        href="/templates"
        isActive={pathname === "/templates"}
      />
    </nav>
  );
}
