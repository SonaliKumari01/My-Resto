import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  console.log("✅ BODY RECEIVED:", req.body); 

  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill out the full reservation form!", 400));
  }

  try {
    await Reservation.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      date,
      time,
    });

    res.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" "), 400));
    }

    return next(error);
  }
};
