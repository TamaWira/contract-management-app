export enum CONTRACT_STATUSES {
  PENDING = "Pending",
  SIGNED = "Signed",
  TERMINATED = "Terminated",
}

export const ALL_CONTRACT_STATUSES = Object.values({
  ALL: "All",
  ...CONTRACT_STATUSES,
});
