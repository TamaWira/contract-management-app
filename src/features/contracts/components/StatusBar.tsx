import { Card } from "@/components/atoms";

type Props = {
  status: string;
};

export function StatusBar({ status }: Props) {
  return (
    <Card className="text-sm px-4 py-2 text-center font-semibold text-neutral-dark">
      {status}
    </Card>
  );
}
