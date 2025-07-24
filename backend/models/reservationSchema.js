import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [3, "First name must contain at least 3 characters!"],
    maxlength: [30, "First name cannot exceed 30 characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [3, "Last name must contain at least 3 characters!"],
    maxlength: [30, "Last name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email address",
    },
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value); // Ensures 10-digit number
      },
      message: "Phone number must be exactly 10 digits!",
    },
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
}, { timestamps: true }); // 👈 Adds createdAt, updatedAt

export const Reservation = mongoose.model("Reservation", reservationSchema);
