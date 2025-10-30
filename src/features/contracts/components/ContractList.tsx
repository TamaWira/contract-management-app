"use client";

import { useState } from "react";
import { useContracts } from "../hooks/useContracts";
import { ContractCard } from "./ContractCard";
import { ContractListSkeleton } from "./ContractListSkeleton";
import { StatusBars } from "./StatusBars";
import { ContractStatus } from "../types";
import { ContractsEmpty } from "./ContractsEmpty";

export function ContractList() {
  const [status, setStatus] = useState<ContractStatus>("All");
  const { data: contracts, isLoading, error } = useContracts({ status });

  const handleStatusChange = (newStatus: ContractStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className="space-y-6 mb-16">
      <StatusBars action={handleStatusChange} activeStatus={status} />
      {isLoading ? (
        <ContractListSkeleton />
      ) : !contracts || !contracts.length || error ? (
        <ContractsEmpty error={error} />
      ) : (
        <div className="space-y-4">
          {contracts &&
            contracts.map((contract) => (
              <ContractCard key={contract.id} contract={contract} />
            ))}
        </div>
      )}
    </div>
  );
}
