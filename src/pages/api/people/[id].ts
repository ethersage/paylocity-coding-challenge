import { NextApiRequest, NextApiResponse } from "next";

import { peopleData, Person } from "@/mock-data";

// TODO: move into it's own module
// See README for rationale behind calculation
function calculateAnnualCost(person: Person) {
  let cost = 0;

  const costPerBenefit = person.type === "Employee" ? 1000 : 500;
  cost = person.benefits.length * costPerBenefit;

  // API should make sure name should never be empty, but just in case
  if (person.firstName.length > 0) {
    // Maybe API should be capitalizing names for us, but it doesn't currently
    // Not even sure what the business rules around that should be as names can have
    // different capitalization rules in different cultures
    const discount =
      person.firstName[0] === "A" || person.firstName[0] === "a" ? 0.1 : 0;

    cost = cost * (1 - discount);
  }

  return cost;
}

function calculatePerPayPeriodCost(cost: number) {
  return cost / 26;
}

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
        newPerson.annualCost = calculateAnnualCost(newPerson);
        newPerson.perPayPeriodCost = calculatePerPayPeriodCost(
          newPerson.annualCost
        );
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
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
