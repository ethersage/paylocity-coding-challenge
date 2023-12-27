// pages/api/people/index.js

import peopleData from "@/mock-data";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(peopleData);
}
