// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRoutes from "./routes/reservationRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS Configuration — update this block:
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // ✅ Frontend origin
  credentials: true // ✅ Allow cookies, headers
}));

// ✅ Parse JSON request bodies
app.use(express.json());

// Routes
app.use("/api/v1/reservation", reservationRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("✅ API is running");
});

export default app;
