// src/components/ui/Card.tsx
import { cn } from "@/utils";
import { ReactNode } from "react";

type CardVariant = "default" | "outline" | "filled" | "interactive";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  variant = "default",
  onClick,
}: CardProps) {
  const base = "rounded-md transition-shadow duration-200";
  const variants = {
    default: "bg-white shadow-md",
    outline: "border border-neutral-300 bg-transparent",
    filled: "bg-neutral-100 border border-transparent",
    interactive:
      "bg-white border border-neutral-200 hover:shadow-md cursor-pointer",
  };

  return (
    <div onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </div>
  );
}
