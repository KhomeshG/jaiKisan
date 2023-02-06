const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    mobileNumber: { type: String },
    DOB: { type: Date },
    emailID: { type: String },
    address: { type: String },
    customerID: { type: String, default: mongoose.Types.ObjectId },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", customerSchema);
