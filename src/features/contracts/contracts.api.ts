import { Contract } from "./contracts.types";

export async function getContracts(status: string): Promise<Contract[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/contracts?status=${status}`,
    {
      cache: "no-store",
    },
  );
  return await response.json();
}

export async function getContract(id: string): Promise<Contract> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/contracts/${id}`,
  );
  return await response.json();
}
