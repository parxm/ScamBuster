import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  scamsPublished: mongoose.Types.ObjectId[];
  likedScams: mongoose.Types.ObjectId[];
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  scamsPublished: [{ type: mongoose.Types.ObjectId, ref: "Scam" }],
  likedScams: [{ type: mongoose.Types.ObjectId, ref: "Scam" }],
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
