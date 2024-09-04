import mongoose, { Schema, Document, Model } from "mongoose";

export interface IComment extends Document {
  content: string;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
}

const CommentSchema: Schema<IComment> = new Schema({
  content: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment: Model<IComment> =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
export default Comment;
