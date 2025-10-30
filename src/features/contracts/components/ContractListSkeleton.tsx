import { Skeleton } from "@/components/ui/skeleton";

export function ContractListSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Skeleton key={idx} className="w-full h-28 bg-neutral-dark/50" />
      ))}
    </>
  );
}
