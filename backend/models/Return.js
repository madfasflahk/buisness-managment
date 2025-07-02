import mongoose from "mongoose";

const returnSchema = new mongoose.Schema({
  type: { type: String, enum: ["sale", "purchase"], required: true },
  referenceId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    refPath: "typeRef" // Dynamically points to Sale or Purchase model
  },
  typeRef: { // hidden field to help Mongoose refPath work
    type: String,
    required: true,
    enum: ["Sale", "Purchase"]
  },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" }, // for sale return
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" }, // for purchase return
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Return", returnSchema);
