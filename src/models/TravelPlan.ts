import mongoose, { Document, Schema } from 'mongoose';

interface ITravelPlan extends Document {
  user_id: mongoose.Schema.Types.ObjectId;
  destination: string;
  start_date: Date;
  end_date: Date;
  alerts_generated: boolean;
}

const TravelPlanSchema: Schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  destination: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  alerts_generated: { type: Boolean, default: false }
});

const TravelPlan = mongoose.model<ITravelPlan>('TravelPlan', TravelPlanSchema);

export default TravelPlan;
