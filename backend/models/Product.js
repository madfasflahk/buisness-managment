import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  unit: String,
  currentStock: Number,
  Purchase: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Purchase",
    },
  ],
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
