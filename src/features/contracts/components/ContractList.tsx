"use client";

import { useEffect, useState } from "react";
import { Contract } from "../contracts.types";
import { ContractCard } from "./ContractCard";
import { StatusBars } from "./StatusBars";

export function ContractList() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/contracts?status=${status}`,
        );
        setContracts(await data.json());
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContracts();
  }, [status]);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  return (
    <div className="space-y-6 mb-16">
      <StatusBars action={handleStatusChange} activeStatus={status} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-y-4">
          {contracts.map((contract) => (
            <ContractCard
              key={contract.id}
              avatarUrl={contract.avatarUrl}
              name={contract.name}
              description={contract.description}
              status={contract.status}
              date={contract.date}
            />
          ))}
        </div>
      )}
    </div>
  );
}
