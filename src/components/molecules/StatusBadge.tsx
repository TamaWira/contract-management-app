import { CONTRACT_STATUSES } from "@/constants/contractStatuses";

export function StatusBadge({ status }: { status: string }) {
  const backgroundColor =
    status === CONTRACT_STATUSES.SIGNED
      ? "bg-success-light"
      : status === CONTRACT_STATUSES.PENDING
      ? "bg-warning-light"
      : CONTRACT_STATUSES.TERMINATED
      ? "bg-error-light"
      : "bg-white";

  const textColor =
    status === CONTRACT_STATUSES.SIGNED
      ? "text-success-dark"
      : status === CONTRACT_STATUSES.PENDING
      ? "text-warning-dark"
      : CONTRACT_STATUSES.TERMINATED
      ? "text-error-dark"
      : "text-black";

  return (
    <div
      className={`${backgroundColor} ${textColor} px-2 py-1 rounded-full text-xs font-semibold`}
    >
      <p>{status}</p>
    </div>
  );
}
