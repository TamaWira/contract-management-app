"use client";

import { ALL_CONTRACT_STATUSES } from "@/constants/contractStatuses";
import { StatusBar } from "./StatusBar";

export function StatusBars({
  action,
  activeStatus,
}: {
  action: (status: string) => void;
  activeStatus: string;
}) {
  return (
    <div className="flex gap-2">
      {ALL_CONTRACT_STATUSES.map((status) => (
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
