const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    console.log("📦 Incoming payload:", req.body);

    const event = new Event(req.body);
    await event.save();

    res.status(201).json({ success: true, eventId: event._id });
  } catch (err) {
    console.error("❌ Create event error:", err.message);
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json({ success: true, events });
  } catch (err) {
    console.error("❌ Get all events error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }
    res.json({ success: true, event });
  } catch (err) {
    console.error("❌ Get event by ID error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }
    res.json({ success: true, event });
  } catch (err) {
    console.error("❌ Update event error:", err.message);
    res.status(400).json({ success: false, error: err.message });
  }
};
