import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, followId } = req.body;

    if (!userId || !followId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      await dbConnect(); // Ensure the connection is established
      const result = await mongoose.connection
        .collection("users")
        .updateOne(
          { _id: new ObjectId(userId) },
          { $addToSet: { following: new ObjectId(followId) } }
        );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({ message: "User followed successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
