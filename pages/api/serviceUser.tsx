import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const filePath = path.join(process.cwd(), "data/users.json");

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // Read data from the JSON file
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return res.status(200).json(data);
  } else if (req.method === "POST") {
    // Create a new item
    const newItem = { id: Date.now(), ...req.body };
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    data.push(newItem);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return res.status(201).json(newItem);
  } else if (req.method === "PUT") {
    // Update an existing item
    const { id, ...updatedFields } = req.body;
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const updatedData = data.map((item: { id: any }) =>
      item.id === id ? { ...item, ...updatedFields } : item
    );
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    return res
      .status(200)
      .json(updatedData.find((item: { id: any }) => item.id === id));
  } else if (req.method === "DELETE") {
    // Delete an item
    const { id } = req.body;
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const updatedData = data.filter((item: { id: any }) => item.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    return res.status(200).json({ message: "Item deleted successfully" });
  }

  return res.status(404).json({ message: "Not found" });
};
