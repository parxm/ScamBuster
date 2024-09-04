import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Scam from "@/models/Scam";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { scamId } = req.body;
      await Scam.findByIdAndUpdate(scamId, { $inc: { upvotes: 1 } });
      res.status(200).json({ message: "Scam liked successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error liking scam" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
