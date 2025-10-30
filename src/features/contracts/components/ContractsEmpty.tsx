import { Frown } from "lucide-react";

type Props = {
  error: Error | null;
};

export function ContractsEmpty({ error }: Props) {
  return (
    <div className="flex flex-col items-center space-y-3 mt-20">
      <Frown size={32} />
      {error ? (
        <div className="text-center">
          <p>Failed to get contracts:</p>
          <p>{error.message}</p>
        </div>
      ) : (
        <p>There are no contracts at the moment</p>
      )}
    </div>
  );
}
