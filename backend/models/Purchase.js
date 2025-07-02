import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    unitPrice: Number,
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
  paidAmountOnline: Number,
  paidAmountOffline: Number,
  dueAmount: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Purchase", purchaseSchema);
