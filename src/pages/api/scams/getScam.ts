import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Scam from "@/models/Scam";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const scams = await Scam.find({});
      res.status(200).json(scams);
    } catch (error) {
      res.status(500).json({ message: "Error fetching scams" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
