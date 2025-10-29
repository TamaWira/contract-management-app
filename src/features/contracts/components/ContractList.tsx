import { Contract } from "../contracts.types";
import { ContractCard } from "./ContractCard";
import { ContractSection } from "./ContractSection";

export function ContractList() {
  const contracts: Contract[] = [
    {
      id: "1",
      avatarUrl:
        "https://www.shutterstock.com/image-photo/happy-handsome-young-african-american-600nw-2432719071.jpg",
      name: "Contract A",
      description: "Description for Contract A",
      status: "Signed",
      date: new Date(),
    },
    {
      id: "2",
      avatarUrl:
        "https://www.shutterstock.com/image-photo/happy-young-european-professional-business-260nw-2500948659.jpg",
      name: "Contract A",
      description: "Description for Contract A",
      status: "Pending",
      date: new Date(),
    },
    {
      id: "3",
      avatarUrl:
        "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      name: "Contract A",
      description: "Description for Contract A",
      status: "Terminated",
      date: new Date(),
    },
    {
      id: "4",
      avatarUrl:
        "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
      name: "Contract A",
      description: "Description for Contract A",
      status: "Terminated",
      date: new Date(),
    },
  ];

  return (
    <div className="space-y-6 mb-16">
      <ContractSection />
      <div className="space-y-4">
        {contracts.map((contract) => (
          <ContractCard
            key={contract.id}
            avatarUrl={contract.avatarUrl}
            name={contract.name}
            description={contract.description}
            status={contract.status}
            date={contract.date}
          />
        ))}
      </div>
    </div>
  );
}
