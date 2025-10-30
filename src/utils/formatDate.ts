import { format } from "date-fns";

/**
 * Format a date to "MMM d, yyyy" format (e.g., "Oct 26, 2023")
 */
export function formatDate(date: string | Date): string {
  return format(new Date(date), "MMM d, yyyy");
}
