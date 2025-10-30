import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Contract } from "../types";
import { EllipsisVertical, Eye, Link2, Link2Off, Pencil } from "lucide-react";

type Props = {
  contract: Contract;
};

export function ContractCardDropdown({ contract }: Props) {
  return (
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
  );
}
