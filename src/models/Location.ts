import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILocation extends Document {
  name: string;
}

const LocationSchema: Schema<ILocation> = new Schema({
  name: { type: String, required: true, unique: true },
});

const Location: Model<ILocation> =
  mongoose.models.Location || mongoose.model("Location", LocationSchema);
export default Location;
