import { Avatar, Card } from "@/components/atoms";
import { StatusBadge } from "@/components/molecules/StatusBadge";
import { formatDate } from "@/utils";
import { Contract } from "../types";
import { ContractCardDropdown } from "./ContractCardDropdown";

type Props = {
  contract: Contract;
};

export function ContractCard({ contract }: Props) {
  return (
    <Card className="p-4 space-y-4">
      {/* Upper section */}
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Avatar avatarUrl={contract.avatarUrl} />
          <div>
            <p className="font-semibold">{contract.name}</p>
            <p className="text-neutral-dark/70 text-sm font-medium">
              {contract.description}
            </p>
          </div>
        </div>
        <ContractCardDropdown contract={contract} />
      </div>

      {/* Lower section */}
      <div className="flex items-center justify-between">
        <StatusBadge status={contract.status} />
        <p className="text-sm text-neutral-dark/70 font-medium">
          {formatDate(contract.date)}
        </p>
      </div>
    </Card>
  );
}
