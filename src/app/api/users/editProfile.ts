/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/api/updateProfile.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import formidable from "formidable";
import fs from "fs";

// Disable the default body parsing so we can handle it ourselves
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "PUT") {
    const form = formidable({ multiples: false });

    form.parse(req, async (err: any, fields: { userId: any; name: any; username: any; bio: any; profession: any; }, files: { image: any[]; }) => {
      if (err) {
        return res.status(500).json({ message: "Error parsing the form" });
      }

      const { userId, name, username, bio, profession } = fields;
      const imageFile = files.image ? files.image[0] : null; // Assuming 'image' is the field name for the uploaded file
      let imagePath: string | undefined;

      try {
        if (!userId) {
          return res.status(400).json({ message: "User ID is required" });
        }

        const updateData: any = { name, username, bio, profession };

        // Handle image upload
        if (imageFile) {
          const tempPath = imageFile.filepath;
          const newImagePath = `uploads/${Date.now()}_${imageFile.originalFilename}`; // New file name
          await fs.promises.rename(tempPath, newImagePath); // Move the file to your desired location
          updateData.image = newImagePath; // Add the new image path to update data
        }

        // Update user profile
        const user = await User.findByIdAndUpdate(userId, updateData, {
          new: true,
          runValidators: true,
        });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "Profile updated successfully", user });
      } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
