import { Dock, Header } from "@/components/molecules";
import { SearchBar } from "@/features/contracts/components";
import { ContractList } from "@/features/contracts/components/ContractList";

export default function ContractsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="All Contracts" className="shrink-0" />
      <main className="flex-1 space-y-3 bg-neutral-light p-4 overflow-auto">
        <SearchBar />
        <ContractList />
      </main>
      <footer className="shrink-0">
        <Dock />
      </footer>
    </div>
  );
}
