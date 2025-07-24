// server.js
import dotenv from "dotenv";
dotenv.config(); // Load environment variables first

import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js"; // 👈 Import MongoDB connection

dbConnection(); // 👈 Connect to MongoDB before starting the server

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 SERVER HAS STARTED AT PORT ${PORT}`);
});
