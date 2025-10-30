import { CONTRACT_STATUSES } from "@/constants/contractStatuses";

export type Contract = {
  id: number;
  avatarUrl: string;
  name: string;
  description: string;
  status: `${CONTRACT_STATUSES}`;
  date: Date | string;
};

export type ContractStatus = "All" | "Pending" | "Signed" | "Terminated";

export type GetContractsParams = {
  status?: `${CONTRACT_STATUSES}`;
  limit?: number;
  offset?: number;
};
