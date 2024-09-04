import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { userId, name, email, password } = req.body;

      let user;

      if (userId) {
        // Try to find the existing user by ID and update the name
        user = await User.findByIdAndUpdate(
          userId,
          { name },
          { new: true, runValidators: true }
        );
      }

      if (!user) {
        // If no user exists with the provided ID, create a new user
        user = new User({
          name,
          email,
          password,
        });
        await user.save();
      }

      res
        .status(200)
        .json({ message: "Profile created/updated successfully", user });
    } catch (error) {
      console.error("Error updating/creating profile:", error);
      res.status(500).json({ message: "Error updating/creating profile" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
