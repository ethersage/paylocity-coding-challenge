import { NextApiRequest, NextApiResponse } from "next";
import peopleData from "@/mock-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const person = peopleData.find((p) => p.id === parseInt(id));

  if (!person) {
    return res.status(404).json({ message: "Person not found" });
  }

  res.status(200).json(person);
}
