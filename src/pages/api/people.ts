import { NextApiRequest, NextApiResponse } from "next";

import { peopleData } from "@/mock-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(peopleData);
  } else {
    // Handle non-POST requests
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
