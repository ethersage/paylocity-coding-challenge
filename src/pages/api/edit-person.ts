// pages/api/people/index.js

import peopleData, { Person } from "@/mock-data";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const newPerson: Person = req.body;

      // Add more complex validation, like don't allow multiple employees, for example
      // Simple validation
      if (!newPerson.name) {
        return res.status(400).json({ message: "Name is required" });
      }

      // Check if person already exists (based on id)
      const existingIndex = peopleData.findIndex((p) => p.id === newPerson.id);

      if (existingIndex > -1) {
        // Update existing person
        peopleData[existingIndex] = newPerson;
      } else {
        return res.status(400).json({ message: "Person not found" });
      }

      return res.status(200).json(newPerson);
    } catch (error) {
      return res.status(500).json({ message: "Error processing request" });
    }
  } else {
    // Handle non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
