import mongoose from "mongoose";

let isConnected: number | undefined;

async function dbConnect(): Promise<void> {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

export default dbConnect;
