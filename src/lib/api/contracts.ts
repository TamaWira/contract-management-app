import { CONTRACT_STATUSES } from "@/constants/contractStatuses";
import { Contract, GetContractsParams } from "@/features/contracts/types";
import { apiClient } from "./client";

export async function getContracts(
  params?: GetContractsParams,
): Promise<Contract[]> {
  const response = await apiClient.get("/contracts", { params });
  return response.data;
}
