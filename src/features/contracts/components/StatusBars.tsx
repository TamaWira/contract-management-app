"use client";

import { CONTRACT_STATUSES } from "@/constants/contractStatuses";
import { ContractStatus } from "../types";
import { StatusBar } from "./StatusBar";

export function StatusBars({
  action,
  activeStatus,
}: {
  action: (status: ContractStatus) => void;
  activeStatus: string;
}) {
  return (
    <div className="flex gap-2">
      {Object.values(CONTRACT_STATUSES).map((status) => (
        <div key={status}>
          <StatusBar
            status={status}
            activeStatus={activeStatus}
            action={action}
          />
        </div>
      ))}
    </div>
  );
}
