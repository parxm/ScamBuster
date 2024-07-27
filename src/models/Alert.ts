import mongoose, { Document, Schema } from 'mongoose';

interface IAlert extends Document {
  user_id: mongoose.Schema.Types.ObjectId;
  travel_plan_id: mongoose.Schema.Types.ObjectId;
  alert_message: string;
  date_sent: Date;
}

const AlertSchema: Schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  travel_plan_id: { type: Schema.Types.ObjectId, ref: 'TravelPlan', required: true },
  alert_message: { type: String, required: true },
  date_sent: { type: Date, default: Date.now }
});

const Alert = mongoose.model<IAlert>('Alert', AlertSchema);

export default Alert;
