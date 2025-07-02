import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
}, { timestamps: true });

export default mongoose.model("Supplier", supplierSchema);
