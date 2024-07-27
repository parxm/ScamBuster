import mongoose, { Document, Schema } from 'mongoose';

interface IArticle extends Document {
  user_id: mongoose.Schema.Types.ObjectId;
  title: string;
  content: string;
  date_posted: Date;
  location?: string;
  scam_type?: string;
  upvotes_count: number;
  comments_count: number;
}

const ArticleSchema: Schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  date_posted: { type: Date, default: Date.now },
  location: String,
  scam_type: String,
  upvotes_count: { type: Number, default: 0 },
  comments_count: { type: Number, default: 0 }
});

const Article = mongoose.model<IArticle>('Article', ArticleSchema);

export default Article;
