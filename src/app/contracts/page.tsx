import { Dock, Header } from "@/components/molecules";
import { SearchBar } from "@/features/contracts/components";
import { ContractList } from "@/features/contracts/components/ContractList";

export default function ContractsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="All Contracts" className="shrink-0" />
      <main className="bg-neutral-light flex-1 overflow-auto p-4 space-y-3">
        <SearchBar />
        <ContractList />
      </main>
      <footer className="shrink-0">
        <Dock />
      </footer>
    </div>
  );
}
