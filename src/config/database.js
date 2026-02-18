import mongoose from "mongoose";
import ENV from "./env.js";

const connectDB = async () => {
  if (!ENV.MONGO_URL) {
    console.error(ENV);
    process.exit(1);
  }

  await mongoose.connect(ENV.MONGO_URL);
  console.log("✅ MongoDB Connected");
};

export default connectDB;
