import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  bio?: string;
  profession?: string;
  image?: string;
  followers: mongoose.Types.ObjectId[];
  following: mongoose.Types.ObjectId[];
  createdAt: Date;
  scamsPublished: mongoose.Types.ObjectId[];
  likedScams: mongoose.Types.ObjectId[];
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, default: "" },
  profession: { type: String, default: "" },
  image: { type: String, default: "" },
  followers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  scamsPublished: [{ type: mongoose.Types.ObjectId, ref: "Scam" }],
  likedScams: [{ type: mongoose.Types.ObjectId, ref: "Scam" }],
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
