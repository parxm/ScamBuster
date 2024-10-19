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
      const { title, content, tags, location, createdBy } = req.body;
      const newScam = new Scam({
        title,
        content,
        tags,
        location,
        createdBy,
      });
      await newScam.save();
      res.status(201).json(newScam);
    } catch (error) {
      res.status(500).json({ message: "Error creating scam" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
