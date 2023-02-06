const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cardNumber: { type: String },
    cardType: { type: String, enum: ["REGULAR", "SPECIAL"] },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" },
    customerName: { type: String },
    vision: { type: String },
    customerID: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);
