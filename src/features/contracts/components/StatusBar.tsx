import { Card } from "@/components/atoms";
import { cn } from "@/utils";

type Props = {
  status: string;
  activeStatus: string;
  action: (status: string) => void;
};

export function StatusBar({ status, activeStatus, action }: Props) {
  return (
    <Card
      className={cn(
        `text-sm px-4 py-2 text-center font-semibold text-neutral-dark`,
        {
          "bg-neutral-light": status === activeStatus,
        },
      )}
    >
      <button onClick={() => action(status)}>{status}</button>
    </Card>
  );
}
