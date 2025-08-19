import Event from "../models/Event.js";

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  event ? res.json(event) : res.status(404).json({ message: "Not found" });
};

export const createEvent = async (req, res) => {
  const newEvent = new Event(req.body);
  const saved = await newEvent.save();
  res.status(201).json(saved);
};
