import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { userId, name, email, password } = req.body;

    try {
      if (userId) {
        // Update existing user profile
        const user = await User.findByIdAndUpdate(
          userId,
          { name },
          { new: true, runValidators: true }
        );

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "Profile updated successfully", user });
      }

      // If no userId, handle signup or signin
      if (email && password) {
        // Attempt to find the user for sign-in
        const user = await User.findOne({ email });
        
        if (user) {
          // User found, check if the password matches
          if (user.password === password) {
            // Successful sign-in
            return res.status(200).json({ message: "Sign-in successful", user });
          } else {
            return res.status(401).json({ message: "Invalid credentials" });
          }
        } else {
          // User not found, handle signup
          const newUser = new User({
            name,
            email,
            password, // Store password as is
          });
          await newUser.save();
          return res.status(201).json({ message: "User created successfully", user: newUser });
        }
      } else {
        return res.status(400).json({ message: "Email and password required" });
      }
    } catch (error) {
      console.error("Error handling user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
