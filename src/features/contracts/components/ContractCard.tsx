import { Avatar, Card } from "@/components/atoms";
import { StatusBadge } from "@/components/molecules/StatusBadge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/lib/utils";
import { EllipsisVertical, Eye, Link2, Link2Off, Pencil } from "lucide-react";

type Props = {
  avatarUrl: string;
  name: string;
  description: string;
  status: string;
  date: Date | string;
};

export function ContractCard({
  avatarUrl,
  name,
  description,
  status,
  date,
}: Props) {
  return (
    <Card className="p-4 space-y-4">
      {/* Upper section */}
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Avatar avatarUrl={avatarUrl} />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-neutral-dark/70 text-sm font-medium">
              {description}
            </p>
          </div>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full hover:bg-neutral-light p-2 outline-none">
              <EllipsisVertical size={18} className="text-neutral-dark" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom" collisionPadding={8}>
              <DropdownMenuItem>
                <Eye />
                <p>View</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil />
                <p>Edit</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link2 />
                <p>Copy Link</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link2Off />
                <p>Terminate</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Lower section */}
      <div className="flex items-center justify-between">
        <StatusBadge status={status} />
        <p className="text-sm text-neutral-dark/70 font-medium">
          {formatDate(date)}
        </p>
      </div>
    </Card>
  );
}
