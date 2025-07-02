import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    unitPrice: Number,
    discount: { type: Number, default: 0 },
  }],
  totalAmount: Number,
  discountTotal: Number,
  paidAmountOnline: Number,
  paidAmountOffline: Number,
  dueAmount: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Sale", saleSchema);
