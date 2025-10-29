import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex bg-white rounded-md p-2 ">
      <Search className="mx-3 text-neutral-dark" size={20} />
      <input
        className="w-full text-sm outline-none h-full"
        type="text"
        placeholder="Search by tenant or template name"
      />
    </div>
  );
}
