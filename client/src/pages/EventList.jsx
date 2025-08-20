import { useEffect, useState } from 'react';
import { getEvents } from '../api';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((res) => setEvents(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold">All Events</h1>
      {events.map((event) => (
        <Link
          key={event._id}
          to={`/event/${event._id}`}
          className="block p-4 border rounded hover:bg-gray-100"
        >
          <h2 className="text-xl font-semibold">{event.title}</h2>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default EventList;
