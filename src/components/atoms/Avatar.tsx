import { cn } from "@/utils";
import Image from "next/image";

type Props = {
  className?: string;
  avatarUrl: string;
  alt?: string;
};

export function Avatar({ className, avatarUrl, alt = "Avatar" }: Props) {
  return (
    <Image
      src={avatarUrl}
      alt={alt}
      width={40}
      height={40}
      className={cn("w-10 h-10 rounded-full object-cover", className)}
    />
  );
}
