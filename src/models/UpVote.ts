import mongoose, { Document, Schema } from 'mongoose';

interface IUpvote extends Document {
  article_id: mongoose.Schema.Types.ObjectId;
  user_id: mongoose.Schema.Types.ObjectId;
}

const UpvoteSchema: Schema = new Schema({
  article_id: { type: Schema.Types.ObjectId, ref: 'Article', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Upvote = mongoose.model<IUpvote>('Upvote', UpvoteSchema);

export default Upvote;
