import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
});

export const createEvent = (data) => API.post('/events', data);
export const getEvents = () => API.get('/events');
export const getEventById = (id) => API.get(`/events/${id}`);
export const updateEvent = (id, data) => API.put(`/events/${id}`, data);
