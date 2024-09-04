import mongoose, { Schema, Document, Model } from "mongoose";

export interface IScam extends Document {
  title: string;
  content: string;
  tags: string[];
  location: string;
  createdAt: Date;
  createdBy: mongoose.Types.ObjectId;
  comments: mongoose.Types.ObjectId[];
  upvotes: number;
}

const ScamSchema: Schema<IScam> = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  upvotes: { type: Number, default: 0 },
});

const Scam: Model<IScam> =
  mongoose.models.Scam || mongoose.model("Scam", ScamSchema);

export default Scam;
