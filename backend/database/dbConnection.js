import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;

  console.log("🔌 Connecting to MongoDB...");

  mongoose.connect(uri, {
    dbName: "RESTAURANT"
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:");
    console.error(err.message);
  });
};
