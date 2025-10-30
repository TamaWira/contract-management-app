import { useQuery } from "@tanstack/react-query";
import { GetContractsParams } from "../types";
import { getContracts } from "@/lib/api";

export function useContracts(params?: GetContractsParams) {
  return useQuery({
    queryKey: ["contracts", params],
    queryFn: () => getContracts(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
