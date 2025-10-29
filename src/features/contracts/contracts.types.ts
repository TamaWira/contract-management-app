import { CONTRACT_STATUSES } from "@/constants/contractStatuses";

export type Contract = {
  id: string;
  avatarUrl: string;
  name: string;
  description: string;
  status: `${CONTRACT_STATUSES}`;
  date: Date | string;
};
