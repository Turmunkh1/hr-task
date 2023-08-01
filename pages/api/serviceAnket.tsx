import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const filePath = path.join(process.cwd(), "data/anket.json");

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return res.status(200).json(data);
  } else if (req.method === "POST") {
    const newItem = { id: Date.now(), ...req.body };
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    data.push(newItem);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return res.status(201).json(newItem);
  } else if (req.method === "PUT") {
    const { id, ...updatedFields } = req.body;
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const updatedData = data.map((item: { id: any }) =>
      item.id === id ? { ...item, ...updatedFields } : item
    );
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    return res
      .status(200)
      .json(updatedData.find((item: { id: any }) => item.id === id));
  }

  return res.status(404).json({ message: "Not found" });
};
