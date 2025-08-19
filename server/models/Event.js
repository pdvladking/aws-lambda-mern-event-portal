import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    date: Date,
    description: String,
    speakers: [{ name: String, bio: String, image: String }],
    agenda: [{ time: String, topic: String }],
    partners: [{ name: String, logo: String }],
    gallery: [String],
    contactEmail: String,
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
