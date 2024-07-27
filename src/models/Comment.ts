import mongoose, { Document, Schema } from 'mongoose';

interface IComment extends Document {
  article_id: mongoose.Schema.Types.ObjectId;
  user_id: mongoose.Schema.Types.ObjectId;
  content: string;
  date_posted: Date;
}

const CommentSchema: Schema = new Schema({
  article_id: { type: Schema.Types.ObjectId, ref: 'Article', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  date_posted: { type: Date, default: Date.now }
});

const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;
