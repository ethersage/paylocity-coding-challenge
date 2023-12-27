import { NextApiRequest, NextApiResponse } from "next";
import { peopleData, Person } from "@/mock-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  if (req.method === "GET") {
    const person = peopleData.find((p) => p.id === parseInt(id));

    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json(person);
  }

  if (req.method === "POST") {
    try {
      const newPerson: Person = req.body;

      // TODO: add validation

      // Check if person already exists (based on id)
      const existingIndex = peopleData.findIndex((p) => p.id === newPerson.id);

      if (existingIndex > -1) {
        // Update existing person
        console.log({ newPerson });
        peopleData[existingIndex] = newPerson;
        console.log(peopleData[0].benefits.map((b) => b.type));
      } else {
        return res.status(400).json({ message: "Person not found" });
      }

      return res.status(200).json(newPerson);
    } catch (error) {
      return res.status(500).json({ message: "Error processing request" });
    }
  } else {
    // Handle non-POST requests
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
