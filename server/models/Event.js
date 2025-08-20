// models/Event.js
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    template: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    bannerImage: { type: String },
    description: { type: String },
    purpose: { type: String },
    speakers: [
      {
        name: String,
        designation: String,
        photo: String,
      },
    ],
    agenda: [
      {
        title: String,
        time: String,
      },
    ],
    partners: [String],
    videos: [String],
    organizer: {
      name: String,
      email: String,
      whatsapp: String,
      message: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
