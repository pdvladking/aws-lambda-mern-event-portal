const mongoose = require("mongoose");

// Organizer Subdocument
const OrganizerSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    whatsapp: { type: String, default: "" },
    message: { type: String, default: "" },
  },
  { _id: false }
);

// Speaker Subdocument
const SpeakerSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    designation: { type: String, default: "" },
    photo: { type: String, default: "" },
  },
  { _id: false }
);

// Agenda Item Subdocument
const AgendaItemSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    time: { type: String, default: "" },
  },
  { _id: false }
);

// Main Event Schema
const EventSchema = new mongoose.Schema(
  {
    template: {
      type: String,
      required: true,
      default: "classic",
      enum: ["classic", "modern"], // optional: restrict allowed templates
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    bannerImage: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    purpose: {
      type: String,
      default: "",
    },
    speakers: {
      type: [SpeakerSchema],
      default: [],
    },
    agenda: {
      type: [AgendaItemSchema],
      default: [],
    },
    partners: {
      type: [String],
      default: [],
    },
    videos: {
      type: [String],
      default: [],
    },
    organizer: {
      type: OrganizerSchema,
      default: () => ({}),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
