import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const filePath = path.join(process.cwd(), "data/users.json");

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
  }

  return res.status(404).json({ message: "Not found" });
};
