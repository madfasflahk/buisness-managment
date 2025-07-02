import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ["owner", "staff"], default: "staff" },
  phone: String,
  email: String,
  password: String,
}, { timestamps: true });

export default mongoose.model("User", userSchema);
