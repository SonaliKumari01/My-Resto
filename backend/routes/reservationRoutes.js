//import app from "../app.js";
import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();



router.post("/send", sendReservation);

export default router;
