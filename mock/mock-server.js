import express, { json } from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(json());

// Helper function for delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const contracts = [
  {
    id: 1,
    avatarUrl:
      "https://www.shutterstock.com/image-photo/happy-handsome-young-african-american-600nw-2432719071.jpg",
    name: "Contract A",
    description: "Description for Contract A",
    status: "Signed",
    date: new Date(),
  },
  {
    id: 2,
    avatarUrl:
      "https://www.shutterstock.com/image-photo/happy-young-european-professional-business-260nw-2500948659.jpg",
    name: "Contract A",
    description: "Description for Contract A",
    status: "Pending",
    date: new Date(),
  },
  {
    id: 3,
    avatarUrl:
      "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
    name: "Contract A",
    description: "Description for Contract A",
    status: "Terminated",
    date: new Date(),
  },
  {
    id: 4,
    avatarUrl:
      "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
    name: "Contract A",
    description: "Description for Contract A",
    status: "Terminated",
    date: new Date(),
  },
];

app.get("/api/contracts", async (req, res) => {
  const { status } = req.query;
  const filteredContracts =
    status && status !== "All"
      ? contracts.filter((contract) => contract.status === status)
      : contracts;

  await delay(750);
  res.json(filteredContracts);
});

app.post("/api/contracts", (req, res) => {
  const newContract = { id: contracts.length + 1, ...req.body };
  contracts.push(newContract);
  res.status(201).json(newContract);
});

app.listen(3001, () => {
  console.log("Mock server running on http://localhost:3001");
});
