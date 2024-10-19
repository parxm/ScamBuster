import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { userId } = req.query;

      // Fetch the user and populate the likedScams field with scam details
      const user = await User.findById(userId).populate("likedScams");

      res.status(200).json(user?.likedScams || []);
    } catch (error) {
      console.error("Error fetching liked scams:", error);
      res.status(500).json({ message: "Error fetching liked scams" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
