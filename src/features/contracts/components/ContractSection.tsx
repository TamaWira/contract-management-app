import { ALL_CONTRACT_STATUSES } from "@/constants/contractStatuses";
import { StatusBar } from "./StatusBar";

export function ContractSection() {
  return (
    <div className="flex gap-2">
      {ALL_CONTRACT_STATUSES.map((status) => (
        <div key={status}>
          <StatusBar status={status} />
        </div>
      ))}
    </div>
  );
}
