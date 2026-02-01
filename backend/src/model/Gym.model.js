import mongoose from "mongoose";

const GymSchema = new mongoose.Schema(
  {
    name: String,
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    location: String,
    city: String,
    address: String,
    capacity: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Gym", GymSchema);
