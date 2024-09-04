import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Scam from "@/models/Scam";
import Comment from "@/models/Comment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { scamId, content, createdBy } = req.body;
      const newComment = new Comment({ content, createdBy });
      await newComment.save();

      await Scam.findByIdAndUpdate(scamId, {
        $push: { comments: newComment._id },
      });

      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ message: "Error adding comment" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
